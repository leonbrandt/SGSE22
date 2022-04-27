# System Modellierung

**Autor:** Christiane Zolkin



## Einführung

Unter Systemmodellierung versteht man den Prozess, Systeme durch die Entwicklung von abstrakten Modellen zu repräsentieren. Dazu werden die verschiedenen Perspektiven eingenommen, unter denen ein System betrachtet werden kann. Diese setzen sich aus den folgenden Perspektiven zusammen:

1. Die externe Perspektive
2. Die Interaktionsperspektive
3. Die strukturelle Perspektive
4. Die Verhaltensperspektive

Solche Modelle werden häufig durch eine graphische Notation erfasst. Die Unified Modeling Language (UML) stellt dazu 13 standardisierte Diagramme zur Verfügung, welche dafür genutzt werden können, die unterschiedlichen Perspektiven auf ein System abzubilden. Aus einer Umfrage ging jedoch hervor, dass 5 UML-Diagramme ebenfalls ausreichen, um die wesentlichen Aspekte des Systems zu erfassen:

1. Aktivitätsdiagramme
2. Use-Case-Diagramme
3. Sequenzdiagramme
4. Klassendiagramme
5. Zustandsdiagramme

Die Systemmodellierung kann während der Anforderungs-Engineering Prozesses erfolgen, um die Anforderungen des Systems zu ermitteln. Während des Design-Prozesses ist es ebenfalls hilfreich, um das System für Stakeholder auf anschauliche Weise zu beschreiben. Aber auch nach der Implementierung des Systems kann die Systemmodellierung genutzt werden, damit eine detaillierte und übersichtliche Dokumentation der Struktur und Funktionalität erstellt werden kann. 

Unterschieden wird zwischen der Modellierung bereits existierender oder angestrebter Systeme.

## Kontextmodelle

Um ein System zu entwerfen, ist es wichtig frühzeitig festzulegen, welche Prozesse und Operationen innerhalb der Systemumgebung auszuführen sind. Dazu sollten auch bereits vorhandene Systeme betrachtet werden, um redundante Funktionalitäten auszuschließen und mögliche Verbindungspunkte zu schaffen. Die Grenzen des Systems innerhalb der Umgebung sollen daher definiert werden. Dabei kann es sich um eine klare Abgrenzung handeln, allerdings kann es oftmals vorkommen, dass flexible Grenzen anzustreben sind, welche die Möglichkeit der Anpassung auf die Bedürfnisse der Nutzer bieten.

![ContextModel](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\ContextModel.png)

Was in dieser Phase der Systemmodellierung also angestrebt wird, ist die Definition des Systemkontextes. Abhängigkeiten oder Beziehungen innerhalb dieser Umgebung können mithilfe eines Kontextmodells erfasst werden. Dieses bietet einen guten Überblick über alle Komponenten der Umgebung, jedoch wird die jeweilige Art der Beziehung zwischen zwei Systemen nicht ersichtlich. Für die Ermittlung der Anforderungen und das Design des Systems ist es aber notwendig, die spezifischen Interaktionen und Beziehungen zu kennen. Aus diesem Grund werden häufig weitere Modelle herangezogen, welche die Prozesse abbilden können. 

![ActivityDiagram](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\ActivityDiagram.png)

UML Aktivitätsdiagramme bieten einen guten Rahmen, um Beziehungen zwischen Systemen, Prozesse und Aktivitäten zu abstrahieren. Dazu wird Gebrauch von folgenden Elementen gemacht:

| Element                     | Bedeutung                                         |
| --------------------------- | ------------------------------------------------- |
| Ausgefüllter Kreis          | Beginn des Prozesses                              |
| Ausgefüllter Kreis mit Ring | Ende des Prozesses                                |
| Rechteck mit runden Ecken   | Aktivität                                         |
| Pfeil                       | Arbeitsfluss von einer Aktivität zu einer anderen |
| Dicker Strich               | Koordination von Aktivitäten                      |


## Interaktionsmodelle



### Use Case Modellierung

![UseCases](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\UseCases.png)

### Sequenzdiagramme

![SequenceDiagram](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\SequenceDiagram.png)

## Strukturmodelle



## Verhaltensmodelle 



## Modellbasiertes Engineering





<-- Markdown Cheat Sheet -->

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