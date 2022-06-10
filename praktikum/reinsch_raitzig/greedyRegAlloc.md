# GreedyRegAlloc LLVM-Pass #

https://www.youtube.com/watch?v=hf8kD-eAaxg&t=1016s

- Live Interval Analysis ist vorgeschaltet
	- Analyse der Intervalle, in denen Variablen "alive" sind
	- Analyse der `uses` und `defs` einer Variablen
	- Zu Intervallen zusammenfügen
- Verschiedene Phasen:
	- Spill Weight Calculation
		- für jedes Intervall (vorher analysiert)
			- `x` wird in 'hot loop' verwendet
				- higher spill weight
			- `x` ist 'cheaply rematerializable'
				- lower spill weight
			- abhängig von diversen Parametern
		- Definition register Spill:
			- Problem: nur begrenzt viele Register in CPU vorhanden (ist aber
			der schnellste Speicher)
			- Ziel: so viele "alive" Variablen (bzw. deren
			Werte) in Registern halten, wie möglich
			- in einigen Situationen mehr alive Variablen als register ->
			register spill: auslagern von variablen in memmory (erstmal cache,
			dann später main memory)
			- spill weight beschreibt im `GreedyRegAlloc` Pass wahrscheinlich die
			Schwere, die das Spilling einer Variablen für die Performance
			des Programms hat
		- Definition rematerialization:
			- "Rematerialization in register allocation amounts to re-computing
			values instead of spilling them in memory when registers run out."
			- from: https://www.researchgate.net/publication/228531239_Register_Reverse_Rematerialization
	- Priority Queue Construction
		 - für jedes Intervall
		 	- Berechnung der allocation priority des Intervalls
				- `w` is local in one basic block -> lower prio
				- `x` is global and spans across a lot of instructions -> higher prio
			- variablen in priority sammeln
			- dequeue: immer die Variable mit der höchsten allocation prio
	- nachfolgende für jedes interval in der priority queue:
		- Register Assignment
			- dequeue interval und versuchen, in verfügbarem register einzuordnen
				- erfordert modellierung des zeitlichen verlaufs
			- hierbei können konflikte auftreten, wenn die bereits zugewiesenen
			intervalle sich mit einem zuzuweisenden interval überschneiden
				- erfordert "Eviction" -> "Räumung"
		- Eviction
			- vergleich der spill weights für eviction-Kandidat & zuzuweisenden
			Interval
			- das Interval mit höherem Gewicht wird in Register allokiert
				- Falls Eviction: evicted Interval landet wieder in prio-queue
			- falls Variable evicted wurde und anschließend aufgrund
			niedrigem Spill-Weight nicht mehr allokiert werden kann: Mark it
			for Split!
				- und wieder in prio queue einordnen
				- da für spilt markiert: niedrigere Prio
		- split
			- interval aufteilen
			- Frage: bringt uns der split was?
				- falls ja: wie soll interval gesplittet werden?
				- bei split: zwei neue intervalle erzeugen und eine copy instruktion
				zwischen den intervallen hinzufügen
					- auch für die gesplitteten intervalle muss spill weight
					berechnet werden
					- hierbei kann das spill weight eines Teils höher sein, als das
					spill weight des gesamten intervalls
				- anschließend wieder allokation nach bekanntem muster versuchen
					- auch hierbei kann wieder eine eviction auftreten, da spill weights
					anders sind
					- dieser iterative prozess wird: "split-eviction gradual refinement" genannt
						-> Kernidee des GreedyRegAlloc algorithmus
		- spill
			- anwendung, falls split nichts positives bringt
			- spill around uses
				- spill after def (auslagern in memory)
				- reload before use (laden aus memory)
			- erzeugt zwei neue intervalle (für spil und reload)
			- das ursprüngliche interval existiert nicht mehr (der mittelpart
			zwischen spill und reload )
- Find best split
	- register haben bereits zugewiesene intervalle (das sind erstmal constraints
	für das Finden eines gutes Splits und für die Allokation)
	- für jedes Register einen split berechnen und vergleichen
		- split-cost abschätzen (menge spill code, die durch split auftreten kann)
		- auswahl des registers mit den geringsten kosten
	- wie den besten split für ein ggb. register finden
	- "Region split" in zwei INtervalle aufgeteilt
		- ByReg
			- die Parts passen gut in die verbleibenden Plätze im Register
		- ByStack
			- die Parts, die mit aktueller Belegung in Register kollidieren
			- wird entweder einem anderen Register zugewiesen oder wird auf dem Stack gespeichert
	- Was ist ein guter Split?
		- reduziert übergänge zwischen byReg und ByStack (immer mit Copy verbunden)
		- die Übergänge in kältere Basic Blocks packen (die weniger oft durchlaufen werden)
		- hierfür wird anscheinend ein "Hopfield neural network" genutztgenutzt
- Wann bringt uns split was? "When is split beneficial?"
	- vergleich mit normalen spills um die defs und uses einer variablen
	- wenn spills reduziert werden können, bringt es was
	- Erzeugung von "Regions", in denen Variable in register lebt (Fassen meherere
	Basic Blocks zusammen)
		- wenn durch split eine Region erzeugt werden kann, dann werden spills dieser
		variablen reduziert
- encountered issues:
	- "local interference" in split cost calculation
		- Hopfield neural network genutzt
		- network bestimmt, wie x an den cfg-kanten weitergegeben wird (byreg, bystack)
			- das erfordert dann teilweise copy-instructions, wenn eine variable
			mit byreg ein CFG-Block betritt, aber bystack verlässt
			- network beachtet nicht, was in der mitte vom block passiert
			- wenn x byReg in R1 Block betritt und auch wieder verlassen soll und y
			aber schon in R1 allokiert wurde und x wird in Block verwendet,
			dann heißt das local interference; man kann x nicht lokal in Block
			zu R1 zuweisen
		- um das zu beheben müsste man auch betrachten, was in dem Block selbst
		passiert
- performance impact
- "Need a more holistic approach for quantifying the cost of local interferences
caused by split"
