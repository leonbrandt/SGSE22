# Quellen bzgl. Wasm & Compilerbau #

- Build a compiler for wasm: https://blog.scottlogic.com/2019/05/17/webassembly-compiler.html
- state of ml in optimization: https://arxiv.org/pdf/1805.03441.pdf
- "Machine Learning Guided Compiler Optimizations Framework" (Google):
	https://github.com/google/ml-compiler-opt
	- Da gibts auch ein Paper zu: https://arxiv.org/pdf/2101.04808.pdf

## MLGO Notes ##

- Framework, um ML-Modelle in Optimierungspässe von LLVM
zu integrieren, bzw. Pässe durch ML-Modelle zu ersetzen
- Als Pilot-Optimierung wurde die auf Heuristiken basierende
"inlining for size" Optimierung ausgetauscht
- Zwei unterschiedliche ML-Algorithmen verwendet (TODO: hierzu weiter recherchieren):
	- Policy Gradient
	- Evolution Strategies

### Motivation ###

- Problem: Optimierungsprobleme (im Sinne von "die **echt** optimale Lösung finden")
sind meist NP-hart
- aktuelle Lösung: Nutzung von Heuristiken, die per Hand mit viel Fachwissen erstellt
werden, gepflegt werden müssen und evtl. irgendwann überholt sind
	- da Heuristiken von Hand gepflegt werden müssen, ist die Anzahl der Parameter, die effektiv
	in Heuristik verwendet werden können, begrenzt (stark steigende Komplexität)
- neue Idee: Ersetzung dieser Heuristiken durch ML-Modelle (Verwendung von Reinforcement Learning),
da man sich verspricht, dass diese Modelle besser generalisieren als
Heuristiken und "einfacher" erstellt werden können

### Warum RL? ###

- es gibt keine Beispiele, die zeigen, ob bspw. inlining einer bestimmten Kante
des CFG (control flow graph) an einer bestimmten Call Site zu einer optimalen Lösung führt
- es können effektiv neue Strategien getestet und iterativ verbessert werden
	- da keine "labels" (keine Beispiele für optimale Lösungen) existieren,
	kann kein Supervised Learning verwendet werden
	- RL lebt von trial and error
	- interagiert mit seiner Umgebung (kompiliert Code), beobachtet und passt die
	policy an (die Entscheidungsregeln), iterativ
- eine Alternative stellen Evolution Strategies dar (Teil der Black Box Optimierungstechniken)
	- lernt auch durch trial and error

### Reinforcement Learning in MLGO ###

Dieser Abschnitt fasst Reinforcement Learning in MLGO zusammen. Dabei wurde das Paper [MLGO: a Machine Learning Guided Compiler Optimizations Framework](https://arxiv.org/abs/2101.04808) als Quelle genutzt.

Bei Reinforcement Learning werden Agenten betrachtet, welche Entscheidungen treffen. Diese können positiv oder negativ sein, was zum Anpassen des Agenten genutzt wird.
Hier ist der Agent der Compiler. Der Compiler führt entweder Inlining durch oder nicht. Je nachdem, ob sich Inlining als gute Entscheidung oder als Fehler erwiesen hat, wird der Agent angepasst.
Eine Code-Basis wird vom Agenten immer wieder kompiliert, bis möglichst gute Taktiken gefunden wurden.

Das Problem wurde als Markov-Decision-Process (MDP) modelliert. Beim MDP gibt es Zustände, deren Übergänge mit Wahrscheinlichkeiten versehen sind. Zudem gibt es eine Reward-Funktion. Der Agent führt Aktionen aus.
Die Umgebung befindet sich an einem Zeitpunkt *t* in einem bestimmten Zustand *s(t)* und der Agent führt eine Aktion *a(t)* aus. Der Agent erhält eine Belohnung durch die Reward-Funktion *R(s(t), a(t))*. Der nächste Zustand *s(t+1)* wird mit Hilfe einer Wahrscheinlichkeisdistribution ausgewählt, welche vom Zustand und der Aktion des Agenten abhängt, d.h. *P(s(t+1) | s(t), a(t))*. Es werden solange Aktionen ausgeführt, bis ein Endzustand erreicht ist.
Der Agent ist so modelliert, dass dieser eine (weitere) Wahrscheinlichkeitsdistribution nutzt, um die nächste Aktion auszuwählen im aktuellen Zustand auszuwählen, *pi = Pr(a(t) | s(t))*. Die Funktion *pi* ist durch ein neuronales Netz gegeben. Ziel des Agenten ist es, die Belohnung insgesamt *R = \Sigma_{t=0}^T R(s(t), a(t))* zu maximieren. Dazu wird der Gradient von *R* mittels Monte-Carlo-Methoden approximiert und Gradient Ascent durchgeführt.
Die Reward-Funktion ist theoretisch so modelliert, dass bei keinem Inlining die Belohnung 0 ist und bei Inlining die erreichte Größenreduktion der beteiligten Funktionen ist. Die tatsächlich erreichte Größenreduktion wird erst in einer späteren Phase des Compilers ersichtlich, so dass hier zum Training 11 Features genommen werden, um das theoretisch gewünschte *R(s, a)* zu approximieren:
- caller_basic_block_count
- caller_conditionally_executed_blocks
- caller_users
- callee_basic_block_count
- callee_conditionally_executed_blocks
- callee_users
- callsite_height
- cost_estimate
- number_constant_params
- edge_count
- node_count
Diese Features entsprochen in etwa den Informationen, die die bisherigen Heuristiken verwenden.
Anstatt *R(s, a)* zu approximieren, kann die insgesamte Belohnung *R* verwendet werden, weil diese nach der Kompilierung sich einfach aus der Größe der kompilierten Binary ergibt. Es wurde sich im Paper dagegen entschieden dieses zu verwenden, weil mehr Daten für die gleiche Performanz notwendig gewesen wären und trotzdem keine bessere Qualität des Modells garantiert ist.

Um das Training zu verschnellern, wird *pi* nicht zufällig initialisiert, sondern mittels eines Cloning-Algorithmus so initialisiert, dass die bisherigen LLVM-Inlining-Heuristiken nachgebildet werden.

### Evolution in MLGO ###

Dieser Abschnitt fasst Reinforcement Learning in MLGO zusammen. Dabei wurde das Paper [MLGO: a Machine Learning Guided Compiler Optimizations Framework](https://arxiv.org/abs/2101.04808) als Quelle genutzt.

Bei diesem Ansatz wird anstatt der insgesamten Belohnung *R* eine geglättete Version von *R* maximiert. Die Belohnung *R* hängt von den Parametern *theta* des Modells *pi* ab. Anstatt *R(theta)* zu maximieren, wird auch die Umgebung von *theta* betrachtet, d.h. naheliegende Werte für *theta*. Dabei wird die Größe *epsilon* der Umgebung durch eine Multivariable-Normal-Distribution bestimmt sowie mit einem weiteren Faktor *sigma*. Die so zu maximierende Funktion wird *J(theta)* genannt.
Wie bei Reinforcement Learning, werden Monte-Carlo-Methoden genutzt, um *J(theta)* zu approximieren.

### MLGO und LLVM ###

MLGO besteht aus zwei Teilen:

- Innerhalb von LLVM werden die KI-Modelle für Optimierungen genutzt
- Training von KI-Modellen, dieser Code ist im [MLGO-Repository](https://github.com/google/ml-compiler-opt)

Mit dem MLGO-Repository können KI-Modelle trainiert werden, welche dann in LLVM integriert werden. Dazu gibt es allgemeinen Code in LLVM, z.B. [MLInlineAdvisor.cpp](https://github.com/llvm/llvm-project/blob/main/llvm/lib/Analysis/MLInlineAdvisor.cpp). Dieser Code ist in so fern allgemein, als dass kein trainiertes KI-Modell im Source Code von LLVM ist. Erst beim Kompilieren von LLVM wird ein konkretes Modell in LLVM eingebaut.

# Offene Fragen #

- Welche LLVM-Pässe haben Einfluss auf die executable size?
	- https://link.springer.com/content/pdf/10.1007/s40012-019-00248-5.pdf
- Welche dieser Pässe nutzen Heuristiken, die effektiv durch
	ML-Modelle ausgetauscht werden können? (kritische Frage!)

## Auswahl Pass ##

Aus Paper:
- Oz reduces the binary size as compared to O0
- Major reduction of code size comes by the application of GF
and G0
- G1 further reduces the code size, but all the other groups
increase te binary size
	- Formulierung: G3 ist insbesondere mit Optimierung hinsichtlicht
	Performance befasst -> klassischer Trade-Off zwischen Platz
	und Geschwindigkeit
	- Evtl. bietet das hier Möglichkeiten, wo individuell
	entschieden werden muss und die Auswirkung nicht so
	eindeutig vorhersagbar ist..
	- `inline` zählt allerdings auch zu G0 und wird nicht weiter
	erläutert -> wird allerdings von MLGO als Pilot-Pass verwendet
- Conclusion: G0 does the major work of all shrinkage
	- Enthaltene Pässe in G0:
```
-forceattrs -inferattrs -ipsccp -globalopt -mem2reg -deadargelim -instcombine -simplifycfg -
prune-eh -inline -functionattrs
```
- G0 wird aber noch in weitere subgruppen aufgeteilt

Betrachtung zu runtime:
- GF gives the maximum reduction -> GF is very important for
overall run time
- G0 also helps for runtime

LLVM Doku:
- Evtl. kann mit Register Allokierung was gemacht werden
	- https://llvm.org/doxygen/namespacellvm.html#a7a9820a919f39641bb331ebe3baed939
- demangle nutzt auch Heuristiken
- loop unrolling scheint auch Heuristiken zu nutzen
- loop rotation auch
- Doku zu struct EvictionCost: "Cost of evicting interference - used by default advisor, and the eviction chain heuristic in RegAllocGreedy."



Weitere Papers:
- https://link.springer.com/content/pdf/10.1007/s10766-010-0161-2.pdf
- https://llvm.org/devmtg/2018-04/slides/Yatsina-LLVM%20Greedy%20Register%20Allocator.pdf
	- Das sieht hier so aus, als ob Kosten für ein bestimmtes
	Szenario ("Eviction") berechnet werden, teilweise diese Berechnung aber nicht
	ganz passend ist (bzw. genau falschrum)
	- Die Heuristik scheint im EvictionAdvisor umgesetzt
	zu sein: https://github.com/llvm/llvm-project/blob/d4b1be20f6e52f4f966b7bd471f197c685a255e2/llvm/lib/CodeGen/RegAllocEvictionAdvisor.cpp
	- Frage hierzu: wie sieht das mit "Registern" in wasm aus?
	Kann man da evtl. irgendwas spezialisieren? Bzw. wie testet
	man das korrekte Verhalten der erzeugten Register Allokation?

WASM Codegen with LLVM:
- https://v8.dev/blog/emscripten-llvm-wasm
- build emscripten from source: https://emscripten.org/docs/building_from_source/index.html
- C to wasm: https://surma.dev/things/c-to-webassembly/

# LLVM Projects #

- https://llvm.org/OpenProjects.html
- Instrumentation Projekt: https://discourse.llvm.org/t/instrumentation-of-clang-llvm-for-compile-time/60383
