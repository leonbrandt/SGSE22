# Christoph Raitzig & Malte Reinsch #

## Frage ##

Es soll MLGO untersucht werden. MLGO ist ein KI-gestütztes Verfahren, um Code beim Kompilieren zu verbessern.

Insbesondere soll untersucht werden, welchen Einfluss MLGO auf die Codegröße hat.

## Wissenschaftliche Problemstellung ##

Folgende Aspekte sollen untersucht/erläutert werden:

- Wie funktioniert MLGO?
- Wie wird MLGO trainiert?
- Was kann mit MLGO optimiert werden?
- Wie wird MLGO in LLVM intergriert?
- Welchen Einfluss hat MLGO theoretisch auf Codegröße und Performanz?
- Welchen Änderungen der Codegröße lassen sich in der Praxis beobachten?

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





## Kompilierung von LLVM ##

[LLVM kompilieren](praktikum/reinsch_raitzig/llvm-compile.md)

## Einfluss von MLGO auf Codegröße ##

[Untersuchung des Einflusses von MLGO auf die Codegröße](praktikum/reinsch_raitzig/research-binary-size.md).









## LLVM ##

TODO:
- Allgemeiner Überblick
- clang
- Architektonischer Überblick
- Optimierer
- Wie funktioniert allgemein der Aufruf und die Einbindung von Optimierungspässen?

Compiler sind komplexe Programme, deren Aufgabe die Übersetzung von (High Level)
Programmiersprachen in Maschinencode für eine spezifische Prozessorarchitektur ist.
Während dieses Übersetzungsprozesses werden häufig Optimierungsschritte vorgenommen,
die den Programmcode verändern, sodass der generierte Maschinencode kleiner, schneller
und energieeffizienter wird (zwischen diesen drei Zielen muss allerdings eine Balance
gefunden werden).

Compiler werden allgemein in zwei Schichten unterteilt. Das sprachspezifische
Frontend, welches lexikalische, syntaktische und semantische Analysen vornimmmt und
das Backend, welches Optimierungsschritte vornimmt und Maschinencode generiert.

TODO: Nystrom Bild einbauen.

LLVM (**L**ow **L**evel **V**irtual **M**achine) ist ein Framework welches die
Implementierung eines Compilers erleichtert. Kern dieses Frameworks ist die
LLVM Intermediate Representation (LLVM-IR), die eine generische High Level
Maschinensprache repräsentiert, die an keine Zielarchitektur gebunden ist.

TODOs:
- LLVM-IR Hierarchie
- SSA?
- Aufruf-Schaubild

Neben der Definition der LLLVM-IR beeinhaltet das LLVM Projekt viele Komponenten,
die das Compiler-Backend implementieren, unter anderem einen Optimierer, einen Linker
und die Generierung von architekturspezifischem Maschinencode. Diese Komponenten
operieren auf der LLVM-IR, sodass das generische Backend von dem sprachspezifischen
Frontend losgelöst ist.

Der Optimierer ist modular in einzelnen Optimierungspässen aufgebaut, die jeweile eine
einzelne Optimierung (bspw. Constant-Propagation oder Dead-Code Elimination)
ausführen. Diese Optimierungspässe können für verschiedene Optimierungslevel
kombiniert werden (hierbei ist allerdings darauf zu achten, dass die Reihenfolge
der Optimierungspässe starke Auswirkungen auf die Optimierungsergebnisse haben kann).



## Inlining Pass##

- Was macht der?
- Wie funktioniert der allgemein?
- Was trifft der Pass für Annahmen?
- In welchen Szenarien hat der Pass Probleme?

