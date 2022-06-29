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
