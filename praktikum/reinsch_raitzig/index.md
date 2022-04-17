# Christoph Raitzig & Malte Reinsch #

## Wasm mit compilerbau ##

- Verbindung wasm und compilerbau
	- Optimierung speziell für wasm
	- KI Optimierung für wasm
		- Nutzung / Erweiterung von [MLGO](https://arxiv.org/pdf/2101.04808.pdf)
		- Potentielles Ziel: Optimierung hinsichtlich Codegröße (.wasm muss immer
		an Client geschickt werden)
		- wie kommt man da an Daten und wie verwendet man die (Praxisbeispiele)?
	- von LLVM nach wasm?

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


