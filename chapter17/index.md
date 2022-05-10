# Software processes

**Autor:** Malte Reinsch

<!-- notes -->
# distributed software engineering #

- Tannenbaum definieren ein verteiltes System als:
"Eine Sammlung aus unabhängigen Rechnern, die aus Sicht des
Nutzers als einzelnes zusammenhängendes System wahrgenommen
wird."

Die meisten Rechnersysteme sind heute verteilte Systeme.

Aus der Verwendung von verteilten Systemen gehen einige Vorteile
ggü. klassischen Rechnersystemen hervor:
1. Geteilte Ressourcen: In einem verteilen System können
Ressourcen (Hardware, Software) eines Rechners mit anderen
Rechnern geteilt werden
2. Offenheit: Verteilte Systeme werden oftmals als offen
betrachtet, da sie Standardprotokolle verwenden, sodass Hardware
und Software verschiedenster Hersteller verwendet werden können.
3. Nebenläufigkeit: Verschieden Aufgaben können nebenläufig (also parallel / gleichzeitig)
auf verschiedenen Rechnern des Systems ausgeführt werden.
4. Skalierbarkeit: Prinzipiell sind verteilte Systeme dahingehend
skalierbar, dass erhöhte Anforderungen an das System durch das
Hinzufügen neuer Hardware abgefangen werden können.
5. Fehlertoleranz: Durch die Verteilung von Informationen über
mehrere Rechner des Systems kann das System gegenüber Hardware-
ausfällen abgehärtet werden.

Allerdings sind verteilte System ggü. klassischen (zentralisierten
Systemen) deutlich komplexer. Durch die "Verteiltheit" entstehen
neue Herausforderung für die Implementierung des Systems, welche
in zentralisierten Systemen keine oder nur eine kleine Rolle
spielen.
- Insbesondere Netzwerk!
- Antwort(zeit) des Gesamtsystems hängt auch von der Belastung des
Gesamtsystems ab

## distributed systems ##

Verteilte Systeme sind komplexer als Systeme, die nur auf einem
einzelnen Prozessor laufen. Diese Komplexität entsteht insbesondere
dadurch, dass keine Komponente des Systems die komplette Kontrolle
über das gesamte System (also alle Rechner und das Netzwerk) hat.
Das Netzwerk, durch das die Rechnerknoten verbunden werden ist in
der Regel ein eigenes System, welches kontrolliert werden muss.
Durch diese verteilte Kontrolle ist wohnt dem Verhalten eines
verteilten Systems eine natürliche Unberechnebarkeit inne.

Aus dieser Komplexität ergeben sich folgende Aspekte, die
insbesondere bei der Entwicklung eines verteilten Systems
beachtet werden müssen:
1. Transparenz: Inwiefern soll dem Nutzer des Systems bekannt
sein, dass das System verteilt ist? Wann ist das sinnvoll?
2. Offenheit: Soll das System nur Standardprotokolle verwenden, oder
sollen höher spezialisierte Protokolle verwendet werden?
3. Skalierbarkeit: Wie kann die Skalierbarkeit des Systems
gewährleistet werden?
4. Sicherheit: Wie können anwendungsgerechte Sicherheitspolitiken
entwickelt werden, die auf den unabhängigen Rechnern des Systems
eingesetzt werden können?
5. Quality of Service (QoS): Wie kann die Qualität des an die
Nutzer gegebenen Dienstes (TODO: verbessern) spezifiziert und
sichergestellt werden?
6. Fehlermanagement: Wie werden Fehler im System erkannt, isoliert
und repariert?

TODO: evtl. die hier nachfolgenden Erläuterung direkt unter den
Stichpunkten integrieren und die Stichpunkte genauer erläutern

### Models of interaction ###

- RPC (synchron)
- Messages (asynchron)

### Middleware ###

- Abstraktionsschicht über OS (Interaktions-Support)
- Vereinheitlichung von vielfach benötigten Funktionen in gemeinsam
genutzten Bibliotheken

## client-server computing ##

- Programme, die übers Internet angesprochen werden, sind als client-server systeme
angelegt
- client-programm (auf einem Rechner) interagiert mit dem server-program (in der Regel auf einem
anderen Rechner)
- client-server modell ist aber eher ein Konzept auf Applikationsebene und nicht nur auf
verteilte System (über meherere Rechner) beschränkt
- in client-server modell wird eine Applikation als Menge von Diensten ("Services")
modelliert, welche von Servern bereitgestellt werden
- clients müssen die Server kennen, aber nichts über andere clients wissen
- jeder client kann unterschiedliche services von unterschiedlichen servern nutzen
- server können unterschiedliche services bereitstellen
- oftmals laufen mehrere client-prozesse auf dem gleichen Prozessor (Mail-Client, Web-Browser, Drucker-Treiber)
- es können theoretisch auch mehrere Server-Prozesse auf dem gleichen Prozessor
laufen, allerdings werden Server-Systeme oftmals als Mehrkern-System aufgesetzt,
bei dem eine Instanz des gleichen Server-Programms auf jedem Kern läuft
	- Verteilung der Client-Anfragen an Server wird oftmals durch Load Balancing Software
	gleichmäßig auf die Prozesse verteilt -> Vermeidung von Überlastung eines Prozesses,
	was eine Verschlechterung des Dienstes bedeuten würde, der dem Client bereitgestellt
	werden kann
- client-server systeme sind von der klaren Trennung zwischen der Darstellung von Informationen
und den Berechnungen, die diese Informationen erzeugen/bereitstellen abhängig
	- setzt Organisation der Applikationsarchitektur in logischen Schichten voraus, die
	durch klar definiert Schnittstellen von einander getrennt sind
	- Bsp. hierfür in Fig 17.5:
		1. Präsentationsschicht: Darstellung von Information für den User und Interaktion mit dem User
		2. Daten-Behandlung (data-handling, TODO: besseren Namen finden): Behandlung der
		Daten, die zum und vom Client geschickt werden (Implementierung von Input-Validierung etc.)
		3. Anwendungs-Berechnungs Schicht (application processing layer): Implementierung
		der Anwendungslogik und deren Bereitstellung
		4. Datenbankenschicht: Speicherung und Bereitstellung (+ transaction management) der Daten

## architectural patterns for distributed system ##

Entwickler von verteilten Systemen müssen beim Systemdesign eine Balance zwischen
Performance, Verlässlichkeit, Sicherheit und Verwaltbarkeit (Manageability) des Systems finden.

Verschiedene architektonische Patterns haben sich mit der Zeit entwickelt.
Fünf architektonische Stile werden im Kapitel behandelt:
- Master-Slave Architektur: In Echtzeit-Systemen verwendet, welche eine Antwort in einer bestimmten Zeit
garantieren
- Zwei-Stufen Client-Server Architektur: Für einfache Client-Server Systeme verwendet und
in Situationen, in denen Zentralisierung aus Sicherheitsgründen nötig ist
- Mulit-Stufen Client-Server Architektur: Genutzt, wenn der Server viele Anfragen bearbeiten muss
- Verteilte Komponenten Architektur: Verwendet, wenn Ressourcen verschiedener Systeme und
Datenbanken verbunden werden müssen (oder als Implementierungsmodell der Multi-Stufen Client-Server Architektur)
- Peer-to-peer Architektur: Verwendet, wenn Clients lokal gespeicherte Informationen austauschen
und die Rolle des Servers darin besteht, die Clients miteinander zu verbinden

### Master-Slave Architektur ###

- Alternative Benennung: Controller & Responder
- Insbesondere in Echtzeit-Systemen verwendet
- In diesen Systemen sind evtl. unterschiedliche Rechner für Datenakquise, Datenverarbeitung,
Berechnungen und Aktormanagement zuständig (Aktoren sind von Software gesteuerte Komponenten,
die die Umwelt des Systems beeinflussen)
- Klassisches Beispiel: SPS
- "Master" Prozess ist in der Regel verantwortlich für Berechnungen, Verwaltung und Kommunikation
- "Master" kontrolliert die "Slave" Prozesse
- "Slave" Prozesse sind nur für spezifische Aktionen zuständig (Datenakquise, Aktorvorstellung)

Beispiel in Fig 17.7: Ampelsteuerung
- Master ist die Kontrollraumsteuerung
- Slaves sind "sensor processor", der Verkehrssignale aufnimmt und die Lampensteuerung,
die die Ansteuerung der elektrischen Lampen übernimmt
- Sensorkontrolle pollt regelmäßig die Zustände der Sensoren, um Daten über den
Verkehr zu erhalten und für weitere Verarbeitung zu sammeln
- Die Sensorkontrolle selbst wird regelmäßig vom Master gepollt, um Berechnungen vorzunehmen, etc.
- Kontrollsystem sendet Befehle an die Lichtsteuerung

Zusammengefasst:
- Master-Slave wird dann verwendet, wenn bereits im Vorfeld bekannt ist, welche
Berechnungen wie häufig ausgeführt werden müssen und einzelne Berechnungen gut auf
Slaves ausgelagert werden können (ADC-Wandlung zum Beispiel, oder weiteres Signalprocessing)
- Diese Voraussetzungen sind insbesondere in Echtzeit-Systemen weit verbreitet, in
denen es essentiell wichtig ist, Systemantworten in einer bestimmten Zykluszeit zu garantieren


### zweistufige client-server Architektur ###

- einfachtste Form der client-server architektur
- System ist umgesetzt als ein logischer Server und eine theoretisch unbegrenzte
Anzahl Clients, die diesen Server nutzen
- Unterteilt in zwei Architekturarten
	- thin-client model: Präsentationsschicht ist auf dem Client implementiert, alle
	weiteren Schichten sind auf dem Server implementiert; Client Darstellungssoftware ist
	meist in Webbrowser oder Apps
	- fat-client model: ein Teil oder die gesamte Applikationslogik ist auf dem Client
	angelagert, Datenmanagement und Datenbank sind auf dem Server implementiert.
	In diesem Fall ist die Client-Software eng mit der Server-Applikation integriert
- Vorteil Thin-Client: Clients sind einfacher zu verwalten (wichtig
wenn viele Clients aktiv sind) -> insbesondere problematisch,
wenn auf Clients spezielle Software installiert werden muss
- Nachteil Thin-Client: Hohe Rechenbelastung für Server und
das Netzwerk -> Ein System so umzusetzen erfordert also evtl.
Investitionen in Netzwerk und Server Infrastruktur
- Fat Client: Nutzt die Rechenleistung des Clients, Server
ist lediglich für Datenbank-Transaktionen zuständig
	- erfordert die Installation und Wartung von Software auf
	den Client-Systemen
- Bsp für Fat-Client Systeme: Geldautomaten
	- Geldautomaten selbst sind Client-Systeme
	- Server ist die Datenbank in Form von Mainframes, die die
	Kundenkontodaten verwalten -> spezifisch auf das Handling von
	vielen Transaktionen ausgelegt
	- In Beispiel: Client hat keine direkte Verbindung zur Datenbank
	sondern zu TP Monitor Middleware (organisiert Kommunikation mit
	Client-Systemen)
- Nachteil Fat Client: Systemverwaltung wird komplexer
	- Applikationslogik ist evtl. über mehrere Rechner verteilt
	- Macht Updates komplexer, da evtl. alle Client-Systeme
	geupdated werden müssen, um mit der Serverseite arbeiten zu können
- Durch massiven Einsatz von mobilen Endgeräten sollte der
Netzwerkverkehr möglichst gering gehalten werden
- Da allerdings die mobilen Geräte auch performante Rechner sind,
verschwimmt die Grenze zwischen Thin-Client und Fat-Client immer
weiter
	- Apps können eingebaute Funktionen haben, die lokale Berechnungen ausführen
	- Webseiten können Javascript enthalten, welches auf dem Client-Rechner
	ausgeführt wird
	- Updateproblem bleibt bestehen
- Zusammenfassend: das thin-/fat-client modell kann als
Orientierung für den Systementwurf hilfreich sein, das Modell
wird in dieser strikten Trennung allerdings nur selten eingesetzt

### mehrstufige client-server Architektur ###

- Fundamentales Problem der zweistufigen client-server Architektur
ist, dass die logischen Schichten des Systems (Anwendungslogik, etc.)
auf zwei Rechnersysteme gemapped werden müssen
- Das kann zu Problemen mit Skalierbarkeiet oder Performance führen
(im Falle von Thin-Clienet) und Problemen mit Systemverwaltung (falls
Fat-Client)
- Lösungsidee: Logische Schichten können jeweils auf unterschiedlichen
Prozessoren laufen
- Beispiel Internet-Bankensystem:
	- Kundendatenbank auf Mainframe gehostet -> Datenbankservices
	- Web server: Data management services, z.B. Webseiten-Generierung
	und Applikationsdienste
	- Applikationsdienste, zum Beispiel Möglichkeit, Geld zu überweisen
	sind im Webserver und als Skripte, die auf dem Client ausgeführt werden
	implementiert
	- skalierbar, da es relativ einfach ist, neue Server hinzuzufügen
	um Applikationsdienste bereit zu stellen (scaling out), falls Anzahl
	Kunden ansteigt
	- Konkretes Beispiel ist also ein dreistufiges Modell
	- Effiziente Middleware, die bspw. SQL-Abfragen unterstützt,
	wird zur Informationsabfrage von der Datenbank verwendet
- Tabelle übersetzen: TODO
- dreistufiges Modell kann auch auf mehrstufiges ausgeweitet werden,
indem mehr Server zum System hinzugefügt werden
	- Aufteilung von Dienstbereitstellung auf verschiedene Rechner
	- Auch dann anwendbar, wenn mehrere Datenbanken verwendet werden
	- Bspw. Einsatz von Integrationsserver, der die verteilten Daten
	sammelt und der übrigen Systemarchitektur über eine
	gemeinsame Schnittstelel zur Verfügung stellt
- Zusammenfassend:
	- mehrstufige Modelle, die Berechnungen für die Applikation über
	mehrere Rechner verteilen, sind besser skalierbar als zweistufige
	client-server modelle
	- Jede Stufe des Systems kann einzeln verwaltet werden (kein Monolit),
	sodass es einfacher ist, Hardware für diese einzelne Schicht hinzuzufügen,
	falls durch Systemänderungen der Bedarf des einzelnen Dienstes erhöht wird
	- Applikationslogik und Datenbereitstellung / Verwaltung kann aufgeteilt
	werden, was zu schnellerer Systemantwort führen kann
	- Wahl der Systemarchitektur ist abhängig vom Szenario
		- Siehe Tabelle

### multi-Komponenten Systeme ###


- Das mehrstufige client-Server Modell funktioniert gut für viele
Anwedungsfälle
- Es kann allerdings die Flexibilität einschränken, da es die Entwickler des Systems
zwingt, Dienste einer Schicht zuzuordnen
- Die klare Trennung zwischen Dienstarten ist meist auch praktisch schwierig
- Skalierbarkeit und Replizierbarkeit von Servern muss ebenfalls gewährleistet werden
- Ein generalisierter Ansatz ist, die Services als logische Einheiten zu betrachten,
welche bedarfsweise miteinander in Verbindung treten, ohne die Dienste in logische Schichten
aufzuteilen
- Jeder Dienst kann dann als einzelne Komponente in diesem Komponenten-Netzwerk umgesetzt werden
- Jede dieser Komponenten bietet eine Schnittstelle für die Dienste an, die sie bereitstellt
- Andere Komponenten nutzen diese Schnittstellen über Kommunikations-Middleware / remote procedure / method calls
- Solche verteilten Komponentensysteme sind von Middleware abhängig
	- Verwaltung von Kommunikation zwischen Komponenten
	- Umgang mit unterschiedlichen Datentypen in Parametern etc.
- der CORBA standard verfolgt das Ziel, Middleware zu definieren, hat sich allerdings
nie wirklich verbreitet durchgesetzt
- Vorteile von verteilten Komponentensystemen für die
Realisierung von verteilten Systemen
	1. Der Systementwickler kann Entscheidungen darüber, wo und wie
	Dienste bereitsgestellt werden. Komponenten, die Dienste
	bereitstellen, können auf jeden Knoten des Netzwerks laufen.
	Es muss nicht im Vorfeld entschieden werden, ob eine Komponente
	Teil der Datenverwaltung, der Applikationsschicht oder der Nutzer-
	schnittstelle ist
	2. Die Architektur ist sehr offen gegenüber nachträglichem
	Hinzufügen von neuen Ressourcen und Diensten.
	3. Das System ist flexibel und skalierbar. Falls die Systembelastung
	steigt, können neue oder replizierte Objekte hinzugefügt werden,
	ohne andere Teile des Systems zu stören.
	4. Das System kann dynamisch rekonfiguriert werden, indem Komponenten
	über das Netzwerk auf andere Prozessoren migriert werden.
	TODO: warum ist das wichtig?
- Die Architektur der verteilten Komponenten kann auch als
logisches Modell für ein System verwendet werden, indem
dessen Funktionalität nur als Dienste und Kombination von Diensten
konzeptioniert wird
- Data-Mining System sind ein Beispiel für solche Systeme
	- Data-Mining Systeme analysieren Beziehungen zwischen Daten, die
	über mehrere Datenbanken verteilt sind
	- Die FUnktion dieser Systeme kann unterteilt werden in Datenakquise,
	Datenverarbeitung und Visualisierung
	- TODO: Beispiel weiter ausführen

Architekturen aus verteilten Komponenten haben zwei Nachteile:
- Das Systemdesign ist komplexer als Client-Server Systeme.
Mehrstufige Client-Server Systeme und ihre Transaktionen ähneln
menschlicher Interaktion, wobei bestimmte Dienste von spezialisierten
Menschen angefragt werden
- Es gibt keinen einheitlichen Standard für verteilte Komponenten oder
Middleware für diesen Kontext. Verschiedene Herstellter bieten
inkompatible Middleware an, welche sehr komplex ist. Die Abhängigkeit von
Middleware erhöht die Systemkomplexität

- Aus diesen Gründen werden verteilte Komponenten Systeme durch dienst-
orientierte Systeme ersetzt
- Allerdings haben verteilte Komponentensysteme Leistungsvorteile
gegenüber dienstorientierten Systemen
- Daher werden verteilte Komponentensysteme noch für Anwendungen
eingesetzt, in denen ein hoher Datendurchsatz nötig ist oder ein hohes
Volumen an Transaktionen verarbeitet werden muss

### Peer-to-peer Architektur ###

- client-server modelle unterscheiden klar zwischen den Anbietern
von Diensten (Server) und den Nutzern von Diensten (Clients)
	- das führt häufig zu ungleich verteilter Systemauslastung,
	in der Server deutlich mehr Rechenaufwand betreiben müssen,
	als Clients -> führt zu Ausgaben für Serverarchitektur,
	obwohl sehr viel Leistungspotential auf den Client-Geräten
	verfügbar wäre
- Peer-to-peer (P2P) Systeme sind dezentral Systeme, die
keine solche klare Trennung zwischen Clients und Servern
treffen
- Berechnungen können auf jedem Knoten des Systems ausgeführt werden
- Kommunikationsstandards und -protokolle sind in der
Applikation eingebettet und jeder Knoten muss eine Kopie
dieser Applikation ausführen (ist das dann quasi wieder monolithisch?)
- praktisch werden p2p Systeme eher im privaten Umfeld eingesetzt
- da dezentral: schwerer zu überwachen -> höhere Privatsphäre
der Kommunikation möglich
- Beispiele (starker Privatsphärefokus):
	- BitTorrent (Filesharing)
	- ICQ / Jabber (Messaging)
	- Bitcoin / Crypto-Währung
	- Freenet (dezentrale Datenbank)
- andere Beispiele:
	- Voice over IP (bsp. Viber)
	- SETI@home (Datenverarbeitung von Teleskopen auf PC)
	- Folding@home
- kein zentraler Server als Flaschenhals
- p2p Systeme auch in Geschäftsanwendungen
	- Nutzung von ungenutzten Rechenleistungen von lokalen
	Geräten (bspw. komplexe Berechhnungen zu Zeiten geringer
	Belastung)
- Theoretisch wäre es möglich, dass jeder Teilnehmer mit jedem
anderen Teilnehmer in Verbindung tritt (technische Begrenzung
durch Netzwerk-Adressen)
	- Daher Unterteilung in "localities"
	- einige Teilnehmer bilden "Brücke" in andere "localities"
	- TODO: siehe Bild
- in dezentraler Architektur bilden die Netzwerkknoten sowohl
Applikationslogik als auch Kommunikationsfunktionen ab
	- TODO: bsp. dezentrale Dokumenten-Verwaltung
- Vorteil: hohe Redundanz -> hohe Fehlertoleranz, Toleranz
ggü. getrennten Teilnehmern
- Nachteil: Overhead durch redundante Berechnung aufgrund
fehlender Synchronisation (applikationsabhängig)

- Abwandlung des klassischen p2p Modells durch semizentralisierte
System, indem einige Knoten
im Netzwerk als Server agieren & Verbindungen zwischen Teilnehmern
herstellen -> weniger Netzwerk-Verkehr
- die Rolle solcher Server besteht darin, Kontakt zwischen
Teilnehmern herzustellen oder das Ergebnis einer
Berechnung zu "koordinieren"
- sobald direkte Verbindung hergestellt wurde, ist kein Kontakt
mehr zu Server nötig
- in rechenintensiven Anwendungen ist die Aufgabe solcher
Server auch, die Teile einer verteilten Berechnung zusammenzustellen
und zu überprüfen,
sodass ein gesamtes Ergebnis zur Verfügung steht
- zwei Hauptanwendungen:
	- komplexe Berechnung, die sinnvoll in ausreichend
	große Teile aufgespalten werden kann
	- Anwendung besteht insbesonder in Kommunikation zwischen
	Teilehmern und kein Bedarf, Informationen zentral zu
	speichern
		- file-sharing
		- telefon-systeme
- Zusammenfassend:
	- p2p Systeme ermöglichen die effektive Nutzung der
	Systemressourcen
	- primärer Grund, kein p2p System zu nutzen ist Sicherheit
		- keine zentrale Überwachung möglich
		- Angreifer können bösartige Knoten etablieren, die
		evtl. großzügigen Zugriff auf die Ressourcen anderer
		Teilnehmer erhalten können -> erhöhter Absicherungsaufwand

## sofware as a service ##

- die zuvor erläuterten Client-Server Modelle setzen die Installation von einem
applikationsspezifischen Programm auf dem Client-System voraus, um das System nutzen zu können.
	- Reduzierung von Serverbelastung durch Berechnungen auf dem Client-System
- Durch Technologien wie AJAX oder HTML5 kann die Server-Belastung ebenfalls weiter
reduziert werden
- Durch die Möglichkeit, Anwendungslogik in Skripten zu implementieren, die Teil einer
Webseite sind, kann der Browser effektiv als Client-Anwendung konfiguriert werden kann.
- Die Anwendungssoftware ist in diesem Fall ein Dienst, auf den von jedem Gerät aus zugegriffen werden kann,
sofern das Gerät einen Standardbrowser ausführen kann
- In diesem Fall wird von Software as a Service (SaaS) gesprochen
- charakteristische Merkmale für SaaS:
	- Die Software wird auf einem Server (oder in der Cloud) bereitgestellt und wird über einen Webbrowser
	aufgerufen, es ist keine spezifische Software auf dem Client-Rechner nötig
	- Der Anbieter der Software besitzt und verwaltet die Software, nicht der Nutzer der SOftware
	- Nutzer zahlen je nach Nutzung oder in einem Abo-Modell; teilweise kann die Software
	auch frei nutzbar sein, wird allerdings durch Werbung finanziert
- Durch die Etablierung von Cloud Computing hat die Verbreitung des SaaS Modells beschleunigt
- Da in der Cloud bereitgestellte Dienst einfach skalierbar sind, entfallen viele Kosten für
die Anbieter dieser Dienste
- Für Software-Nutzer hat das SaaS-Modell den Vorteil, dass die Verwaltungskosten der
Software durch den Anbieter getragen werden.
	- hierzu zählen Bugfixing, Installation von Upgrades, Umgang mit Veränderungen im
	Betriebssystem, Bedarfsgerechte Dimensionierung der Rechnersysteme
	- Außerdem entfallen Verwaltungskosten für Softwarelizenzen, da nicht für jeden
	Rechner eine neue Lizenz erworben und verwaltet werden muss
	- Darüber hinaus kann die Software von jedem webfähigen Endgerät aus genutzt werden

- Hauptproblem ist der Datentransfer mit dem Dienst
	- Datentransferrate ist an die Netzwerkgeschwindigkeit gekoppelt
	- Transfer von großen Bilddateien oder Videos braucht Zeit
- Weiteres Problem: keine Kontrolle über Weiterentwicklung der Software (Anbieter kann
Änderungen vornehmen, wann er will)
- Rechtliche Probleme (Datenschutz, Vorhalten von Daten auf ausländischen Servern)

- SaaS und Dienstorientierte Architektur (SOA) sind verwand, aber unterschiedlich:
	- SaaS ist eine Methode, Dienste von einem Server durch einen Webbrowser verfügbar zu machen.
	Server hält die Daten des Nutzers für die Zeit der Interaktion vor. Interaktionen sind eher lang,
	bspw. das Editieren eines Dokuments
	- Dienstorientierte Architektur sieht es vor, ein Softwaresystem als Menge entkoppelter,
	Zustandsloser Dienste zu konzeptionieren
		- Dienste können von unterschiedlichen Anbietern bereitgestellt werden
		- Transaktionen sind eher kurz
- SaaS ist ein Modell, um dem Nutzer Anwendungsfunktionen zur Verfügung zu stellen,
	SOA ist eine Implmentierungstechnologie für Anwendungssysteme, welche nicht von Nutzern
	als Webdienste genutzt werden müssen
- SaaS kann allerdings durch SOA implementiert werden, wodurch sich die Möglichkeit
ergibt, die APIs der Dienst zu nutzen und in komplexeren Systemen einzubetten
	- Diese System werden auch Mashups genannt und bilden einen weiteren Ansatz zur
	Wiederverwendung und schnellen Entwicklung von Software

- Aus Software-Engineering Sicht ist Entwicklung von Diensten vergleichbar mit der Entwicklung
anderer Software, allerdings ist die Dienstentwicklung nicht durch Nutzerbedürfnissen getrieben, sondern
durch Abschätzungen des Entwicklers, welche Funktionen der Nutzer vermutlich brauchen wird
- Daher muss die Software in der Lage sein, schnell weiterentwickelt und abgeändert zu werden, um
Feedback zur Funktionalität einzubinden
	 - Hierzu bieten sich Methoden der Agilen Softwareentwicklung und die inkrementelle Bereitstellung
	 der Software an
- SaaS Anwendungen bieten jedem Nutzer eine generische Nutzererfahrung
	- Geschäftskunden wünschen evtl. eine speziell angepasste Version mit individuell verfügbaren
	zusätzlichen FUnktionen. Hierzu sind drei Faktoren zu beachten:
		- Konfigurierbarkeit: Wie wird die Software für spezifische Bedürfnisse angepasst?
		- Mehrmandantenfähigkeit: Wie wird sichergestellt, dass jeder Nutzer
		der Software das Gefühl hat, eine individuell angepasste Version zu nutzen und
		die verfügbaren Ressourcen effizient genutzt werden?
		- Skalierbarkeit: Wie wird die Skalirbarkeit des Systems sichergestellt?
- eine Möglichkeit, diese Form von Konfigurierbarkeit zu realisieren, sind
Produkt-Linien Architekturen (siehe Kapitel 16)
	- Start mit generischen System, schrittweise Anpassung an spezifische Bedürfnisse des
	Nutzers
	- Nicht nutzbar für SaaS, da dies bedeuten würde, eine unterschiedliche Kopie
	für jede Spezialisierung des Systems bereitzustellen
	- Daher muss die Konfigurierbarkeit direkt innerhalb des Systems realisiert werden
	- Konfiguration des Systems über eine Konfigurationsschnittstelle, über die
	sich der Nutzer selbstständig und dynamisch das System konfigurieren kann, während er es nutzt
	- Einstellungen ändern das Verhalten des Systems
- Konfigurationen können folgende Dinge zulassen:
	- Branding: Nutzer einer Organisation bekommen eine Nutzerschnittstelle präsentiert, die
	zu der Organisation passt
	- Geschäftsregeln und Arbeitsabläufe: Jede Organisation bestimmt die Arbeitsabläufe und Regeln,
	die die Nutzung des Dienstes und dessen Daten beeinflusst
	- Datenbank-Erweiterungen: Jede Organisation gibt an, wie das generische Datenmodell
	des Dienstes angepasst wird, um den spezifischen Anforderungen zu entsprechen
	- Zugriffskontrolle: Anlegen von Mitarbeiterkonten und Definition der Nutzungsrechte für
	Ressourcen und Funktionen
- Nutzer interagieren mit dem Dienst über ein Nutzerprofil, in dem die Konfigurationseinstellungen
hinterlegt sind
- Mehrmandantenfähigkeit beschreibt eine Situation, in der mehrere Nutzer das gleiche System
ansprechen. Allerdings muss jeder Nutzer in der Annahme sein, dass er der einzige Nutzer
des Systems ist
	- Dies setzt absolute Trennung von Systemfunktionalität und Daten voraus
	- Jede Operation muss zustandslos sein, sodass sie geteilt werden kann
	- Daten müssen entweder vom Client geliefert werden oder in einer Datenbank liegen, die
	von allen Instanzen des Systems erreichbar ist
- A particular problem... TODO
- As an alternative... TODO
- Scalability... TODO
- Aufzählung... TODO
- The notion... TODO
- SaaS represents... TODO
- Key points... TODO
