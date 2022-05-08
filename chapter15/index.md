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

1. Applikations Frameworks bauen auf objektorientierte Features wie Vererbung und Polimorphismus auf, um die Frameworks zu erweitern. Dabei wird der Code des Frameworks nicht veraendert und die moeglichen Modifizierungen sind limitiert. Software Produktlinien hingegen muessen nicht mit einem objektorientierten Ansatz inplementiert werden. Komponenten koennen veraendert, geloescht und neu geschrieben werden. 
2. Die meisten Frameworks bieten eine generelle Unterstützung und nicht eine gebietspezifische Unterstützung (z.B. Framework fuer webbasierte Anwendungen). Eine Software Produktlinie ist in der Regel in einem bestimmten Anwendungsgebiet angesiedelt (z.B. webbasierte Anwendung fuer das Verwalten von Krankenakten). 
3. Software Produktlinien sind meist Steueranwendungen fuer bestimmtes Equipment (z.B. Drucker). Das bedeutet, dass Produktlinien Hardwareschnittstellen unterstuetzen muss. Applikations Frameworks hingegen sind softwareorientiert und besitzen grundsaetzlich keine Komponenten zur Kommunikation mit Hardware.
4. Software Produktlinien bestehen aus einer Familie verwandter Anwendungen, die Eigentum von derselben Organisation sind. Wenn eine neue Anwendung erstellt wird, ist der Ausgangspunkt oft das engste Mitglied der Anwendungsfamilie und nicht die generische Kernanwendung.

- bei der erstellung einer produktlinie
  - verwendung von objektorientierter sprache 
  - eventuell ein framework als basis nehmen
  - kernanwendung dann aus der Erweiterung des frameworks mit gebietspezifischen komponenten 
  - in zweiter phase wird anschliessend das system fuer verschiedene kunden verfeinert.
  - beispiel
    - web-based framework als kern fuer ein webbasierte beratungsstelle
    - produktlinie dann weiter spezialisiert auf verschiedene arten von beratungsstellen

- Architektur einer produktlinie spiegelt oft einen allgemeinen, anwendungsspezifischen Architekturstil oder ein Muster wider
- Beispiel 
  - produktlinie um die Fahrzeugaufteilung für Rettungsdienste abzuwickeln
  - telefonat annehmen 
  - passendes fahrzeug finden
  - und das fahrzeug passend zum Unfall etc. losschicken
  - kann also an polizei, feuerwehr und krankenhaeuser verkauft werden
- fahrzeugaufteilung gutes beispiel fuer generic resource allocation and management architectur
  - BILD 15.8 
  - Datenbank mit verfuegbaren ressourcen
  - Komponenten die die Ressourcen Zuteilungspolitik beinhalten
    - vom unternehmen festegelegt
  - Benutzer interagieren mit dem system
    - ressourcen anfragen
    - freigeben 
    - Fragen stellen bzgl. ressourcen und deren Verfuegbarkeit
- fuer so ein Fahrzeugaufteilungs system koennen folgende komponenten implementiert sein
  - BILD 15.9
Die Komponenten auf jeder Ebene sind im Folgenden weiter erlaeutert:

1. Auf der Interaktionsebene stellen Komponenten eine Bedieneranzeigeschnittstelle bereit und eine Schnittstelle zu den verwendeten Kommunikationssystemen.
2. Auf der E/A Ebene (Ebene 2) uebernehmen Komponenten die Benutzerautentifizierung, das Generieren von Berichten ueber Vorfaelle und abgefertigte Fahrzeuge. Des Weiteren werden Kartenausgabe und Routenplanung unterstuetzt, sowie Mechanismes fuer Operatoren zur Abfrage der Systemdatenbank bereitgestellt.
3. Auf der Ressourcen-Management-Ebene (Ebene 3) ermoeglichen Komponenten, Fahrzeuge zu lokalisieren, den Status von Fahrzeugen und Ausruestung zu aktualisieren und Imformationen zu Vorfaellen zu protokollieren.
4. Auf der Datenbankebene gibt es seperate Datenbanken fuer Fahrzeuge, Ausruestung und Karten.

- neue intanzen fuer das system   
  - veraender der komponenten
  - beispiel
    - polizei
      - viele autos 
      - wenige verschiedene autos
    - feuerweher 
      - wenig autos
      - sehr viele verschiedene und spezialisierte fahrzeuge
    - anpassen der datenbankstruktur notwendig


Es können verschiedene Arten der Spezialisierung einer Softwareproduktlinie entwickelt werden:

1. **Platform-Spezialisierung** Versionen der Anwendung koennen fuer verschiedene Platformen (z.B. Windows, Mac OS, Linux) existieren. Die Funktionalitaet bleibt gleich und nur Teile, die eine Schnittstelle mit Hardware oder Betriebssystem darstellen, werden modifiziert.
2. **Umgebungs-Spezialisierung** Versionen der Anwendung koennen in verschiedenen Betriebsumgebungen mit verschiedenen Peripheriegeraeten benoetigt werden. Beispielsweise kann ein System fuer Rettungsdienste in verschiedenen Versionen, abhaengig von benutzter Hardware, exisitieren. Polizeistationen kommunizieren eventuell mit eingebaueter Verschluesslung. Die Produktlinien-Komponenten werden der Funktionalitaet der verwendeten Ausruestung angepasst.
3. **Funktionelle Spezialisierung** Versionen der Anwendung sind fuer verschiedene Kunden mit verschiedenen Anforderungen. Beispielsweise muss ein Bibliothek-Automatisierungs-System angepasst werden, wenn es sich um eine oeffentliche Bibliothek oder eine Universiaetsbibliothek handelt. Komponenten mit Funktionalitaet muessen eventuell ueberarbeitet oder neu geschrieben werden.
4. **Prozess-Spezialisierung** Systeme muessen eventuell mit verschiedenen Business Prozessen funktionieren. Ein Bestellsystem muss zum Beispiel einen zentralen Bestellprozess in einem Unternehmen und einen verteilten Bestellprozess in einem anderen bewaeltigen.

Das folgende Bild zeigt den Prozess der Erweiterung einer Software Produktlinie zum Erstellen einer neuen Anwendung.

BILD 15.10

Die Aktivitäten in diesem Prozess sind:

1. **Stakeholder-Anforderungen herausfinden** Es wird mit einer normalen Anforderungsanalyse begonnen. Da aehnliche Systeme bereits vorhanden sind, koennen diese vorgefuehrt werden. Der Kunde kann so seine Aenderungsvorschlaege darstellen.
2. **Auswaehlen eines vorhandenen Systems, das den Anforderungen am besten entspricht** Die Anforderungen werden analysiert und ein Produktlinien-Mitglied, welches am naehsten an die neuen Anforderungen herankommt, zur Modifikation ausgewaehlt.
3. **Anforderungen neu verhandeln** Waehrend der Projektplanung werden die zu modifizierten Stellen der Software erarbeitet. Um die noetigen Veraenderungen der Basisanwendung zu minimieren, muessen manche Anforderungen mit dem Kunden erneut verhandelt werden.
4. **Bestehendes System anpassen** Neue Module fuer das existierende System werden entwickelt und vorhandene Module werden den Anforderungen entsprechen angepasst.
5. **Ausliefern des neuen Produktlinien-Mitglied** Die neue Instanz wird dem Kunden ausgeliefert. Hier sollten die wichtigsten Funktionen dokumentiert werden, damit das neue System als Basis fuer weitere Entwicklungen dienen kann.

- Kompromiss finden zwischen moeglichst viel wiederverwenden und den anforderungen des kunden
  - je detailierter die anforderungen, desto geringer ist die wahrscheinlichkeit, dass aehnliche systeme bereits existieren
  - wenn kunden jedoch flexibel sind
    - limitieren der system modifizierungen
    - schnelleres ausliefern von systemen und guenstigere entwicklung

- Software-Produktlinien sind zum rekonfigurieren entwickelt
  - hinzufuegen und loeschen von komponenten
  - parameter definieren
  - Einschraenkungen definieren
  - einbauen von Wissen ueber business prozesse
- kann in verschiedenen STufen des entwicklungsprozesses stattfinden:

1. **Konfiguration zur Entwurfszeit** Die Organisation, die die Software entwickelt, modifiziert einen gemeinsamen Produktlinienkern durch Entwicklung, Auswahl oder Anpassung von Komponenten, um ein neues System für einen Kunden zu erstellen.
2. **Konfiguration zur Bereitstellungszeit** Ein generisches System wird fuer die Konfiguration durch den Kunden entworfen. Kenntnisse der kundenspezifischen Anforderungen und der Betriebsumgebung des Systems sind in die vom generischen System verwendeten Konfigurationsdaten eingebettet.

- Konfiguration zur Entwurfszeit
  - generisches system oder mit vorhandenem system starten 
  - modifizieren des systems und anpassen an kundenwuensche
  - veraendern und erweitern des source codes 
    - bessere flexibiliaet als bei Konfiguration zur bereistellungszeit
  - wird verwendet
    - wenn es nicht moeglich ist die bestehenden bereitsstellungszeit configurations Einrichtungen (?) verwendet werden kann
  - Ueber zeit werden Produktlinien mitglieder mit gleicher funktionalitaet erstellt
    - refactoring dieser funktionalitaet in die kernanwendung
    - anschliessend wird diese funktionalitaet zur auslieferungszeit konfigurierbar gemacht
- Konfiguration zur Bereitstellungszeit
  - benutzen von configurations tools um ein spezifische systen konfiguration zu erhalten
    - in konfigurations datenbanken gespeichert
    - oder als ansammlung von konfigurations dateien
    - BILD 15.11
    - das system (auf server oder auf einem pc) holt sich die informationen aus der datenbank

Mehrere Ebenen der Konfiguration zur Bereitstellungszeit werden in einem system bereitgestellt:

1. **Komponentenauswahl**, in welcher passende Module fuer das System ausgesucht werden. Beispielsweise kann in einem System fuer die Speicherung von Patientendaten eine Komponente fuer das Verwalten von Bildern hinzugefuegt werden. So koennen medizinische Bilder mit der Patientenakte verknuepft werden.
2. **Workflow- und Regeldefinition**, in welcher Workflows (wie Informationen verarbeitet werden) und Validierungsregeln (fuer Benutzereingaben und vom System generierte Daten) definiert werden.
3. **Parameterdefinition**, in welcher bestimmte Werte fuer systemspezifische Parameter spezifiziert werden. Zum Beispiel kann die maximale Laenge von Eingabefeldern oder die Characteristiken bestimmter Hardware definiert werden.

- kann sehr komplex sein
- grosse systeme kann es mehrere monate dauern, das system zu konfigurieren und zu testen
- grosse konfigurierbare systeme koennen software tools wie planungstools bereistellen

## Wiederverwendung Applikationssysteme

- applikationssystem
  - koennen angepasst werden an die anforderungen an kunden
  - ohne das aendern von source code
  - fuer einen generellen markt entwickelt
  - nicht speziell fuer einzelne kunden entwickelt
  - cots (commercial off-the shelf system)
    - haeufig in militaer systemen so genannt 
    - im folgenden also applikationssysteme

- jede desktop software fuer unternehmen
- viele server-basierte systeme sind applikationssysteme 
- kann also in verschiedenen environments und als teil verschiedener systeme wiederverwendet werden
- Torchiano and Morisio (Torchiano and Morisio 2004)
  - open source produkte werden oft ohne veraenderung verwendet 
  - code wird nichtmal angeguckt 

- Applikationssysteme 
  - eingebaute configurations mechanismen zum einstellen fuer kunden
  - beispiel 
    - krankenakten system
      - verschiedene eingabe und ausgabe formen abhaengig vom patienten
    - andere konfigurations features erlauben eventuell plug ins zu erlauben

Dieser Ansatz zur Wiederverwendung von Software wird seit Ende der 1990er Jahre von großen Unternehmen sehr häufig übernommen, da er erhebliche Vorteile gegenüber der kundenspezifischen Softwareentwicklung bietet:

1. Schnellere Herausbringen von zuverlaessigen Systemen ist moeglich.
2. Es ist moeglich zu sehen, welche Funktionalitaet von der Applikation gegeben ist. Das Einschaetzen ob die Software passt wird vereinfacht. Andere Unternehmen verwenden eventuell besagte Software und Erfahrungen mit dem System liegen vor.
3. Manche Entwicklungsrisiken beim verwenden vorhandener Software minimiert.
4. Unternehmen koennen sich auf Kernaktivitaeten konzentrieren, ohne viele Ressourcen fuer die Entwicklung von IT Systemen zu benoetigen.
5. Wenn sich Opeationsplatformen veraendern ist das updaten vereinfacht, da die Verantwortung dafuer bei dem Applikationssystem-Anbieter liegt.

Dennoch bringt diese Ansatz der Wiederverwendung Probleme:

1. Anforderungen muessen angepasst werden, um die Funktionalitaet und die Arbeitsweise der Off-the-shelf Applikationssystem zu reflektieren. Das kann zu stoerenden Aenderungen in vorhandenen Unternehmensprozessen fuehren.
2. Das Applikationssystem kann auf Annahmen basieren, welche nicht geaendert werden koennen. Der Kunde muss also sein Geschaeft so aendern, um diese Annahmen zu reflektieren
3. Das passende Applikationssytem auszusuchen kann ein schwieriger Prozess sein, da diese oft nicht gut dokumentiert sind. Bei falschen Entscheidungen kann es unmoeglich sein, das neue System nach den Anforderungen umzusetzen.
4. Es kann einen Mangel an lokaler Expertise zur Systementwicklung geben. Der Kunde muss sich also auf den Hersteller des Applikationssystems oder auf externe Berater verlassen. Die Beratung kann dabei zum Verkaufen von weiteren Produkten oder Dienstleistungen verwendet werden, ohne passend auf die Kundenbeduerfnisse einzugehen.
5. Der Systemanbieter steuert die Systemunterstützung und -entwicklung. Dieser kann sein Geschaeft aufgeben, uebernommen werden, oder Aenderungen vornehmen, die dem Kunden Schwierigkeiten bereiten.

TABELLE UND BESCHREIBUNG

### Konfigurierbare Applikationssysteme

- Konfigurierbare Applikationssysteme 
  - generische applikationssystem
  - designed fuer einen bestimmten unternehmenstypen
    - unternehmensaktivitaeten
    - oder manchmal eine komplette business enterprise
  - beispiel
    - system fuer zahnaerzte 
      - termine
      - erinnerungen
      - patientenakten
      - patientenrueckruf
      - rechnungen
    - groesser kann ein enterprise resource planning (erp) system
      - herstellung 
      - einkauf 
      - Kundenbeziehungs management in grossen firmen
- Gebietspezifische applikationssysteme
  - funktionalitaet die von einer vielzahl an kunden benoetigt wird
  - aber es werden annahmen getroffen, welche in bestimmten situationen probleme bereiten
    - beispiel
      - system zum anmelden von studenten an einer universiaet
      - annahme, dass studenten sich fuer einen abschluss an einer uni einschreiben
      - bei kollaborationen mit zwei universitaeten fuer gemeinsame abschluesse
      - koennen im system nicht dargestellt werden
- ERP systeme (produziert von sap und oracle)
    - grosse integrierte systeme
    - Bestellungen 
    - Rechnungsstellung
    - Bestandsverwaltung
    - Fertigungsplanung
    - (Monk and Wagner 2013)
    - Konfigurationsprozess
      - sammeln von detailierten infos ueber unternehmen des kunden und deren unternehmensprozesse 
      - speichern in configurations datenbank
      - expertise ueber konfigurationsnotationen und tools
      - meist durch Berater, die mit dem Systemkunden zusammenarbeiten

- Generisches ERP System besteht aus mehreren Modulen
  - Konfigurationsprozess
    - module auswaehlen
    - diese konfigurieren
    - unternehmensprozesse definieren
    - unternehmensregeln definineren
    - struktur und organisierung der system datenbank definieren
    - BILD 15.13
  
Die Hauptmerkmale dieser Architektur sind wie folgt:

1. Eine Menge von Modulen, um verschieden Unternehmensfunktionen zu unterstuetzen. Diese sind grosse Module, die ganze Abteilungen oder Unternehmenbereiche unterstuetzen koennen. Dargestellt ist ein Modul zum unterstuetzen des Einkaufs; ein Modul fuer das Lieferketten Management; ein Logistikmodul fuer die Lieferung von Waren; und ein Kundenbeziehungs Management (engl.: customer relationship management (CRM)).
2. Eine definierte Menge an Unternehmensprozess-Modellen, jedem Modul zugeordnet, welche sich auf die Aktivitaeten in diesem Modul beziehen. Zum Beispiel wird im Bestellungsprozess-Modell festegelegt, wie Bestellungen erstellt und angenommen werden. Dies spezifiziert die Rollen und Aktivitaeten im Zusammenhang mit der Auftragserstellung.
3. Eine gemeinsame Datenbank, welche Informationen ueber die Unternehmensfunktionen plegt. So ist es nicht notwendig Informationen, wie zum Beispiel Kundendaten, an verschiedenen Teilen des Unternehmens zu speichern.
4. Eine Menge an Unternehmensregeln, die fuer alle Daten in der Datenbank gelten. Bei der Eingabe von Daten, muessen die Regeln eine Konsistenz innerhalb der Datenbank erhalten. Beispielsweise kann eine Geschaeftsregel verlangen, dass alle Spesenabrechnungen von einer hoeheren Person genehmigt werden muessen als die Person, die den Anspruch geltend macht.

- ERP Systeme werden in allen grossen Unternehmen benutzt
  - fuer einige oder alle ihrer funktionen
  - Viel benutzte form der Wiederverwerndung 
  - Limitierungen
    - funktionalitaet des kunden ist an die funktionalitaet des erp systems gebunden
    - falls eine zusaetliche funktionalitaet benoetigt wird, muss ein seperates add-on implementiert und eingebaut werden.
- Unternehmensprozesse und -operationen muessen in der ERP system eigenen konfigurationssprache definiert werden
  - bei der Ersellung koennen Nichtuebereinstimmungen entstehen
    - zischen annahmen des systemanbieters und dem Kunden
    - bezueglich der Konzepte und Prozesse im Unternehmen
  - Eine grosse abweichung
    - zwischen kunden unternehmensmodell und dem system model benutzt vom erp system
    - erp system wird nicht den anforderungen des kunden entsprechen

ERP Systeme benoetigen grundsaetzlich eine umfangreiche Konfiguration, um an die Anforderungen des Kunden angepasst zu werden. Diese Konfiguration enthealt:

1. Auswahl der benötigten Funktionaliaet aus dem System, z. B. durch das Entscheiden, welche Module enthalten sein sollen.
2. Erstellen eines Datenmodells, das definiert, wie die Daten der Organisation in der Systemdatenbank strukturiert werden.
3. Definieren von Geschäftsregeln, die für diese Daten gelten.
4. Definition der erwarteten Interaktionen mit externen Systemen.
5. Gestaltung der Eingabeformulare und der vom System generierten Ausgabeberichte.
6. Entwerfen neuer Geschäftsprozesse, die dem zugrunde liegenden Prozessmodell, welches vom System unterstuetzt wird, entsprechen.
7. Festlegen von Parametern, die definieren, wie das System auf seiner Plattform bereitgestellt wird.

Nach der Konfiguration, kann das System getestet werden. Das Testen eines Systems, welches konfiguriert und nicht in einer konventionellen Programmiersprache entwickelt wird, stellt ein Prorblem dar. Es gibt zwei Gruende hierfuer:

1. Testautomatisierung ist schwierig oder sogar unmoeglich. Möglicherweise gibt es keinen einfachen Zugang zueine API, die zum Testen von Frameworks wie JUnit verwendet werden kann. Die Systeme muessen per Hand getestet werden, indem manuell Testdaten eingefuegt werden. Desweiteren sind die Systeme informell spezifiziert. Testfaelle ohne die Hilfe vom Enfbenutzer zu definieren, erweist sich als schwierig.
2. Systemfehler sind oft subtil und spezifisch fuer Geschaeftsprozesse. Die meisten Fehler passieren, weil es Missverstaendnisse zwischen denen, die das System konfigurieren, und den Benutzerinteressesnten. Systemtester, ohne detailierte Kenntnisse der Endbenutzerprozesse koennen solche Fehler nicht erkennen.

### Integrierte Applikationssysteme

- Integrierte Applikationssysteme beinhalten zwei oder mehr Applikationssysteme oder manchmal auch Legacy-Systeme.
- Wenn keine einzelne Applikationssystem alle Anforderungen entspricht
- oder wenn ein neues applikatoonssystem mut einem system, welches bereits benutzt wird, integriert werden soll
- Interaktion moeglich durch deren APIs
  - sevice-schnittstellen
  - verbindung indem output des einen systems eingabe des anderen wird
  - oder updaten der datenbank welche von der applikation verwendet wird

Um ein integriertes Applikationssystem zu entwickeln, muessen eine Menge an Designentscheidungen getroffen werden:

1. **Welche individuelle Applikation liefert die am besten geeignete Funktion?** Grundsaetzlich gibt es mehrere verfuegbare Produkte, welche in verschiedenen Wegen verknuepft werden koennen. Liegt nicht viel Erfahrung mit einem Applikationssystem vor, so kann es schwierig sein, sich fuer ein Produkt zu entscheiden.
2. **wie werden Daten ausgetauscht?** Verschiedene Systeme benutzen eigene Strukturen und Datenttypen. Eventuell muessen Adapter implementiert werden, um zwischen den Repraesentationen konvertieren zu koennen. 
3. **Welche Features werden vom Produkt letzendlich verwendet?** Applikationssysteme liefern eventuell mehr Funktionalitaet als benoetigt wird. Es muss entschieden werden, welches Feature aus welchem Produkt sich am besten fuer die Anforderungen anbietet. Falls moeglich, sollten nicht benoetigte Features ebenfalls deaktiviert werden, um den Normalsystembetrieb nicht zu stoeren.

- Riesenbeispiel
  - procurement System zum Bestellungen von ihrem Schreibtisch aus aufgeben
  - 5 millin dollar pro jahr einsparung erhofft
  - zentralisieren des kaufens
    - system kann so garantieren, dass bestellungen sind immer von Lieferanten die die besten preise liefern
    - sollte notwendige administration bei bestellungen reduzieren
  - manuelles system
    - verfuegbare ware auswaehlen
    - bestellung erstellen
    - bestellung genehmigen lassen
    - bestellung an haendler schicken
    - ware erhalten
    - Bestaetigung dass die Zahlung erfolgen soll
  - Das unternehmen hat ein altes bestellungssystem welches von einer zentralen Beschaffung verwendet wird
    - Diese Auftragsabwicklungssoftware ist in die existierenden Rechnungsstellen- und Liefersysteme eingebaut
    - fuer das neue system, wird das altes system in eine webbasierte E-Commerce-Platform und einem email system, welches die kommunikation mit den benutzern abwickelt, eingebaut
    - BILD 15.14
  - Monate oder sogar jahre entwicklungszeit koennen eingesparrt werden
    - aus dem beispiel
      - wurde in einer grossen firma in neun monaten eingefuehrt
      - vorher wurde gesagt,es dauert 3 jahre ein eigenes system zu entwicklen, welches mit dem alten system verknuepft werden kann

- Applikationssystem-Integration
  - kann mit sevice-oriented approach vereinfacht werden
  - heisst
    - Zugriff auf die funktionalitaet des applikationssystems durch Standard-Serviceschnittstellen
    - ein service fuer jede diskrete einheit der funktionalitaet
  - eventuell muss ein wrapper implementiert werden
    - der die applikation versteckt
    - aber extern sichtbare sevices anbietet 
    - BILD 15.15
    - sehr gut bei alten system die in ein neues system integriert werden soll
- wie auch bei anderen komponenten
  - verstehen der systemschnittstelle ueber die kommuniziert wird
  - anforderungen gegen schnelle entwicklung und wiederverwendung abwiegen
  - design von systemarchitektur welche es ermoeglicht dass die applikationssysteme miteinander arbeiten koennen

Die Tatsache, dass diese Produkte in der Regel eigenständige große Systeme sind und
oft als separate eigenständige Systeme verkauft werden, bringt zusätzliche Probleme mit sich. Böhm
und Abts (Boehm und Abts 1999) heben vier wichtige Systemintegrationsprobleme hervor:

1. 

### Bilder

![](media/image.jpg)

## Referenzen

[1]: Dijkstra, E. W. (1968). Go to statement considered harmful. 
Communications of the ACM, 11(3), 147-148.