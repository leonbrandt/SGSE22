# Computergraphik (Raytracer)

## Raytracer im Web

* Performancevergleich eines Raytracers geschrieben in WebAssembly Text Format und konvertiert zu WebAssembly mit Emscription
	* WebAssembly Text Format
		* Low Level Darstellung von WebAssembly
		* besser lesbar
		* konvertierung mit wat2wasm
	* Emscription
		* Konvertiert von LLVM nach WebAssembly
		* Programmierung in C++

# Vergleich von Programmen kompiliert mit Emscripten und konvertiert mit Wat2Wasm anhand von einem Raytracer

## Einleitung

Grundsaetzlich werden Raytracer in der 3D-Computergrafik verwendet, um 3D-Szenen darzustellen. Der
Algorithmus von Raytracern gelten dabei als sehr zeitintensiv und werden deshalb meist auf High-End- Computern 
ausgefuert. Diese Raytracer verlassen sich fuer optimale Leistung auf dedizierte und native Bibliotheken
<a href="#/praktikum/luecking/index?id=ref_1">[1]</a>. Progamme, welche Raytracing-Algorithmen implementieren,
sind dabei meist platformabhaengig. Wenn Unternehmen von ihrer Webseite aufrufbare Services anbieten wollen,
so ist es notwendig, Renderalgorithmen o. ae. vom Browser aus auszufuehren. Ein Vorteil dieses Ansatzes
ist, dass nicht extra ein Programm gedownloaded und installiert werden muss. Es wird lediglich ein Browser 
benoetigt, welcher sich mit dem Webserver des Unternehmens verbinden kann. Durch die Verwendung von Browsern
wird die Ausfuehrung des Renderalgorithmus platform- und eventuell geraeteunabhaengig. Unternehmen koennen
so 3D-Oberflaechen und Konfigurationstools direkt aus dem Browser heraus aufrufbar anbieten. Dies kann
mehrstufige Serviceprozesse vereinfachen. Unternehmen wie beispielsweise IKEA bieten einen 3D-Moebel-Planer
direkt vom Browser aufrufbar an <a href="#/praktikum/luecking/index?id=ref_2">[2]</a>. Kunden muessen 
keine dedizierte Software herunterladen oder installieren.

Um rechenintensive Algorithmen wie beispielsweise Raytracer im Browser anbieten zu koennen, kann dieser 
beispielsweise mit Hilfe von WebAssembly angeboten werden. WebAssembly wird in Folgendem Kapitel kurz
erlaeutert. Es gibt mehrere Moeglichkeiten nach WebAssembly zu kompilieren oder zu konvertieren. Mit 
Hilfe von Emscripten kann beispielsweise C++ Quellcode implementiert und nach WebAssembly kompiliert werden.
Eine weiter Moeglichkeit ist es, das WebAssembly Text Format zu verwenden um hardwarenah zu sein. Das
WebAssembly Text Format kann mit Hilfe von Wat2Wasm konvertiert werden. In Folgenden Kapiteln werden
die Grundlagen erklaert.

### WebAssembly

WebAssembly (kurz Wasm) stellt eine Ergaenzung zu Javascript im Browser dar. WebAssembly ist ein
binaerers Instruktionsformat fuer eine stack-basierte viertuelle Maschine. Es ist als portables 
Kompilierungs-Target fuer verschiedene Programmiersprachen designed und ermoeglicht die Bereitstellung 
im Web fuer Client- und Serveranwendungen. WebAssembly versucht, mit nativer Geschwindigkeit ausgefuert
werden zu koennen, indem allgemeine Hardwarefunktionen verwendet werden, die auf einer Vielzahl von 
Plattformen verfuegbar ist. So wird eine bessere Performance erreicht, als bei auschliesslich mit 
Javascript implementierten Webseiten. WebAssembly Module koennen dabei sowohl JavaScript Module aufrufen,
als auch von diesen aufgerufen werden. Ebenfalls koennen die selben Browserfunktionalitaeten durch die
gleichen Web API's wie mit JavaScript verwendet werden.

#### WebAssembly Text Format

WebAssembly ist wie bereits beschrieben ein binaeres Instruktionsformat. Um dieses Format menschenlesbar
zu machen kann WebAssembly ebenfalls in einem Text Format ausgegeben werde. Dies dient dem Debuggen, Testen,
Optimieren und Lernen des Programms in einer lesbaren Form. Es koennen ebenfalls Programme direkt in
dem Textformat geschrieben und anschliessend mit Tools wie beispielsweise "Wat2Wasm" nach Wasm konvertiert
werden.

### Emscipten

## Forschungsfragen und Beschreibung Projekt

Im Rahmen der Forschungsarbeit sollen folgende Forschungsfragen beantwortet werden.

* Gibt es zeitliche Unterschiede in der Ausfuehrungszeit beider Raytracer?
* Gibt es zeitliche Unterschiede in der Ausfuehrungszeit bei der Verwendung verschiedener Browser?
* Wie veraendert sich die Ausfuerungszeit bei der Verwendung von Optimierungen bei Emscripten?

Zum Beantworten der Forschungsfragen sollen zwei Raytracer implementiert werden. Der erste Raytracer 
soll in C++ umgesetzt werden und mit Hilfe von Emscripten nach WASM kompiliert werden. Der zweite 
Raytracer soll direkt in WebAssembly Text Format implementiert werden und anschliessen mit 
Wat2Wasm nach WebAssembly konvertiert werden. Beide Raytracer sollen dabei dem gleichen Algorithmus
unterliegen, um ein Vergleichen ermoeglichen zu koennen.

## Umsetzung Raytracer in C++



# Literaturverzeichnis

1. <span id="ref_1">WebRays: Ray Tracing on the Web. (2022, 20. Juni). https://link.springer.com/10.1007/978-1-4842-7185-8_18</span>
2. <span id="ref_2">IKEA - Kuechenplaner. (2022, 22. Juni). https://www.ikea.com/de/de/planners/kitchen-planner/</span>