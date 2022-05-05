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

- Grundsaetzlich ist es eher ein Problem des managements nicht des technischen
  - Manager moechten nicht die Requirements anpassen um reuse zu ermoeglichen
  - risiken der entwicklung neuer software ist hoeher
    - manager bevorzugen bekannte risiken als neue risiken der wiederverwendung
  - helfen koennte ein wiederverwendungs-programm 
    - erstellun von reuse assets, prozessen zum erleichtern der wiederverwendung
    -  (Jacobsen, Griss, and Jonsson 1997)

## Application frameworks

- Vorteil von OOP sei die wiederverwendung von objekten in anderen systemen
- herausgestellt, dass objekte
  - feingranular 
  - und auf eine bestimme applikation angepasst sind
- dauert laenger, vorhandene objekte zu verstehen und anzupassen, als diese neu zu implementieren
- Object oriented wiedrverwendung am besten mit objekt orientierter entwicklungs prozess durch grobkörnigere Abstraktionen, die 
  Frameworks genannt werden
- framework ist eine generische struktur welche fuer ein spezifische subsystem oder eine applikation erweitert werden kann
- Schmidt et al. 2004
  - "ein integrierter Satz von Softwareartefakten (wie Klassen, Objekte und Komponenten), die
zusammenarbeiten, um eine wiederverwendbare Architektur für eine Familie verwandter Anwendungen bereitzustellen."
- frameworks bieten support fuer features, die sehr wahrscheinlich in applikationen aehnlicher art verwendet werde
- user interface framework 
  - interface event handling 
    - einzelne widgets zum erstellen von anzeigen
    - der entwickler spezialisiert diese widgets indem spezifische funktionalitaet hinzugefuegt wird 
    - beispiel entwickler baut ein layout zusammen, welches den anforderungen der applikation entspricht 

- frameworks liefern skelettartige architektur und die wiederverwendung von spezifische klassen im system
- architektur wird durch objektklassen und deren interaktionen implementiert
- klassen koennen wiederverwendet werden oder erweitert werden
  - mit hilfe von vererbung und polymorphie 

- frameworks sind als ansammlung von konkreten und abstrakten objektklassen in einer oop sprache implementiert
- also sind diese sprachenabhaengig
- verfuegbar in oop-sprachen wie java, c++ oder auch dynamische sprachen wie ruby und python
- frameworks koennen selber frameworks beinhalten
- frameworks koennen benutzt werden fuer komplette applikationen oder teile einer applikation (beispiel graphical user interface)

- meisten applikationsframeworks sind web application framewoks (WAFs)
  - erstellung dynamischer webseiten
  - meist basierend auf model-view-controller (MVC) composite pattern
    - BILD 15.5
    - 1980 als ansatz von gui design, welches mehrere praesentationen von objekten und verschiedene styles der interaktion mit diesen praesentationen ermoeglicht
    - grundsaetzlich wird der zustand einer praesentation seperiert, sodass dieser zustand von jeder praesentation geupdatet werden kann
    - beim veraendern von daten durch eine praesentation wird das system model veraendert und die kontroller fuer die jeweilige anzeige updatet die presentation

- frameworks benutzen sehr oft design patterns (siehe kapitel 7)
  - mvc frameworks zum beispiel verwenden obsever, strategy composite pattern und mehr 
  - die verwendung dient der erweiterbarkeit
  - ohne pattern waren frameworks impraktikabel

- frameworks bieten grundsaetzlich verschiedene funktionalitaeten
- web applikations frameworks liefern komponenten und klassen, welche folgendes unterstuetzen:

1. **Sicherheit** WAFs helfen bei der Authentifizierung von Bennutzern und bei der Zugriffskontrolle.
2. **Dynamische Webseiten** Klassen helfen dabei webseiten templates zu definieren und diese dynamisch mit Daten aus der Datanbanl zu fuellen.
3. **Datenbankintegration** Frameworks stellen eventuell Klassen zur verfuegung, welche eine abstrakte Schnittstelle zu verschiedenen Datenbanken bereitsellen.
4. **Sitzungsverwaltung** Klassen, welche Sitzungen erstellen und verwalten, sind oft Teil einer WAF.
5. **Benutzerinteraktionen** Web Frameworks liefern Supprt fuer AJAX (Holdener 2008) und/oder HTML5 (Sarris 2013) zur Erstellung interaktiver Webseiten. Darunter koennen sich Klassen zur Erstellung geraeteunabhaeniger Interfaces befinden, welche sich autimatisch an Mobiltelefone und Tablets anpassen.

- Systemimplementierung mit Frameworks
  - erstellen konkreter Klassen, welche Operationen von abstrakten Klassen des Frameworks erben
  - zusaetzlich muessen "Callbacks" definiert werden
    - Methoden, welche aufgerufen werden, wenn ein Event vom Framework erkannt wurde
    - Framework objekte sind fuer die Kontrolle zustaendig
    - nicht die applikationsspezifischen Objekte
    - "Inversion of control" (Schmidt, Gokhale, and Natarajan 2004)
  - Als Reaktion auf Events von der Benutzeroberflaeche oder von Datenbankframework Objekten werden so genannte "Hook-Methoden" aufgerufen
    - diese werden mit vom Benutzer bereitgestellte Funktionen verknuepft
    - die Benutzer bereitgestellte funktionalitaet entscheided wie die applikation bei einem Event reagieren soll
    - BILD 15.6
    - Beispiel Framework besitzt Methode zum handhaben von Mausklicken
      - Diese Methode ist die "Hook-Methode"
      - muss konfiguriert werden um die richtigen applikations methoden aufzurufen, welche das Klicken handhaben

Fayad und Schmidt (Fayad und Schmidt 1997) diskutieren drei weitere Klassen von
Rahmen:

1. **Systeminfrastruktur-Frameworks** unterstuetzen die Entwicklung von Systeminfrastrukturen wie beispielsweise Kommunikationen, Benutzerschnittstellen und Compiler.
2. **Frameworks für die Middleware-Integration** bestshen aus einer Menge an Standards und damit verbundenen Objektklassen, welche den Kommunikation und den Datenaustausch der Komponenten unterstuetzt. Beispiele sind Microsoft's .NET und Enterprise Java Beans (EJB)
3. **Frameworks für Unternehmensanwendungen** behandeln konkrete Anwendungensgebiete wie Telekommunikations- und Finanzsysteme (Baumer et al. 1997). Diese beinhalten Wissen ueber Andwendungsbereiche und unterstuetzen die Entwicklung von Endbenutzeranwendungen. Heute sind sie nicht verbreitet und wurden weitgehend durch Software-Produktlinien ersetzt.

- Applikationen mit Frameworks koenne die Basis fuer weitere Wiederverwendung darstelle
  - Konzept der software-Produktlinien und Applikationsfamilien
  - ERleichtert das Veraendern von "Familienmitgliedern" um Instanzen des Systems zu erstellen  

- Frameworks sind sehr effektiv im Bezug auf Wiederverwendung
  - Nachteile
    - Teuer zu einzubauen aufgrund der Komplexitaet
      - kann monate dauern, die funktionsweise zu erlenen
    - schwierig und teuer, verschiedene frameworks gegeneinander abzuwiegen
      - welches ist das geeignetste
    - Debbugging kann schwierig sein  
      - man weiss nicht wie zwingend, wie die Framework methoden untereinander interagieren
      - Debugging tools koennen dabei jedoch helfen

## Software-Produktlinien

- bei aehnlichen aber nicht gleichen systemen eines unternehmens
  - wiederverwendung durch software produktlinien
- gerne bei Hardware Kontrollsystemen
- ebenso wie in Gebietspezifischen applikationen in der logistik oder im medizinischen feld
- beispiel drucker
  - die software ist sehr aehnlich aber nie ganz gleich
  - erstellen eines core produkt bzw. kernprodukt (produktlinie)
    - anschliessendes anpassen an jeden druckertypen

- software produktlinie
  - sammlung von applikationen mit aehnlicher architekur und gemeinsamen komponenten
  - jede applikation fuer kundenspezifische anforderungen
- core produkt
  - kann konfiguriert werden 
  - an kundenwuensche oder equipment angepasst werden
    - Konfigurieren von komponenten
    - zusaetzliche komponenten entwickeln
    - veraendern einiger komponenten
  
- eine grosse menge an applikationscode kann so wieder verwendet werden
- testen wird vereinfacht
  - tests fuer grosse parts der applikation koennen eventuell wiederverwendet werden
  - senken der entwicklungszeit
- Entwickler erlernen das applikationsgebiet mit der produktlinie
  - koennen so spezialisten werden
  - und effizient neue applikationen entwickeln

- produktlinien entstehen meist aus vorhandener software
  - ein produkt wurde entwickelt
  - eine aehnliches produkt soll entwickelt werden
  - wiederverwenden von teilen des ersten produkts
  - gleicher prozess bei folgenden aehnlichen produkten
  - wird immer schwieriger eine neue version zu erstellen
  - generische produktlinie einsetzen
    - gemeinsame funktionalitaeten feststellen
    - eine basis applikation entwickeln fuer weitere entwicklungen

Basisapplikation ist so entworfen, um wiederverwendung und die Neukonfiguration zu erleichtern.
(BILD 15.7) Eine Basisapplikation besteht aus folgenden Teilen:

1. Kernkomponenten, die Infrastrukturunterstuetzung bieten. Diese werden nicht bei der Erstellung einer neuen Instanz der Produktlinie veraendert.
2. Konfigurierbare Komponenten, welche fuer bestimmte Anforderungen angepasst werden koennen. Diese Komponenten koennen teils auch ohne das Veraendern von Code mit Hilfe einer  Konfigurationssprache angepasst werden.
3. Spezialisierte, gebietspezifische Komponenten werden entweder teils oder komplett bei der Erstellung einer neuen Instanz der Produktlinie ausgetauscht.

Applikations Frameworks und Software Produktlinien haben einiges gemeinsam. Beide unterstuetzen eine gemeinsame Architektur und Komponenten. Zusaetzlich wird neue Entwicklungsaufwand benoetigt,
um eine neue Version eines Systems zu erstellen. Die Unterschiede werden im Folgenden dargestellt:

1. 
2. 
3. 
4. 



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