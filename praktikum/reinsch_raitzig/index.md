# Christoph Raitzig & Malte Reinsch #

## Wasm mit compilerbau ##

TODO: genaue Fragestellung definieren
TODO: Projektplan / wer macht was?

- Verbindung wasm und compilerbau
	- Optimierung speziell für wasm
	- KI Optimierung für wasm
		- Nutzung / Erweiterung von [MLGO](https://arxiv.org/pdf/2101.04808.pdf)
		- Potentielles Ziel: Optimierung hinsichtlich Codegröße (.wasm muss immer
		an Client geschickt werden)
		- wie kommt man da an Daten und wie verwendet man die (Praxisbeispiele)?
			- evtl. Unity-WebAssembly Projekt als Testprojekt verwenden
			- Frage: wie hängt sich der angepasste Compiler in die entsprechende
			Toolchain ein?
	- von LLVM nach wasm?

[Recherche zum MLGO Paper/Framework](praktikum/reinsch_raitzig/research.md)

- Potentielles Ziel: Optimierung hinsichtlich Codegröße (.wasm muss immer
an Client geschickt werden)
- Auch hinsichtlich Performance testen
- Mögliche Ausprägungen:
	- Anwendung von MLGO mit .wasm und beobachten, wie sich Codegröße
	ändert
	- Erweiterung von MLGO mit weiterem Modell für weiteren Pass
	und Effekt auf Codegröße beobachten

- Annahme eines Passes, der analysiert werden soll
- Ziel: kein wissenschaftliches Papier, semi-formal wissenschaftlich
bearbeiten

-------------

## Backup: Fragestellung ##

Vergleich verschiedener Rust-Frameworks zur Erzeugung von WebAssembly im
Hinblick auf architektonische Unterscheide, Performance und Größe des erzeugten WebAssembly-Codes

### Frameworks ###

- yew
- seed
- percy
- perseus
- sycamore
- ...

### Zu vergleichende Parameter ###

- Denkansätze / architektonische Ansätze
- Entwicklererfahrung
- Größe des erzeugten WebAssembly-Codes (des Deployments)
- Performance

### "Testaufbau" ###

- Umsetzung einer kleinen Webanwendung (z.B. einfaches soziales Netzwerk)
- Datenbank & Backend bleiben konstant

## Ziel der Arbeit ##

- Ermittlung des "besten" Frameworks im Hinblick auf oben genannte Parameter


