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

Grundsaetzlich sind alle Softwaresysteme mit generischer Funktionalitaet 
wiederverwendbar. Dennoch koennen diese Systeme oder Komponenten so
spezifisch implementiert sein, sodass ein Veraendern fuer die Wiederverwendung
sehr teuer sein kann. Statt den Programmcode wieder zu verwenden, koennen
ebenfalls die Ideen, welche der Software zu Grunde liegen, wiederverwendet werden.
Das Konzept wird "Konzept-Wiederverwendung" genannt. Es werden also 
eine Idee, eine Art zu arbeiten oder Algorithmen wiederverwendet. Dieses 
Konzept ist dabei abstrakt ohne Implementierungsdetails aufgeschrieben
und kann so fuer jedes neues Problem angepasst werden. Die Konzept-Wiederverwendung wird in Design Pattern (Kapitel 7) konfigurierbaren 
Systemen und Programmgeneratoren verkoerpert.

Im Folgenden werden die Vorteile der Software-Wiederverwendung dargestellt.

| A          |     B       |
|:----------:|:----------------:|
| Schnellere Entwicklung | sdfsdfs |
| Effektiver Einsatz von Spezialisten  | asdsdf | 
Erhöhte Zuverlässigkeit
Niedrigere Entwicklungskosten
Verringerte 
Reduziertes Prozessrisiko
Einhaltung von Standards

Folgend werden Nachteile tabellarisch dargestellt.

| A          |     B       |
|:----------:|:----------------:|
| Erstellen, Pflegen und Verwenden von
Komponentenbibliotheken | sdfsdfs |
| Finden, verstehen und
Anpassung wiederverwendbarer Komponenten  | asdsdf | 
Erhöhte Wartungskosten
Fehlende Werkzeugunterstützung
"Nicht-hier-erfunden" Syndrom


## Die Wiederverwendungslandschaft

In den letzten 20 Jahren wurden einige Techniken entwickelt, um die Wiederverwendung
von Software zu ermoeglichen. Diese Techniken basieren darauf, dass Software 
in gleichen Anwendungsbereichen aehnlich ist und somit wiederverwendet werden
kann. Es koennen dabei simple Funktionen oder ganze Applikationen wiederverwendet werde. 
Zusaetzlich helfen Standards bei der Wiederverwendung. Im Folgenden 
wird die Wiederverwendungslandschaft dargestellt (verschiedene Arten
der Wiederverwendung) und anschliessend kurz erlaeutert.

BILD

| A          |     B       |
|:----------:|:----------------:|
Anwendungsframeworks Sammlungen von abstrakten und konkreten Klassen werden angepasst und
erweitert um Anwendungssysteme zu erstellen.
Integration von Anwendungssystemen Zwei oder mehr Anwendungssysteme werden integriert, um eine erweiterte Funktionalitaet bereitzustellen.
Architekturmuster Standardsoftwarearchitekturen, die gängige Arten von 
Anwendungssystem unterstützen, dienen als Basis von Anwendungen. Siehe 
Kapitel 6, 11 und 17.
Aspektorientierte Software-Entwicklung
Gemeinsame Komponenten werden an verschiedenen Stellen in eine Anwendung eingewoben
wenn das Programm kompiliert wird.
Komponentenbasierte Softwareentwicklung
Systeme werden entwickelt, indem Komponenten integriert werden (Sammlungen von
Objekten), die den Komponentenmodellstandards entsprechen. Siehe Kapitel 16.
Konfigurierbare Anwendungssysteme Domänenspezifische Systeme sind so konzipiert, dass sie auf die Bedürfnisse bestimmter Systemkunden konfiguriert werden können.
Design Patterns Generische Abstraktionen, die anwendungsübergreifend auftreten, werden als Entwurfsmuster dargestellt, welche abstrakte und konkrete Objekte und Interaktionen zeigen. Siehe Kapitel 7.
ERP-Systeme Große Systeme, die generische Geschäftsfunktionen und Regeln kapseln, werden für eine Organisation konfiguriert.
Legacy-Systemumhüllung Legacy-Systeme (Kapitel 9) werden „umhüllt“, indem eine Menge von Interfaces definiert werden. So wird der Zugriff
auf diese Legacy-Systeme ueber beschriebene Interfaces bereitgestellt.
Modellgetrieben Entwicklung Software wird als Domänenmodelle und als
implementierungsunabhaengige Modelle dargestellt. Aus diesen Modellen wird Code generiert.
Siehe Kapitel 5.
Programmgeneratoren Ein Generatorsystem bettet Wissen über eine Art von Anwendung ein und
wird verwendet, um Systeme aus diesem Gebiet aus einem vom Benutzer bereitgestelltem Systemmodell zu generieren.
Programmbibliotheken Klassen- und Funktionsbibliotheken, die häufig verwendete Abstraktionen implementieren, stehen zur Wiederverwendung zur Verfügung.
Serviceorientierte Systeme Systeme werden durch die Verknüpfung gemeinsam genutzter Dienste entwickelt, die ggf.
extern bereitgestellt werden. Siehe Kapitel 18.
Software-Produktlinien Ein Anwendungstyp wird in einer gemeinsamen Architektur verallgemeinert, sodass dieser für verschiedene Kunden angepasst werden kann.
Systeme von Systemen Zwei oder mehr verteilte Systeme werden integriert, um ein neues System zu erstellen. Siehe Kapitel 20.

Im Folgenden werden die Hauptfaktoren beschrieben, welche beachtet werden sollten,
wenn die Wiederverwendbarkeit von Softeware geplant ist.

1. **Entwicklungszeitplan der Software** Wenn die Software schnell 
entwickelt werden soll, bietet es sich an, ganze Systeme statt einzelner
Komponenten wieder zu verwenden. Es wird zwar nicht perfekt auf die
Anforderungen passen, dennoch wird die Entwicklungszeit stark reduziert.
2. **Erwartete Lebensdauer der Software** Bei einer langen Lebensdauer 
sollte das Augenmerk auf die Wartbarkeit der Software gelegt werden.
Bei solcher Software sollte auf gekaufte Komponenten externer Unternehmen
verzichtet werden. Diese koennen beispielsweise den Support einstellen. 
Das Verwenden von Open-Source Systemen und Komponenten kann ermoeglichen,
auf den Quellcode zugreifen zu koennen und eine Kopie von diesem zu speichern.
3. **Hintergrund, Fähigkeiten und Erfahrung des Entwicklungsteams** 
Wiederverwendbare Technologien sind komplex und benoetigen Erfahrung 
in dem jeweiligen Bereich. Wiederverwendbare Technologien sollten dort
eingesetzt werden, wo das Entwicklungsteam ueber Expertise verfuegt.
4. **Kritikalitaet der Software und ihre nicht funktionalen Anforderungen** 
Fuer ein kritisches System, welches durch einen externen Regulator 
zertifiziert werden muss, muessen eventuell Sicherheitsfaelle fuer das 
System aufgestellt werden (Siehe Kapitel 12). Dies ist schwer, falls der 
Quellcode nicht komplett einsehbar ist.
5. **Applikationsgebiet** In vielen Applikationsgebieten, wie z.B. in 
der Herstellung und in medizinischen Informationssystemen, existieren
generische Produkte, welche nach Anpassung an lokale Situationen wiederverwendet werden koennen. Dies ist eine der effektivsten Ansaetze
der Wiederverwendung von Software. Grundsaetzlich ist es meist guenstiger
Systeme zu kaufen, statt sie selbst neu zu entwickeln.
6. **Platform, auf welcher das System ausgefuehrt wird** Viele generische
Applikationen sind platformabhaengig (z.B. .NET). Somit koennen sie nur 
auf gleichen Platformen wiederverwendet werden.



## Links

[Markdown] ist eine Sprache, die nach HTML konvertiert werden kann. 

[Markdown]: http://daringfireball.net/projects/markdown/

# Überschrift

"...the **go to** statement should be abolished..." [1].

Dieser Link führt intern zu einem anderen [Thema](qualitaet/README)

Dieser Link führt extern nach [Youtube](https://www.youtube.com/)

> Dieser Text ist völlig sinnlos, aber steht trotzdem hier. Dieser Text geht über mehrere Zeilen.


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