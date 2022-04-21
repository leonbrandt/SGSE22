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

# Offene Fragen #

- Welche LLVM-Pässe haben Einfluss auf die executable size?
	- https://link.springer.com/content/pdf/10.1007/s40012-019-00248-5.pdf
- Welche dieser Pässe nutzen Heuristiken, die effektiv durch
	ML-Modelle ausgetauscht werden können? (kritische Frage!)



# LLVM Projects #

- https://llvm.org/OpenProjects.html
- Instrumentation Projekt: https://discourse.llvm.org/t/instrumentation-of-clang-llvm-for-compile-time/60383
