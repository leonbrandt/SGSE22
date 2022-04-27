# Software processes

**Autor:** Malte Reinsch

Nach dem Lesen des Kapitels sollten Sie einiges wissen und dann noch viel mehr und sehr viel mehr und weniger.

## Unterkapitel

* **Softwaresystem**:
  Die *innere* Sicht des Informatikers nimmt Software als Softwaresystem wahr.
* **Softwareprodukt**: Die *äußere* Sicht eines Auftraggeber nimmt ein Softwaresystem als Softwareprodukt wahr.

### Tabelle

| A          |     B       |           C               |
|:----------:|:-----------:|:-------------------------:|
| Eins | Zwei | Drei |
| Vier | Fünf | Sechs |

## Links

[Markdown] ist eine Sprache, die nach HTML konvertiert werden kann.

[Markdown]: http://daringfireball.net/projects/markdown/

## Aufzählung

Es unterteilt sich in:

* A
  * A1
* B
  * B1
  * B2
* C


# Überschrift

"...the **go to** statement should be abolished..." [1].

Dieser Link führt intern zu einem anderen [Thema](qualitaet/README)

Dieser Link führt extern nach [Youtube](https://www.youtube.com/)

> Dieser Text ist völlig sinnlos, aber steht trotzdem hier. Dieser Text geht über mehrere Zeilen.

## Unterüberschrift

* Eins
  * eins.eins
  * eins.zwei
* Zwei
  * Zwei.zwei
* Drei

### Code

```javascript
public class A {
  Integer a;
  public A() {
    this.a = 1
  }
}
```

Syntax Highlighting für Javascript. Weitere Sprachen müssen konfiguriert werden.

### Bilder

![](media/image.jpg)

### Audio

[](media/sample.mp3 ':include')

### Video

[](media/sample.mp4 ':include')

## Referenzen

[1]: Dijkstra, E. W. (1968). Go to statement considered harmful.
Communications of the ACM, 11(3), 147-148.

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

### mehrstufige client-server Architektur ###

### Peer-to-peer Architektur ###




## sofware as a service ##




