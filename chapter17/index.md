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
-

## architectural patterns for distributed system ##

## sofware as a service ##




