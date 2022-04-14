# Software processes

**Autor:** Artem Shipilov

## Ziele:
* **die Konzepte von Softwareprozessen** und Softwareprozessmodellen verstehen;
* wurden in **drei allgemeine Software-Prozessmodelle** eingeführt und wann sie verwendet werden könnten;
* **die grundlegenden Prozessaktivitäten** des Software Requirements Engineering, der Softwareentwicklung, des Testens und der Evolution kennen;
* verstehen, **warum Prozesse organisiert werden sollten**, um mit Änderungen in den Softwareanforderungen und -designs fertig zu werden;
* den Begriff der **Softwareprozessverbesserung** und die Faktoren verstehen, die die Softwareprozessqualität beeinflussen.

Ein Softwareprozess ist eine Reihe zusammenhängender Aktivitäten, die zur Produktion eines Softwaresystems führen.
Es gibt keinen allgemeingültigen Softwareprozess. Der in verschiedenen Unternehmen verwendete Prozess hängt von der Art der zu entwickelnden Software, den Anforderungen des Kunden und den Fähigkeiten der Personen ab, die die Software schreiben.
Es gibt jedoch viele verschiedene Softwareprozesse, die alle die vier grundlegenden Softwareentwicklungsaktivitäten umfassen müssen:
1. Softwarespezifikation. Die Funktionalität der Software und Einschränkungen für ihren Betrieb müssen definiert werden.
2. Softwareentwicklung. Die Software zur Erfüllung der Spezifikation muss erstellt werden.
3. Softwarevalidierung. Die Software muss validiert werden, um sicherzustellen, dass sie das tut, was der Kunde will.
4. Softwareentwicklung. Die Software muss sich weiterentwickeln, um den sich ändernden Kundenanforderungen gerecht zu werden.

Diese komplexen Aktivitäten umfassen Anforderungsprüfung, Architekturdesign und Komponententests. Die Prozesse umfassen auch das Softwarekonfigurationsmanagement und die Projektplanung, die die Produktionsaktivitäten unterstützen.
Wenn wir Prozesse beschreiben und diskutieren, sprechen wir normalerweise von Aktivitäten in diesen Prozessen. Bei der Beschreibung von Prozessen ist es aber auch wichtig zu beschreiben, wer beteiligt ist, was produziert wird und welche Bedingungen den Handlungsablauf beeinflussen:
1. Produkte oder Ergebnisse sind die Ergebnisse der Aktivitäten des Prozesses.
2. Rollen spiegeln die Verantwortlichkeiten der am Prozess beteiligten Personen wider.
3. Vor- und Nachbedingungen sind die Bedingungen, die erfüllt sein müssen, bevor und nachdem die Prozesstätigkeit durchgeführt oder das Produkt hergestellt wurde. Beispielsweise kann eine Vorbedingung vor Beginn des architektonischen Entwurfs die Zustimmung des Kunden zu allen Anforderungen sein; Nachdem diese Aktion abgeschlossen ist, kann die Nachbedingung eine Validierung der UML-Modelle sein, die die Architektur beschreiben.

Softwareprozesse sind komplex und hängen von den Menschen ab, die die Entscheidungen treffen. Da es keinen einheitlichen Prozess gibt, haben die meisten Softwareunternehmen ihre eigenen Entwicklungsprozesse entwickelt. Prozesse entwickeln sich ständig weiter. Sicherheitskritische Systeme erfordern einen sehr strukturierten Entwicklungsprozess, der detaillierte Aufzeichnungen führt. Für Geschäftssysteme mit sich schnell ändernden Anforderungen ist ein flexiblerer Prozess wahrscheinlich am besten geeignet.
Die Planung ist ein fester Bestandteil aller Prozesse. Plangesteuerte Prozesse sind Prozesse, bei denen alle Aktivitäten des Prozesses im Voraus geplant und der Fortschritt anhand dieses Plans gemessen wird. In agilen Prozessen erfolgt die Planung inkrementell und kontinuierlich mit der Entwicklung der Software. In der Regel muss bei großen Systemen eine Balance zwischen geplanten und flexiblen Prozessen gefunden werden.
Organisationen können ihre Prozesse verbessern, indem sie Praktiken wie UML-Modellierung und testgetriebene Entwicklung übernehmen.


## 2.1 Software-Prozessmodelle






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

