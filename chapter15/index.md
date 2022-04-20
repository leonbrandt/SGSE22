# Software Reuse 

**Autor:** Tim Lücking

"Reuse-based" Software Entwicklung ist eine Strategie, innerhalb des 
Entwicklungsprozesses bereits vorhandene Software wieder zu verwenden.
Das Wiederverwenden von Software soll die Produktions- und Wartungskosten
verringern, eine schnellere Lieferung von Systemen und die Erhoehung der 
Qualitaet ermoeglichen.
Open-Source liefert beispielsweise viel wiederverwendbaren Code in Form
von Softwarebibliotheken oder ganzen Applikationen. ERP Systeme koennen,
fuer Kunden angepasst werden. Auch die Einfuehrung von Standards, wie 
zum Beispiel Webservice-Standards, ermoeglichen ein einfacheres Entwickeln
und Wiederverwenden von Software.

"Reuse-based" Software Entwicklung ist ein Ansatz, das Wiederverwenden von 
existierender Software zu maximieren. Die Softwareeinheiten koennen
dabei von unterschiedlicher Groesse sein:

1. *System-Wiederverwendung* Komplette Systeme, welche aus einer Anzahl an
Applikationsprogrammen besteht, koennen als Teil eines Systems bestehend aus Systemen
wiederverwendet werden (Kapitel 20)
2. *Applikations-Wiederverwendung* Eine Applikation kann unveraendert oder nach Anpassung
an Wuenschen vom Kunden in einem System wiederverwendet werden. Applikations-Familien oder Applikationen 
mit gleicher Architektur, welche an individuelle Kunden angepasst sind, koennen
ebenfalls auch zur Entwicklung neuer Systeme verwendet werden. 
3. *Komponenten-Wiederverwendung* Komponenten (von Subsystemen bis hin zu einzelnen Objekten)eines Systems koennen wiederverwendet werden.
Komponenten koennen dabei in der Cloud oder auf einem privaten Server gehostet werden und eventuell mit Hilfe
eines "Application programming interfaces" (API) als Service erreichbar sein.
4. *Objekt- und Funktions-Wiederverwendung* Softwarekomponenten, welche eine einzelne Funktion
(zum Beispiel eine mathematische Funktion) oder eine Objektklasse implementieren, kann 
wiederverwendet werden. Standard Bibliotheken verwenden diese Art der Wiederverwendung.
In Bereichen von mathematischen Alorithmen und Grafiken, wird teure Expertise 
fuer die Entwicklung effizienter Objekte und Funktionen benoetigt. Die Wiederverwendung von 
Standard Bibliotheken ist deshalb besonders Kosteneffizient.
















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