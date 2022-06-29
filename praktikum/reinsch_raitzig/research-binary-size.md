# Einfluss von MLGO auf die Größe von Binaries

Es wurde untersucht, welcher Einfluss die Benutzung von MLGO auf die Größe der kompilierten Programme (Binaries) hat.

## MLGO beim Einsatz von LLVM/Clang

Beim Clang kompilieren mit Clang können unterschiedliche Optimierungsstufen eingestellt werden. Dabei ist `-Oz` die Option, die hinsichtlich Code-Größe optimiert.

MLGO wird standardmäßig nicht benutzt und kann mit `-mllvm -enable-ml-inliner=release` aktiviert werden.

## Ergebnisse

Um den Einfluss von MLGO zu untersuchen, wurden mehrere Programme einmal nur mit `-Oz` und einmal mit `-Oz` sowie `-mllvm -enable-ml-inliner=release` kompiliert.

Die Ergebnisse sind in folgender Tabelle zusammengefasst. Die Größen sind jeweils in Bytes:

| Programm                                                             | nur `-Oz` | `-Oz` und MLGO | Verkleinerung durch MLGO in % |
| -------------------------------------------------------------------- | --------- | -------------- | ----------------------------- |
| [VLC media player](https://www.videolan.org/vlc/)                    | 21168     | 21168          | 0                             |
| [Firefox](https://www.mozilla.org/en-US/firefox/) (nur Haupt-Binary) | 5995576   | 5752536        | 4,05                          |
| Firefox (inklusive Bibliotheken)                                     | 69531415  | 68351749       | 1,70                          |
| [Thunderbird](https://www.thunderbird.net/) (nur Haupt-Binary)       | 5969976   | 5727176        | 4,07                          |
| Thunderbird (inklusive Bibliotheken)                                 | 105529227 | 103787207      | 1,65                          |
| [Linux Kernel](https://www.kernel.org/)                              | 568156016 | 568156016      | 0                             |
| [jp2a](https://github.com/Talinx/jp2a)                               | 57976     | 57976          | 0                             |

Teilweise sind durch MLGO (zu `-Oz` zusätzliche) Größenreduktionen im einstelligen Prozentbereich sichtbar. Ob die Größe der Binaries durch MLGO reduziert werden kann, hängt stark vom jeweiligen Programm ab.

## Bash-Script

Das Kompieleren der Programme wurde mit dem [hier](https://github.com/mwithoeft/SGSE22/blob/main/praktikum/reinsch_raitzig/mlgoscript.sh) verfügbaren Bash-Script durchgeführt. Es kann in dem [hier](praktikum/reinsch_raitzig/llvm-compile.md#Bauen-mit-Docker) beschriebenen Docker-Container ausgeführt werden.

Neben diesem Script ist auch noch eine Konfigurationsdatei für das Bauen des Linux-Kernels notwendig. Diese kann [hier](https://github.com/mwithoeft/SGSE22/blob/main/praktikum/reinsch_raitzig/linuxconfig) gefunden werden und muss unter `/linuxconfig` im Container hinterlegt werden.

Das Bash-Script kann z.B. unter dem Namen `mlgoscript.sh` gespeichert werden und wrid wie folgt ausgeführt:
```bash
chmod +x mlgoscript.sh
. mlgoscript.sh
```

Nach dem Ausführen werden die Größen der Binaries ausgegeben. Sie werden zudem in die Text-Datei `~/sizes.txt` geschrieben.

Das Script ist so aufgebaut, dass die einzelnen Programme einzeln kompiliert werden können. Z.B. kann nur Thunderbird kompiliert werden, indem der entsprechende Abschnitt des Scriptes ausgeführt wird.
