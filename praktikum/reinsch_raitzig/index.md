# Christoph Raitzig & Malte Reinsch #

## Evaluierung der Anwendungsmöglichkeiten von Machine Learning gestützten Compiler-Optimierungsverfahren bezüglich WebAssembly ##

Ziel:
- Untersuchung zweier Fälle:
	- Optimierung hinsichtlich Codegröße (Begründung: .wasm muss immer an Client geschickt werden)
	- Optimierung hinsichtlich Performance (Begründung: Kernidee von WebAssembly ist das Versprechen von Performance)
- Mögliche Ausprägungen:
	- Anwendung von MLGO mit .wasm und beobachten, wie sich Codegröße ändert
	- Erweiterung von MLGO mit weiterem Modell für weiteren Pass
	und Effekt auf Codegröße beobachten
		- Annahme eines Passes, der analysiert werden soll
- kein wissenschaftliches Paper
- Nutzung / Erweiterung von [MLGO](https://arxiv.org/pdf/2101.04808.pdf)

TODOs:
- Pass festlegen, der hinsichtlich Codegröße und Performance relevant ist und Ergebnisse verspricht
- Benchmark-Projekt finden
	- Wie integriert man custom-LLVM mit KI-Modell in die Toolchain?
		- Unity: nutzt "complex toolchain" aus IL2CPP, emscripten, binaryen
- Welche Projekte zum trainieren nutzen?
- Wie können MLGO und LLVM erweitert werden, sodass eigener Pass trainiert werden kann?
	- [feature-doc](https://github.com/google/ml-compiler-opt/blob/main/docs/adding_features.md)
	- [demo-doc](https://github.com/google/ml-compiler-opt/blob/main/docs/demo/demo.md)
- Welche Features sind für Training bzgl. ausgewähltem Pass wichtig?
- Realisierung

## Projektplanung ##

[Meilensteinplan](https://crocus-island-7de.notion.site/e698d92cbf0a476d8f044fe727f03ea3?v=29abe0d1019e4d908513bf765bc34eff)

## Recherche ##

[Recherche zum MLGO Paper/Framework](praktikum/reinsch_raitzig/research.md)

## Nächste Aufgaben ##

### LLVM-Seite ###

- Integration von KI-Modell in RegAllocAdvisor
- Wrapper (z.B. Adapter-Pattern) um KI-Modell mit gemeinsamem Interface

### KI-Seite ###

- Reinforcement Learning
	- Feature-Engineering
- Training und Bauen mit fuchsia

## Register Allocation Pass ##

TODO: aus research.md zusammenfassen

## experimentelle Toolchain ##

TODO: siehe research
TODO: validieren
