

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

Emscripten ist eine komplette Compilertoolchain hin zu WebAssebly. Emscripten verwendet dabei LLVM und 
setzt den Fokus auf Geschwindigkeit, Groesse und der Webplatform. In C++ programmierter Code kann
beispielsweise mit Hilfe von Emscripten uebersetzt werden und passende HTML-, JavaScript- und WASM-Dateien
generiert werden. Emscripten liefert dabei beispielsweise die Moeglichkeit innerhalb vom C++-Code
JavaScript-Funktionen und -Code zu definieren und aufzurufen.

Emscripten bietet zur Kompilierung verschiedne Optimierungsstufen an. Im Folgenden werden die 
Optimierungen kurz verdeutlicht.

* O0 - Keine Optimierung (default)
* O1 - Simple Optimierung. Waehrend des Kompilierens wird die 'O1' von LLVM verwendet. Waehrend des Linkens werden verschiedene JS-Assertions nicht eingeschlossen, welche bei O0 existieren wuerden.
* O2 - Aehnlich wie 'O1', ermoeglicht aber weitere Optimierungen. Waehrend des Linkens werden ebenfalls verschiedene JavaScript Optimierungen ermoeglicht.
* O3 - Aehnlich wie 'O3', aber mit zusaetzlichen Optimierungen, welche eventuell laenger zum Ausfuehren benoetigen.
* Os - Aehnlich wie '03', aber konzentriert sich mehr auf die Codegroesse. Dies kann die Laufzeit beeintraechtigen, sowohl von WASM als auch von JavaScript.
* Oz - Aehnlich wie 'Os', aber reduziert die Codegroesse noch weiter. Kann jedoch laengere Ausfuehrzeiten haben, sowohl von WASM als auch von JavaScript.

## Forschungsfragen und Beschreibung Projekt

Im Rahmen der Forschungsarbeit sollen folgende Forschungsfragen beantwortet werden.

* Gibt es zeitliche Unterschiede in der Ausfuehrungszeit beider Raytracer?
* Gibt es zeitliche Unterschiede in der Ausfuehrungszeit bei der Verwendung verschiedener Browser?
* Wie veraendert sich die Ausfuerungszeit bei der Verwendung von Optimierungen bei Emscripten?

Zum Beantworten der Forschungsfragen sollen zwei Raytracer implementiert werden. Der erste Raytracer 
soll in C++ umgesetzt werden und mit Hilfe von Emscripten nach WASM kompiliert werden. Der zweite 
Raytracer soll direkt in WebAssembly Text Format implementiert und anschliessend mit 
Wat2Wasm nach WebAssembly konvertiert werden. Beide Raytracer sollen dabei dem gleichen Algorithmus
unterliegen, um ein Vergleichen ermoeglichen zu koennen.

## Umsetzung Raytracer in C++

Der erste Raytracer wird in C++ umgesetzt. Es wird sich an dem Buch "The Ray Tracer Challenge" orientiert
und ein Raytracer von Grund auf neu geschrieben. Das Buch beschreibt die Funktionsweise eines Raytracers
und ermoeglicht dem Leser auf eigener Art und Weise einen Raytracer selber zu entwerfen. Das Buch beschreibt
Testfaelle und ermoeglicht das Test-Driven Development des Renderalgorithmus.

Der aktuelle Stand des Raytracers ist auf Github hochgeladen und durch den folgenden Link erreichbar:

[Timl Webrays](https://github.com/Timl163/Webrays)

Der Raytracer ist zum Zeitpunkt der Abgabe nicht fertig, das Projekt wird jedoch weitergefuehrt und 
ein Raytracer komplett selbst implementiert. Ein Commit bekommt ein Label, welches den Zeitpunkt der 
Abgabe beschreibt.

Leider war das Ziel einen kompletten Raytracer von Grund auf zu implementieren zu ambitioniert und
hat in Kombination mit Emscripten weit aus laenger gedauert als vorerst geplant. Ein geeignetes
Testsystem, benoetigt fuer das Test-Driven Development, musste in das Projekt eingebaut werden. 
Das richtige Konfigurieren und der Aufbau einer passenden Buildpipeline benoetigten unter anderem viel Zeit,
bevor der eigentliche Algorithmus implementiert werden konnte. Verwendet wird das Testsystem "GoogleTest"
und wird in die Buildpipeline von Visual Studio Code eingebaut. Die Installation und der Einbau in
das vorhandene Projekt hat die meiste Zeit in Anspruch genommen. Zusaetzlich musste gelernt werden, wie
Emscripten funktioniert und verwendet werden kann. Das Konfigurieren des Canvas, welcher von Emscripten
bereitgestellt wird, und die Kommunikation zwischen C++ und JavaScript Komponenten stellte eine
weit aus groessere Huerde dar, als vorher geplant. Dies liegt an der fehlenden Expertise und der teils
unvollstaendigen Dokumentation von Emscripten.

Aus den oben genannten Problemen und der Tatsache, dass die Idee des Projekts zu ambitioniert war, wurde
sich dazu entschlossen, keinen zweiten Raytracer in WebAssembly Text Format vorzunehmen. Selbst der 
Raytracer in C++ konnte leider nicht vollstaendig implementiert werden. Dies benoetigt eine Anpassung 
des Projektthemas und der damit verbundenen Forschungsfragen, um dennoch Ergebnisse vorlegen zu koennen.
Die jetzt vorhandene Codebasis (Teil des Raytracers) soll verwendet werden, um Performancetests
durchzufuehren. Leider eleminiert die Veraenderung des Themas die Notwendigkeit, einen Raytracer zu
implementieren. Da ein Teil jedoch bereits vorhanden ist und das Projekt mit Emscipten gebaut werden kann,
wird dieser Programmcode als Grundlage der Tests verwendet. Im Folgenden werden die neuen
Forschungsfragen aufgestellt.

## Neue Forschungsfragen

Die neuen Forschungsfragen werden im Folgenden dargestellt.

* Gibt es zeitliche Unterschiede in der Ausfuehrungszeit bei der Verwendung verschiedener Browser?
* Wie veraendert sich die Ausfuehrungszeit bei der Verwendung von Optimierungen bei Emscripten?
* Wie veraendert sich die Ausfuehrungszeit wenn das Projekt ausschliesslich nach JavaScript kompiliert wird?

## Herangehensweise

Zur Messung der Zeit wird in C++ ein Objekt einer selbstgeschriebenen Klasse namens "Canvas" erstellt. Der 
Canvas speichert intern eine Menge an "Colors"; fuer jeden Pixel wird ein Objekt gespeichert. Die 
Farbobjekte beinhalten drei floating Werte fuer die Farben Rot, Gruen und Blau. Diese Werte koennen einen 
Wert zwischen 0.0 und 1.0 annehmen. Dies vereinfacht das Rechnen mit Farben. Der Canvas von Emscipten 
bzw. von Javascript verwendet jedoch Werte zwischen 0 und 255 pro Farbe. Eine Konvertierungsfunktion,
welche die Farbwerte konvertiert wird benoetigt. Diese Funktion iteriert ueber alle Farben im Canvas
und speichert den berechneten Wert wiederrum in einem neuen Array.

Fuer die Zeitmessung wird ein Canvas mit einer Groesse von 100*100 Pixeln erstellt. Anschliessend wird
die Konvertierungsfunktion aufgerufen. Die benoetigte Zeit wird mit Hilfe der C++ Bibliothek "Chrono"
gemessen und in µs auf der Konsole ausgegeben.

Um die Webseite zu hosten, wird lokal ein Pythen-Webserver gestartet. Anschliessend kann die generierte
HTML-Datei auf verschiedenen Browsern geoeffnet und die benoetigte Zeit gemessen und gespeichert werden.
Zusaetzlich wird das Programm mit verschiednen Optimierungen kompiliert und ebenfalls die benoetigt Zeit 
gemessen. Zum Schluss wird das Projekt ohne Ausgabe von WASM kompiliert und die Zeit gemessen.

Zur Evaluierung werden 5 verschieden Browser verwendet. Im Folgenden sind die Browser aufgelistet:

* Chrome
* Firefox
* Opera
* Edge
* Vivaldi

Es wird sich mit dem Websever verbunden und die kompilierte HTML-Datei geoeffnet. Die benoetigte Zeit wird
aufgeschrieben und die Seite mehrfach neu geladen. Nachdem alle Browser auf der gleichen Version getestet
wurden, wird eine neue Version (mit Optimierung) gebaut und alle Browser erneut getestet.

Bei der Zeitmessung sind im Hintergrund die gleichen Programme geoeffnet (Visual Studio Code, Notepad++,
etc.), um moegliche Zeitabweichungen konstant zu halten. Zusaetzlich ist immer nur der zu messende Browser
mit einem Tab geoeffnet, um Vergleichbarkeit in den Messergebnissen zu gewaehrleisten.

## Ergebnisse

Im Folgenden werden die gemessenen Ergebnisse dargestellt und erlaeutert.

![Keine Optimierung (O0)](assets/O0.PNG)

Bei der Uebersetzung ohne Optimierung laesst sich eindeutig erkennen, dass die gemessene Zeit von
Firefox am geringsten ist. Dabei muss erwaehnt werden, dass Firefox als einziger Browser nur Zeiten
mit Millisekunden-Genauigkeit ausgegeben hat. Alle anderen Browser waren bei gleicher Codebasis in 
der Lage, mindestens in zehntel Millisekunden- bzw. in 100 µs Schritten anzugeben, wie lange die Ausfuerung
gedauert hat. Chrome ist mit einer relativ konstanten Ausfuehrungsdauer der zweitschnellste Browswer bei
der Ausfuehrung. Die restlichen drei Browser verhielten sich vergleichsweise schnell, Vivaldi hingegen
benoetigte bei einer Ausfuehrung ca. 8,5 ms, was als Ausrutscher gewertet wird.

![Optimierung O1](assets/O1.PNG)

Bei der Version, die mit O1 optimiert wurde, lassen sich Unterschiede in den Ausfuehrungszeiten 
feststellen. Die Ausfuehrungszeit mit Chrome verbessert sich, wobei die Ausfuehrungszeit mit Firefox
sich marginal verbessert. Die Ausfuehrzeit mit Opera variiert staerker, bleibt im Durchschnitt gleich.
Bei Edge verbessert sich der Durchschnitt, die Ausfuehrungszeit weist jedoch eine groessere Varianz auf.
Die Ausfuehrzeit mit Vivaldi verschlechtert sich bei der ersten Optimierung. Es werden Zeiten von bis zu
9500 µs erreicht.

![Optimierung O2](assets/O2.PNG)

Bei Optimierung O2 vergroessert sich die Varianz bei der Ausfuehrung mit Chrome. Bei den weiteren
Browsern ist keine starke Verbesserung oder Verschlechterung festzustellen. Firefox fuehrt das gegebene
Programm weiterhin als schnellster Browser aus.

![Optimierung O3](assets/O3.PNG)

Zwischen Optimierung O3 und O2 ist kein deutlicher Unterschied in der Ausfuehrdauer festzustellen.
Grundsaetzlich laesst sich sagen, dass alle Browser im Durchschnitt minimal langsamer geworden sind.
Firefox ist weiterhin der schnellste Browser, gefolgt von Chrome. Vivaldi stellt aus der Auswahl an
Browsern den Langsamsten in diesem Szenario dar.

![Optimierung Os](assets/Os.PNG)

Bei der Optimierung Os laesst sich feststellen, dass alle Browser langsamere Ausfuehrzeiten besitzen.
Die Rangfolge bleibt jedoch gleich.

![Optimierung Oz](assets/Oz.PNG)

Die letzte Optimierungsstufe Oz erhoeht bei allen Browsern die Ausfuehrzeit des Progamms. Vivaldi faellt
am meisten auf mit einem Ausrutscher bei ueber 12 ms.

Im Folgenden werden die Ausfuehrzeiten von jedem Browser abhaengig der Optimierungsstufe dargestellt.

![Vergleich Chrome bezogen auf verschiedene Optimierungen](assets/chrome.PNG)

Bei Chrome ist zu erkennen, dass O1 eine Verbesserung der Laufzeit ermoeglicht. Danach steigt die 
Ausfuehrungszeit stark an. Die Varianz steigt ebenfalls mit steigender Stufe; die Ausfuehrzeiten schwanken
stark.

![Vergleich Firefox bezogen auf verschiedene Optimierungen](assets/firefox.PNG)

Firefox bietet bei verschiedenen Optimierungsstufen aehnliche geringe Ausfuehrzeiten. Die fehlende
Schwankung kann durch die Beschraenkung der Messung erklaert werden. Wie bereits oben erwaehnt, 
laesst Firefox nur eine Zeitmessung in Millisekunden-Intervallen zu.

![Vergleich Opera bezogen auf verschiedene Optimierungen](assets/opera.PNG)

Bei den Ausfuehrungszeiten von Opera laesst sich feststellen, dass die ersten beiden Optimierungsstufen
die Ausfuehrzeit verringert. O3 fuerht im Durschschnitt zu einer aehnlichen Ausfuehrzeit. Die beiden
Optimierungen Os und Oz vergroessern die Zeit erneut.

![Vergleich Edge bezogen auf verschiedene Optimierungen](assets/edge.PNG)

Die Ausfuehrungszeit bei Edge bleibt nach Optimierungen relativ konstant. Man erkennt eine leichte 
Verbesserung der Zeit bei O1 und O2. Ab O3 verlaengert sich die Ausfuehrungszeit marginal.

![Vergleich Vivaldi bezogen auf verschiedene Optimierungen](assets/vivaldi.PNG)

Die Optimierungen von Emscripten verschlechtern ausschliesslich die Ausfuehrungszeiten bei dem Browser
Vivaldi. Die Varianz steigt und mehrere Ausreisser sind bei der Ausfuehrungszeit vorhanden. Grundsaetzlich
ist Vivaldi in diesem Test der langsamste Browser aus der Auswahl.

Zum Schluss werden die Ausfuehrungszeiten gemessen, wenn von Emscripten kein WASM generiert werden soll.
Emscripten erstellt dann ausschliesslich JavaScript und HTML.

![Ohne WASM](assets/NoWASM.PNG)

Es ist deutlich zu sehen, dass das gleiche Programm, welches nur in Javascript ausgefuert wird, deutlich
langsamer auf allen Browsern laeuft. Der Browser Chrome ist bei der Ausfuehrunszeit von durchschnittlich
ueber 32 ms ahnlich langsam wie der Browser Vivaldi. Firefox ist dabei mit Abstand der schnellste der 
ausgewahlten Browser und benoetigt fuer das Programm ca. 13 ms im Durchschnitt. Firefox' Ausfuehrungszeiten
sind dabei sehr konstant im Gegensatz zu den anderen Browsern.

Die Optimierungsstufen verringert ebenfalls die Dateigroesse. Das gebaute Projekt ohne Optimierung ist 
489 KB gross. Die Groesse nimmt mit jeder Optimierungsstufe ab. Bei Oz sind die Dateien insgesamt 289 KB
gross. Wenn das Projekt komplett ohne WASM kompiliert wird, ist die Dateigroesse um ein Vielfaches auf
insgesamt 1,84 MB gestiegen.

Grundsaetzlich laesst sich sagen, dass Firefox in jedem Test der schnellste Browser ist. Jedoch laesst 
Firefox trotz gleichen Programmcode keine genauere Zeitmessung zu als in Millisekunden-Intervallen. Dies
kann zum Beispiel daran liegen, dass intern bei der Auswertung des WASM eine andere Funktion zum Auslesen
der aktuellen Zeit verwendet wird. Bei den meisten Browsern fuehren die Optimierungen zu einer Verkuerzung
der Ausfuerzeit. Wie in der Dokumentation von Emscripten beschrieben, werden ab O3 die Dateigroessen
optimiert. Dies kann dabei zu einer erhoehten Ausfuehrdauer fuehren. Der Browser Vivaldi hingegen
wies bei dem optimierten Code keinerlei Zeitersparnisse auf; Im Gegenteil, die Ausfuehrdauer verlaengerte
sich teils. Der kompilierte Code mit WASM ist schneller als der Code, welcher nach der Kompilierung nur 
aus JavaScript und HTML besteht.

## Zusammenfassung



## Selbstreflektion

# Literaturverzeichnis

1. <span id="ref_1">WebRays: Ray Tracing on the Web. (2022, 20. Juni). https://link.springer.com/10.1007/978-1-4842-7185-8_18</span>
2. <span id="ref_2">IKEA - Kuechenplaner. (2022, 22. Juni). https://www.ikea.com/de/de/planners/kitchen-planner/</span>