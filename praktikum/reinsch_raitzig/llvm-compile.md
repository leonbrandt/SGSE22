# Kompilierung von LLVM

## LLVM Build System

LLVM umfasst mehrere Komponenten. Für die weiteren Untersuchungen ist Clang wichtig. Clang ist der LLVM-Compiler für C/C++.

Wie LLVM gebaut wird, wird in [*Getting Started with the LLVM System*](https://llvm.org/docs/GettingStarted.html) beschrieben. LLVM benutzt [CMake](https://cmake.org/) zum Konfigurieren. Mit CMake können Ninja-Build-Dateien, Makefiles sowie Visual Studio und XCode-Projekte erstellt werden. Beim Aufruf von CMake können Konfigurations-Parameter mitgegeben werden.

## Bauen mit Docker

Hier wird LLVM innerhalb eines [Docker](https://www.docker.com/)-Containers gebaut. Dadurch kann die kompilierte LLVM-Toolchain überall benutzt werden. (Docker ist für Linux, Windows und MacOS verfügbar.)

Ein Docker-Container wird mittels eines Dockerfiles erstellt. Das von uns erstellte Dockerfile ist [hier](https://github.com/mwithoeft/SGSE22/blob/main/praktikum/reinsch_raitzig/Dockerfile) hinterlegt.

Der Container kann mit folgendem Befehl erstellt werden (wenn man sich im gleichen Ordner wie das Dockerfile befindet):
```bash
docker build . -t llvm-mlgo
```

Der Container kann dann z.B. mit folgendem Befehl gestartet werden:
```bash
docker run --rm -it llvm-mlgo
```

## Beschreibung des LLVM-Builds
Das Bauen besteht aus folgenden Schritten:

- Es wird die zum Bauen benötigte Software installiert. Die umfasst Clang (Version 12) als Compiler und [Tensorflow](https://www.tensorflow.org/) als Machine Learning Framework für MLGO.
- Clang wird als System-Compiler (an Stelle von GCC) konfiguriert.
- Die LLVM-Sources werden heruntergeladen und die neueste stabile Version (Version 14) ausgecheckt.
- Tensorflow wird so konfiguriert, wie es für MLGO zum Bauen von LLVM nötig ist.
- Mit CMake wird LLVM konfiguriert. LLVM wird mit allen Komponenten gebaut, die zur Kompilation wie Firefox notwendig sind, wie z.B. WebAssembly-Support. Hier werden Makefiles generiert.
- LLVM wird gebaut und installiert.
