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

1. *System-Wiederverwendung* Komplette Systeme, welche aus einer Anzahl an Applikationsprogrammen bestehen, koennen als Teil eines Systems bestehend aus Systemen wiederverwendet werden (Kapitel 20)
2. *Applikations-Wiederverwendung* Eine Applikation kann unveraendert oder nach Anpassung an Wuenschen vom Kunden in einem System wiederverwendet werden. Applikations-Familien oder Applikationen mit gleicher Architektur, welche an individuelle Kunden angepasst sind, koennen ebenfalls auch zur Entwicklung neurer Systeme verwendet werden. 
3. *Komponenten-Wiederverwendung* Komponenten (von Subsystemen bis hin zu einzelnen Objekten)eines Systems koennen wiederverwendet werden. Komponenten koennen dabei in der Cloud oder auf einem privaten Server gehostet werden und eventuell mit Hilfe eines "Application programming interfaces" (API) als Service erreichbar sein.
4. *Objekt- und Funktions-Wiederverwendung* Softwarekomponenten, welche eine einzelne Funktion (zum Beispiel eine mathematische Funktion) oder eine Objektklasse implementieren, koennen  wiederverwendet werden. Standard Bibliotheken verwenden diese Art der Wiederverwendung. In Bereichen von mathematischen Algorithmen und Grafiken, wird teure Expertise fuer die Entwicklung effizienter Objekte und Funktionen benoetigt. Die Wiederverwendung von Standardbibliotheken ist deshalb besonders kosteneffizient.

Grundsaetzlich sind alle Softwaresysteme mit generischer Funktionalitaet 
wiederverwendbar. Dennoch koennen diese Systeme oder Komponenten so
spezifisch implementiert sein, sodass ein Veraendern fuer die Wiederverwendung
sehr teuer sein kann. Statt den Programmcode wieder zu verwenden, koennen
ebenfalls die Ideen, welche der Software zu Grunde liegen, wiederverwendet werden.
Das Konzept wird "Konzept-Wiederverwendung" genannt. Es werden also 
eine Idee, eine Art zu arbeiten oder Algorithmen wiederverwendet. Dieses 
Konzept ist dabei abstrakt ohne Implementierungsdetails aufgeschrieben
und kann so fuer jedes neues Problem angepasst werden. Die Konzept-Wiederverwendung wird in Design Pattern (Kapitel 7), konfigurierbaren 
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
kann. Es koennen dabei simple Funktionen oder ganze Applikationen wiederverwendet werden. 
Zusaetzlich helfen Standards bei der Wiederverwendung. Im Folgenden 
wird die Wiederverwendungslandschaft dargestellt (verschiedene Arten
der Wiederverwendung) und anschliessend kurz erlaeutert.

BILD

| A          |     B       |
|:----------:|:----------------:|
|Anwendungsframeworks | Sammlungen von abstrakten und konkreten Klassen werden angepasst und erweitert um Anwendungssysteme zu erstellen. |
|Integration von Anwendungssystemen | Zwei oder mehr Anwendungssysteme werden integriert, um eine erweiterte Funktionalitaet bereitzustellen. |
|Architekturmuster | Standardsoftwarearchitekturen, die gängige Arten von Anwendungssystem unterstützen, dienen als Basis von Anwendungen. Siehe Kapitel 6, 11 und 17. |
|Aspektorientierte Software-Entwicklung | Gemeinsame Komponenten werden an verschiedenen Stellen in eine Anwendung eingewobenwenn das Programm kompiliert wird. |
|Komponentenbasierte Softwareentwicklung | Systeme werden entwickelt, indem Komponenten integriert werden (Sammlungen von Objekten), die den Komponentenmodellstandards entsprechen. Siehe Kapitel 16. |
|Konfigurierbare Anwendungssysteme | Domänenspezifische Systeme sind so konzipiert, dass sie auf die Bedürfnisse bestimmter Systemkunden konfiguriert werden können. |
|Design Patterns | Generische Abstraktionen, die anwendungsübergreifend auftreten, werden als Entwurfsmuster dargestellt, welche abstrakte und konkrete Objekte und Interaktionen zeigen. Siehe Kapitel 7. |
|ERP-Systeme | Große Systeme, die generische Geschäftsfunktionen und Regeln kapseln, werden für eine Organisation konfiguriert. |
|Legacy-Systemumhüllung | Legacy-Systeme (Kapitel 9) werden „umhüllt“, indem eine Menge von Interfaces definiert werden. So wird der Zugriff auf diese Legacy-Systeme ueber beschriebene Interfaces bereitgestellt. |
|Modellgetrieben Entwicklung | Software wird als Domänenmodelle und als implementierungsunabhaengige Modelle dargestellt. Aus diesen Modellen wird Code generiert. Siehe Kapitel 5. |
|Programmgeneratoren | Ein Generatorsystem bettet Wissen über eine Art von Anwendung ein und wird verwendet, um Systeme aus diesem Gebiet aus einem vom Benutzer bereitgestelltem Systemmodell zu generieren. |
|Programmbibliotheken | Klassen- und Funktionsbibliotheken, die häufig verwendete Abstraktionen implementieren, stehen zur Wiederverwendung zur Verfügung. |
|Serviceorientierte Systeme | Systeme werden durch die Verknüpfung gemeinsam genutzter Dienste entwickelt, die ggf. extern bereitgestellt werden. Siehe Kapitel 18. |
|Software-Produktlinien | Ein Anwendungstyp wird in einer gemeinsamen Architektur verallgemeinert, sodass dieser für verschiedene Kunden angepasst werden kann. |
|Systeme von Systemen | Zwei oder mehr verteilte Systeme werden integriert, um ein neues System zu erstellen. Siehe Kapitel 20. |

Im Folgenden werden die Hauptfaktoren beschrieben, welche beachtet werden sollten,
wenn die Wiederverwendbarkeit von Softeware geplant ist.

1. **Entwicklungszeitplan der Software** Wenn die Software schnell entwickelt werden soll, bietet es sich an, ganze Systeme statt einzelner Komponenten wieder zu verwenden. Es wird zwar nicht perfekt auf die Anforderungen passen, dennoch wird die Entwicklungszeit stark reduziert.
2. **Erwartete Lebensdauer der Software** Bei einer langen Lebensdauer sollte das Augenmerk auf die Wartbarkeit der Software gelegt werden. Bei solcher Software sollte auf gekaufte Komponenten externer Unternehmen verzichtet werden. Diese koennen beispielsweise den Support einstellen. Das Verwenden von Open-Source Systemen und Komponenten kann ermoeglichen, auf den Quellcode zugreifen zu koennen und eine Kopie von diesem zu speichern.
3. **Hintergrund, Fähigkeiten und Erfahrung des Entwicklungsteams**  Wiederverwendbare Technologien sind komplex und benoetigen Erfahrung in dem jeweiligen Bereich. Wiederverwendbare Technologien sollten dort eingesetzt werden, wo das Entwicklungsteam ueber Expertise verfuegt.
4. **Kritikalitaet der Software und ihre nicht funktionalen Anforderungen** Fuer ein kritisches System, welches durch einen externen Regulator zertifiziert werden muss, muessen eventuell Sicherheitsfaelle fuer das System aufgestellt werden (Siehe Kapitel 12). Dies ist schwer, falls der Quellcode nicht komplett einsehbar ist.
5. **Applikationsgebiet** In vielen Applikationsgebieten, wie z.B. in der Herstellung und in medizinischen Informationssystemen, existieren generische Produkte, welche nach Anpassung an lokale Situationen wiederverwendet werden koennen. Dies ist eine der effektivsten Ansaetze der Wiederverwendung von Software. Grundsaetzlich ist es meist guenstiger Systeme zu kaufen, statt sie selbst neu zu entwickeln.
6. **Platform, auf welcher das System ausgefuehrt wird** Viele generische Applikationen sind platformabhaengig (z.B. .NET). Somit koennen sie nur auf gleichen Platformen wiederverwendet werden.

Gundsaetzlich ist die Wiederverwendung von Software kein technisches Problem, sondern ein Problem des Managements. 
Manager moechten eventuell die Anforderungen nicht so anpassen, dass eine Wiederverwendung moeglich ist. Auch wenn die Risiken
einer neu implementierten Software hoeher sind, bevorzugen manche Manager eher die bekannte Risiken als die Risiken der
Wiederverwendung. Es koennte helfen, ein Wiederverwendungsprogramm aufzubauen, welches sich auf die Erstellung von
wiederverwendbaren Teilen und Prozessen fuers Erleichtern der Wiederverwendung konzentriert (Jacobsen, Griss, and Jonsson 1997).

## Application frameworks

Viele Entwickler sagen, dass der groesste Vorteil von Obkekorientierten Programmiersprachen die Wiederverwendung von Objekten in
anderen Systemen sei. Dennoch hat sich herausgestellt, dass die meisten Objekte zu feingranular sind und nur auf eine bestimmte 
Applikation angepasst sind. Meist dauert es laenger, vorhanfene Objekte zu verstehen und anzupassen, als diese neu zu implementieren.
Mittlerweile ist klar, dass die objektorientierte Wiederverwendung in einem objektorientierten Entwicklungsprozess am besten durch
grobkoernige Abstraktionen, die Frameworks genannt werden, unterstuetzt wird.

Ein Framework ist eine generische Struktur welche fuer ein spezifisches Subsystem oder eine Applikation erweitert werden kann. 
Schmidt et al. (Schmidt et al. 2004) definiert ein Framework als 

"einn integrierten Satz von Softwareartefakten (wie Klassen, Objekte und Komponenten), die
zusammenarbeiten, um eine wiederverwendbare Architektur für eine Familie verwandter Anwendungen bereitzustellen."

Frameworks bieten Support fuer Features, die sehr wahrscheinlich in Applikationen aehnlicher Art verwendet werden.
Ein User-Interface Framework beispielsweise unterstuetzt das Event-Handling und beinhaltet einzelne Widgets fuer das Erstellen
von Anzeigen. Der Entwickler spezialisiert diese Widgets, indem spezifische Funktionalitaet hinzugefuegt wird. So kann 
ein Entwickler ein Layout fuer ein Display zusammenbauen, welches den Anforderungen der Applikation entspricht.

Frameworks liefern eine skelettartige Architektur und ermoeglichen die Wiederverwendung spezifischer Klassen im System. 
Die Architektur wird durch Objektklassen und deren Interaktionen implementiert. Dabei koennen die Klassen wiederverwendet
oder erweitert werden. Frameworks bedienen sich dabei an Konzepten wie Vererbung und Polymorphie.

Frameworks sind als Ansammlung von konkreten und abstrakten Objektklassen in einer objektorientierten Sprache implementiert.
Aus diesem Grund sind Frameworks spachabhaengig. Frameworks sind in OOP-Sprachen wie Java, C++ und dynamischen Sprachen wie 
Ruby und Python verfuegbar. Frameworks keonnen selber Frameworks beinhalten. Sie koennen fuer komplette Applikationen oder Teile
einer Applikation (z. B. GUI) verwendet werden.

Die meisten Applikationsframeworks sind "Web Application Frameworks" (WAFs). Sie werden zur Erstellung von dynamischen Webseiten
verwendet und basieren dabei meist auf dem "Model-View-Controller (MVC) Pattern" (BILD 15.5). Das Pattern wurde 1980 als Ansatz
von GUI Design dargestellt, welches mehrere Praesentationen von Objekten und verschiedenen Stilen der Interaktion mit diesen
Praesentationen ermoeglicht. Grundsaetzlich wird der Zustand einer Praesentation seperiert, sodass dieser Zustand von jeder
Praesentation aktualisiert werden kann. Beim Veraendern von Daten durch eine Praesentation wird das System Modell veraendert und
die Controller fuer die jeweiligen Anzeigen aktualisiert die Praesentation.

Frameworks verwenden sehr oft Design Pattern (siehe Kapitel 7). MVC-Frameworks verwenden beispielsweise das Observer-Pattern, das 
Strategy-Composite-Pattern und weitere. Pattern werden verwendet um die notwendige Erweitbarkeit von Frameworks zu gewaehrleisten.
Ohne Programmierpattern waeren Frameworks impraktikabel.

Frameworks bieten grundsaetzlich verschiedene Funktionalitaeten. Web-Applikations Frameworks liefern Komponenten und Klassen, welche
folgendes unterstuetzen:

1. **Sicherheit** WAFs helfen bei der Authentifizierung von Benutzern und bei der Zugriffskontrolle.
2. **Dynamische Webseiten** Klassen helfen dabei Webseitenvorlagen zu definieren und diese dynamisch mit Daten aus der Datanbanlnk zu fuellen.
3. **Datenbankintegration** Frameworks stellen eventuell Klassen zur Verfuegung, welche eine abstrakte Schnittstelle zu verschiedenen Datenbanken bereitsellen.
4. **Sitzungsverwaltung** Klassen, welche Sitzungen erstellen und verwalten, sind oft Teil einer WAF.
5. **Benutzerinteraktionen** Web Frameworks liefern Supprt fuer AJAX (Holdener 2008) und/oder HTML5 (Sarris 2013) zur Erstellung interaktiver Webseiten. Darunter koennen sich Klassen zur Erstellung geraeteunabhaeniger Interfaces befinden, welche sich automatisch an Mobiltelefone und Tablets anpassen.

Bei der Systemimplementierung mit Frameworks, muessen konkrete Klassen erstellt werden, welche Operationen von abstrakten Klassen
des Frameworks erben. Zusaetzlich muessen so genannte Callback-Funktionen definiert werden, welche aufgerufen werden, wenn ein
Event vom Framework erkannt wird. Die Frameworksobjekte sind dabei fuer die Kontrolle zustaendig, nicht die applikationsspezifischen
Objekte. Dies wird "Inversion of Control" (Schmidt, Gokhale, and Natarajan 2004) genannt.

Als Reaktion auf Events von der Benutzeroberflaeche oder von Datenbankframework-Objekten werden so genannte "Hook-Methoden"
aufgerufen. Diese werden mit vom Benutzer bereitgestellter Funktionalitaet verknuepft. Diese Funktionalitaet entscheidet,
wie die Applikation bei einem Event reagieren soll. 

BILD 15.6

Beispielsweise stellt ein Framework eine Methode zum handhaben von Mausklicken bereit. Diese Methode ist die "Hook-Methode".
Sie muss konfiguriert werden, um die richtigen Applikationsmethoden aufzurufen, welche das Klicken handhaben.

Fayad und Schmidt (Fayad und Schmidt 1997) diskutieren drei weitere Klassen von Frameworks:

1. **Systeminfrastruktur-Frameworks** unterstuetzen die Entwicklung von Systeminfrastrukturen wie beispielsweise Kommunikationen, Benutzerschnittstellen und Compiler.

2. **Frameworks für die Middleware-Integration** bestehen aus einer Menge an Standards und damit verbundenen Objektklassen, welche den Kommunikation und den Datenaustausch der Komponenten unterstuetzt. Beispiele sind Microsoft's .NET und Enterprise Java Beans (EJB)
3. **Frameworks für Unternehmensanwendungen** behandeln konkrete Anwendungensgebiete wie Telekommunikations- und Finanzsysteme (Baumer et al. 1997). Diese beinhalten Wissen ueber Andwendungsbereiche und unterstuetzen die Entwicklung von Endbenutzeranwendungen. Heute sind sie nicht verbreitet und wurden weitgehend durch Software-Produktlinien ersetzt.

Applikationen, welche mit Frameworks implementiert sind, koennen die Basis fuer weitere Wiederverwendung darstellen. Konzepte wie 
Software-Produktlinien und Applikationsfamilien verwenden unter anderem Frameworks. Sie erleichtern beispielsweise das Veraendern
von "Familienmitgliedern" um eine neue Instanz eines Systems zu erstellen.

Frameworks sind sehr effektiv im Bezug auf Wiederverwendung, dennoch gibt es auch einige Nachteile. Der Einbau von Frameworks ist
aufgrund der Komplexitaet dieser teuer. Oft kann es Monate dauern, die Funktionalitaet zu erlernen. Es ist ebenfalls schwierig
und teuer, verschiedene Frameworks gegeneinander abzuwiegen, um das Framework zu finden, welches fuer den Anwendungsfall am
geeignetsten ist. Zusaetzlich kann das Debuggen mit Framework schwierig sein, da man nicht zwingend weiss, wie die Frameworkmethoden
untereinander interagieren. Bestimmte Debugging-Tools koennen dabei jedoch Abhilfe schaffen.

## Software-Produktlinien

Bei aehnlichen, aber nicht gleichen Systemen eines Unternehmens, bietet sich die Wiederverwendung durch Software-Produktlinien an.
Sie werden oft bei Hardware-Kontrollsystemen oder in gebietspezifischen Applikationen in der Logistik oder im medizinischen Feld 
verwendet. Ein Druckerhersteller zum Beispiel kann eine Software-Produktlinie aufbauen. Die Software ist oft sehr aehnlich, aber nie
ganz gleich. Es wird ein Kernprodukt (Produktlinie) erstellt und anschliessend an jeden Druckertypen angepasst.

Software-Produktlinien sind eine Ansammlung von Applikationen mit aehnlicher Architektur und gemeinsamen Komponenten. Jede
Applikation ist dabei fuer die kundesspezifischen Anforderungen angepasst. Das Kernprodukt (engl.: core product) kann
konfiguriert und so an Kundenwuensche oder bestimmtes Equipment angepasst werden. Dazu koenn Komponenten konfiguriert, zusaetliche
Komponenten entwickelt und einige Komponenten veraendert werden.

Durch die Verwendung von Produktlinien kann eine grosse Menge an Applikationscode wiederverwendet werden. Das Testen kann ebenfalls
vereinfacht werden. Test fuer grosse Teile der Applikation koennen eventuell wiederverwendet werden. So wird die Entwicklungszeit
reduziert. Zusaetzlich erlernen Entwickler das Applikationsgebiet mit der Produktlinie, koennen sich so spezialisieren und
effizienter neue Applikationen entwickeln.

Meist entstehen Produklinien aus vorhandener Software. Ein Produkt wurde entwickelt und ein aehnliches neues Produkt soll fuer
einen Kunden erstellt werden. Es koennen also Teile des ersten Produkts wiederverwendet werden. Bei folgenden aehnlichen Produkten
wird der gleiche Prozess verwendet und ein vorhandenes Produkt teilweise wiederverwendet. Im Laufe der Zeit wird es immer 
schwieriger neue Versionen zu erstellen und es muss entschieden werden, eine Produktlinie aufzubauen. Dazu gehoert das 
Feststellen von gemeinsamer Funktionalitaet und die Entwicklung einer Basisapplikation.

(BILD 15.7)

Basisapplikationen sind so entworfen, dass Wiederverwendung und die Neukonfiguration erleichtert werden.
Eine Basisapplikation besteht aus folgenden Teilen:

1. Kernkomponenten, die Infrastrukturunterstuetzung bieten. Diese werden nicht bei der Erstellung einer neuen Instanz der Produktlinie veraendert.
2. Konfigurierbare Komponenten, welche fuer bestimmte Anforderungen angepasst werden koennen. Diese Komponenten koennen teils auch ohne das Veraendern von Code mit Hilfe einer Konfigurationssprache angepasst werden.
3. Spezialisierte, gebietspezifische Komponenten werden entweder teils oder komplett bei der Erstellung einer neuen Instanz der Produktlinie ausgetauscht.

Applikations Frameworks und Software Produktlinien haben einiges gemeinsam. Beide unterstuetzen eine gemeinsame Architektur und Komponenten. Zusaetzlich wird neue Entwicklungsaufwand benoetigt,
um eine neue Version eines Systems zu erstellen. Die Unterschiede werden im Folgenden dargestellt:

1. Applikations Frameworks bauen auf objektorientierte Features wie Vererbung und Polimorphismus auf, um die Frameworks zu erweitern. Dabei wird der Code des Frameworks nicht veraendert und die moeglichen Modifizierungen sind limitiert. Software Produktlinien hingegen muessen nicht mit einem objektorientierten Ansatz inplementiert werden. Komponenten koennen veraendert, geloescht und neu geschrieben werden. 
2. Die meisten Frameworks bieten eine generelle Unterstützung und nicht eine gebietspezifische Unterstützung (z.B. Framework fuer webbasierte Anwendungen). Eine Software Produktlinie ist in der Regel in einem bestimmten Anwendungsgebiet angesiedelt (z.B. webbasierte Anwendung fuer das Verwalten von Krankenakten). 
3. Software Produktlinien sind meist Steueranwendungen fuer bestimmtes Equipment (z.B. Drucker). Das bedeutet, dass Produktlinien Hardwareschnittstellen unterstuetzen muss. Applikations Frameworks hingegen sind softwareorientiert und besitzen grundsaetzlich keine Komponenten zur Kommunikation mit Hardware.
4. Software Produktlinien bestehen aus einer Familie verwandter Anwendungen, die Eigentum von derselben Organisation sind. Wenn eine neue Anwendung erstellt wird, ist der Ausgangspunkt oft das engste Mitglied der Anwendungsfamilie und nicht die generische Kernanwendung.

Bei der Erstellung einer Produktlinie in einer objektorientierten Sprache, kann ein Framework als Basis verwendet werden.
Die Kernanwendung besteht dann aus der Erweiterung des Frameworks mit den gebietspezifischen Komponenten. In der zweiten Phase 
wird anschliessend das System fuer die verschiedenen Kunden verfeinert. Ein webbasiertes Framework kann beispielsweise als Kern
fuer eine webbasierte Beratungsstelle verwendet werden. Diese Produktlinie kann dann auf verschiedene Arten von Beratungsstellen
spezialisiert werden.

Die Architektur einer Produktlinie spiegelt oft einen allgemeinen, anwendungsspezifischen Architekturstil oder ein Muster wieder.
Eine Produktlinie koennte zum Beispiel die Fahrzeugaufteilung fuer Rettungsdienste abwickeln. Die Benutzter des Systems 
muessen Telefonate annehmen, passende Fahrzeuge finden und das passende Fahrzeug zum Vorfall losschicken koennen. Ein Hersteller
koennte dieses System also an Polizei, Feuerwehr und Krankenhaeuser verkaufen. Die Fahrzeugaufteilung ist dabei ein gutes Beispiel
fuer eine allgemeine Ressourcenzuweisungs- und Management-Architektur. 

BILD 15.8

Solche Ressourcenmanagementsysteme verwenden eine Datenbank mit verfuegbaren Ressourcen und Komponenten, die die Zuteilungspolitik
der Ressourcen beinhaltet. Diese Zuteilungspolitik wird vom Unternehmen festgelegt. Benutzer interagieren mit dem System, fragen
Ressourcen an, geben Ressourcen frei und koennen Fragen stellen bezueglich Ressourcen und deren Verfuegbarkeit.

Fuer ein Fahrzeugaufteilungssystem koennen folgende Komponenten implementiert sein.

BILD 15.9 

Die Komponenten auf jeder Ebene sind im Folgenden weiter erlaeutert:

1. Auf der Interaktionsebene stellen Komponenten eine Bedieneranzeigeschnittstelle bereit und eine Schnittstelle zu den verwendeten Kommunikationssystemen.
2. Auf der E/A Ebene (Ebene 2) uebernehmen Komponenten die Benutzerautentifizierung, das Generieren von Berichten ueber Vorfaelle und abgefertigte Fahrzeuge. Des Weiteren werden Kartenausgabe und Routenplanung unterstuetzt, sowie Mechanismes fuer Operatoren zur Abfrage der Systemdatenbank bereitgestellt.
3. Auf der Ressourcen-Management-Ebene (Ebene 3) ermoeglichen Komponenten, Fahrzeuge zu lokalisieren, den Status von Fahrzeugen und Ausruestung zu aktualisieren und Imformationen zu Vorfaellen zu protokollieren.
4. Auf der Datenbankebene gibt es seperate Datenbanken fuer Fahrzeuge, Ausruestung und Karten.

Um eine neue Instanz dieses Systems zu erstellen, muessen eventuell Komponenten veraendert werden. Die Polizei beispielsweise 
besitzt viele, jedoch wenig verschiedene Autos. Die Feuerwehr hingegen besitzt wenige, dafuer aber sehr verschiedene und
spezialisierte Fahrzeuge. Eine Anpassung der Datenbankstruktur ist notwendig.

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

Bei der Erstellung neuer Mitglieder einer Produklinie, muss eventuell ein Kompromiss zwischen Wiederverwenden und den Anforderungen
des Kunden gefunden werden. Je detaillierter die Anforderungen, desto geringer ist die Wahrscheinlichkeit, dass aehnliche Systeme
bereits existieren. Wenn ein Kunde jedoch flexibel sein kann und die Systemmodifizierungen die benoetigt sind limitiert, koennen
Systeme schneller und guenstiger ausgeliefert werden.

Software-Produktlinien sind zum Rekonfigurieren entwickelt. Komponenten koennen hinzugefuegt oder geloescht, Parameter angepasst,
Einschraenkungen definiert und Wissen ueber Geschaeftsprozesse eingebaut werden. Die Konfiguration kann in verschiedenen 
Stufen des Entwicklungsprozesses stattfinden:

1. **Konfiguration zur Entwurfszeit** Die Organisation, die die Software entwickelt, modifiziert einen gemeinsamen Produktlinienkern durch Entwicklung, Auswahl oder Anpassung von Komponenten, um ein neues System für einen Kunden zu erstellen.
2. **Konfiguration zur Auslieferungszeit** Ein generisches System wird fuer die Konfiguration durch den Kunden entworfen. Kenntnisse der kundenspezifischen Anforderungen und der Betriebsumgebung des Systems sind in die vom generischen System verwendeten Konfigurationsdaten eingebettet.

Wenn ein System zur Entwurfszeit konfiguriert wird, startet der Hersteller mit einem generischen oder einem vorhandenem System.
Das System wird so modifiziert und angepasst, dass die Kundenwuensche erfuellt werden. Meist bedeutet dies, dass der Programmcode 
veraendert und erweitert werden muss. Dies bietet eine hoehere Flexibilitaet als bei der Konfiguration zur Auslieferungszeit.
Die Konfiguration zur Entwurfszeit wird verwendet, wenn es nicht moeglich ist, die bestehenden Konfigurationseinrichtungen zu
verwenden. Ueber laengere Zeit werden Produktlinienmitglieder mit gleicher Funktionalitaet erstellt. Man kann entscheiden,
ob die Kernanwendung diese Funktionalitaet eingebaut bekommen soll. Anschliessend kann man die Funktionalitaet zur 
Auslieferungszeit konfigurierbar machen.
Bei der Konfiguration eines Systems zur Auslieferungszeit werden Konfigurationstools verwendet, um eine spezifische 
Systemkonfiguration zu erhalten. Diese Konfiguration wird in einer Datenbank oder als Ansammlung von Konfigurationsdateien 
gespeichert. Das System holt sich die Informationen aus der Datenbank.

BILD 15.11

Mehrere Ebenen der Konfiguration zur Auslieferungszeit werden in einem System bereitgestellt:

1. **Komponentenauswahl**, in welcher passende Module fuer das System ausgesucht werden. Beispielsweise kann in einem System fuer die Speicherung von Patientendaten eine Komponente fuer das Verwalten von Bildern hinzugefuegt werden. So koennen medizinische Bilder mit der Patientenakte verknuepft werden.
2. **Workflow- und Regeldefinition**, in welcher Workflows (wie Informationen verarbeitet werden) und Validierungsregeln (fuer Benutzereingaben und vom System generierte Daten) definiert werden.
3. **Parameterdefinition**, in welcher bestimmte Werte fuer systemspezifische Parameter spezifiziert werden. Zum Beispiel kann die maximale Laenge von Eingabefeldern oder die Characteristiken bestimmter Hardware definiert werden.

Die Konfiguration zur Auslieferungszeit kann sehr komplex sein. Bei grossen Systemen kann es mehrere Monate dauern, das System
zu konfigurieren und zu testen. Grosse konfigurierbare Systeme koennen den Konfigurationsprozess mit Software-Tools, wie zum
Beispiel Planungstools, unterstuetzen.

## Wiederverwendung Applikationssysteme

Applikationssysteme sind Softewaresysteme, welche an die Anforderungen des Kunden angepasst werden koennen, ohne den Programmcode
aendern zu muessen. Sie werden fuer einen generellen Markt und nicht speziell fuer einzelne Kunden entwickelt. Sie werden auch
"Commercial Off-the Shelf Systeme" (COTS). Da der Begriff meist in Militaersystemen verwendet wird, werden sie im Folgenden
weiterhing Applikationsysteme genannt.

Jede Desktop-Software fuer Unternehmen und viele serverbasierte Systeme sind Applikationssysteme. Sie koennen in verschiedenen
Umgebungen und als Teil verschiedener Systeme wiederverwendet werden. Torchiano and Morisio (Torchiano and Morisio 2004) fanden
heraus, dass viele Open-Source Produkte ohne Veraenderung verwendet werden und oft der Programmcode nicht mal angesehen wird.

Applikationssysteme besitzen eingebaute Konfigurationsmechanismen, um die Funktionalitaet des Systems den Kundenwuenschen 
entsprechend anzupassen. Ein Krankenaktensystem benoetigt zum Beispiel verschiedene Eingabe- und Ausgabeformen abhaengig vom
Patienten. Andere Konfigurationsfeatures erlauben eventuell Plugins zum Erweitern der Funktionalitaet.

Dieser Ansatz zur Wiederverwendung von Software wird seit Ende der 1990er Jahre von großen Unternehmen sehr häufig übernommen, da er erhebliche Vorteile gegenüber der kundenspezifischen Softwareentwicklung bietet:

1. Schnellere Herausbringen von zuverlaessigen Systemen ist moeglich.
2. Es ist moeglich zu sehen, welche Funktionalitaet von der Applikation gegeben ist. Das Einschaetzen ob die Software passt wird vereinfacht. Andere Unternehmen verwenden eventuell besagte Software und Erfahrungen mit dem System liegen vor.
3. Manche Entwicklungsrisiken beim Verwenden vorhandener Software minimiert.
4. Unternehmen koennen sich auf Kernaktivitaeten konzentrieren, ohne viele Ressourcen fuer die Entwicklung von IT Systemen zu benoetigen.
5. Wenn sich Opeationsplatformen veraendern ist das updaten vereinfacht, da die Verantwortung dafuer bei dem Applikationssystem-Anbieter liegt.

Dennoch bringt dieser Ansatz der Wiederverwendung Probleme:

1. Anforderungen muessen angepasst werden, um die Funktionalitaet und die Arbeitsweise der Off-the-shelf Applikationssystem zu reflektieren. Das kann zu stoerenden Aenderungen in vorhandenen Unternehmensprozessen fuehren.
2. Das Applikationssystem kann auf Annahmen basieren, welche nicht geaendert werden koennen. Der Kunde muss also sein Geschaeft so aendern, um diese Annahmen zu reflektieren.
3. Das passende Applikationssytem auszusuchen kann ein schwieriger Prozess sein, da diese oft nicht gut dokumentiert sind. Bei falschen Entscheidungen kann es unmoeglich sein, das neue System nach den Anforderungen umzusetzen.
4. Es kann einen Mangel an lokaler Expertise zur Systementwicklung geben. Der Kunde muss sich also auf den Hersteller des Applikationssystems oder auf externe Berater verlassen. Die Beratung kann dabei zum Verkaufen von weiteren Produkten oder Dienstleistungen verwendet werden, ohne passend auf die Kundenbeduerfnisse einzugehen.
5. Der Systemanbieter steuert die Systemunterstützung und -entwicklung. Dieser kann sein Geschaeft aufgeben, uebernommen werden, oder Aenderungen vornehmen, die dem Kunden Schwierigkeiten bereiten.

Applikationssysteme koennen als individuelle Systeme oder als Kombination, in welcher zwei oder mehr Systeme integriert werden, 
verwendet werden. Individuelle Systeme bestehen aus einer generischen Applikation eines Herstellers und werden fuer die 
Anforderungen eines Kunden konfiguriert. Integrierte Systeme werden aus der Funktionalitaet mehrerer individuellen Systeme 
zusammengesetzt. Diese Systeme sind oft von verschiedenen Herstellern. In folgender Tabelle werden die beiden dargestellt.

| Konfigurierbare Applikationssysteme          | Integrierte Applikationssysteme       |
|:----------:|:----------:|
|Einzelnes Produkt, welches die gewuenschte Funktionalitaet liefert | Mehrere verschiedene Applikationssysteme welche integriert werden, um eine angepasst Funktionalitaet zu liefern|
|Basierend auf einer generischen Lösung und standardisierten Prozessen | Flexible Lösungen können für Kundenprozesse entwickelt werden|
|Der Entwicklungsfokus liegt auf der Systemkonfiguration | Der Entwicklungsfokus liegt auf der Systemintegration|
|Der Systemanbieter ist für die Wartung verantwortlich | Der Systembesitzer ist für die Wartung verantwortlich|
|Der Systemanbieter stellt die Plattform für das System bereit | Der Systembesitzer stellt die Plattform für das System bereit|


### Konfigurierbare Applikationssysteme

Konfigurierbare Applikationssysteme sind genereische Applikationssysteme, welche fuer bestimmte Unternehmenstypen,
Unternehmensaktivitaeten oder manchmal fuer einen ganzen Wirtschaftsbetrieb konstruiert werden. Ein System fuer Zahnaerzte kann 
zum Beispiel Termine, Erinnerungen, Patientenakten, Patientenrueckrufe und Rechnungen handhaben. In groesserem Umfang kann
ein Enterprise Resource Planning (ERP) System die Herstellung, den Einlauf und das Kundenbeziehungsmanagement in grossen 
Unternehmen unterstuetzen.

Gebietspezifische Applikationssysteme liefern Funktionalitaet, die von einer Vielzahl an Kunden benoetigt wird. Dennoch werden
ebenfalls Annahmen getroffen, welche in bestimmten Situationen Probleme bereiten koennen. Ein System zum Einschreiben von 
Studenten an einer Universitaet beispielsweise bedient sich der Annahme, dass Studenten sich fuer einen Abschluss an einer 
Universitaet einschreiben koennen. Bei einer Kollaberatiion zweier Universitaeten werden gemeinsame Abschluesse angeboten, und
koennen so im System nicht dargestellt werden.

ERP-Systeme (beispielsweise produziert von SAP oder Oracle) sind grosse intergrierte Systeme zum unterstuetzen von Bestellungen, 
Rechnungsstellung, Bestandsverwaltung und Fertigungsplanung (Monk and Wagner 2013). Im Konfigurationsprozess dieser Systeme muessen
detailierte Informationen ueber das Unternehmen des Kunden und deren Unternehmensprozesse gesammelt und anschliessend in einer 
Kofigurationsdatenbank gespeichert werden. Dabei ist eine Expertise ueber die Konfigurationsnotation und -tools notwendig. Meist
wird der Prozess der Konfigurierung von Beratern, die mit dem Systemkunden zusammenarbeiten ausgefuerht.

Generische ERP-Systeme bestehen aus mehreren Modulen. Im Konfigurationsprozess muessen die Module ausgewaehlt und konfiguriert,
Unternehmensprozesse und -regeln definiert und die Struktur und Organisierung der Systemdatenbank beschlossen werden. Das folgende
Bild zeigt die Architektur eines ERP-Systems.

BILD 15.13
  
Die Hauptmerkmale dieser Architektur sind wie folgt:

1. Eine Menge von Modulen, um verschieden Unternehmensfunktionen zu unterstuetzen. Diese sind grosse Module, die ganze Abteilungen oder Unternehmenbereiche unterstuetzen koennen. Dargestellt ist ein Modul zum Unterstuetzen des Einkaufs; ein Modul fuer das Lieferketten Management; ein Logistikmodul fuer die Lieferung von Waren; und ein Kundenbeziehungsmanagement (engl.: customer relationship management (CRM)).
2. Eine definierte Menge an Unternehmensprozess-Modellen, jedem Modul zugeordnet, welche sich auf die Aktivitaeten in diesem Modul beziehen. Zum Beispiel wird im Bestellungsprozess-Modell festegelegt, wie Bestellungen erstellt und angenommen werden. Dies spezifiziert die Rollen und Aktivitaeten im Zusammenhang mit der Auftragserstellung.
3. Eine gemeinsame Datenbank, welche Informationen ueber die Unternehmensfunktionen pflegt. So ist es nicht notwendig Informationen, wie zum Beispiel Kundendaten, an verschiedenen Orten des Unternehmens zu speichern.
4. Eine Menge an Unternehmensregeln, die fuer alle Daten in der Datenbank gelten. Bei der Eingabe von Daten, muessen die Regeln eine Konsistenz innerhalb der Datenbank erhalten. Beispielsweise kann eine Geschaeftsregel verlangen, dass alle Spesenabrechnungen von einer ranglich hoeheren Person genehmigt werden muessen als die Person, die den Anspruch geltend macht.

ERP-Systeme werden in allen grossen Unternehmen fuer einige oder alle ihrer Funktionen verwendet. Sie stellen so eine viel
benutzte Form der Wiederverwendung dar. Eine Limitierung ist es, dass die Funktionalitaet des Systems des Kunden an die
Funktionalitaet des ERP-Systems gebunden ist. Falls eine weitere Funktionalitaet benoetigt wird, muss ein seperates 
Addon implementiert und eingebaut werden.

Unternehmensprozesse und -operationen muessen in der ERP-System eigenen Konfigurationssprache definiert werden. Bei der
Erstellung koennen Nichtuebereinstimmungen zwischen den Annahmen des Systemanbieters und dem Kunden entstehen bezueglich
der Konzepte und Prozesse im Unternehmen entstehen. Eine grosse Abweichung fuert dazu, dass das ERP-System nicht den
Anforderunged des Kunden entspricht.

ERP Systeme benoetigen grundsaetzlich eine umfangreiche Konfiguration, um an die Anforderungen des Kunden angepasst zu werden. Diese Konfiguration enthealt:

1. Auswahl der benötigten Funktionaliaet aus dem System, z. B. durch das Entscheiden, welche Module enthalten sein sollen.
2. Erstellen eines Datenmodells, das definiert, wie die Daten der Organisation in der Systemdatenbank strukturiert werden.
3. Definieren von Geschäftsregeln, die für diese Daten gelten.
4. Definition der erwarteten Interaktionen mit externen Systemen.
5. Gestaltung der Eingabeformulare und der vom System generierten Ausgabeberichte.
6. Entwerfen neuer Geschäftsprozesse, die dem zugrunde liegenden Prozessmodell, welches vom System unterstuetzt wird, entsprechen.
7. Festlegen von Parametern, die definieren, wie das System auf seiner Plattform bereitgestellt wird.

Nach der Konfiguration, kann das System getestet werden. Das Testen eines Systems, welches konfiguriert und nicht in einer konventionellen Programmiersprache entwickelt wird, stellt ein Problem dar. Es gibt zwei Gruende hierfuer:

1. Testautomatisierung ist schwierig oder sogar unmoeglich. Möglicherweise gibt es keinen einfachen Zugang zu einer API, die zum Testen von Frameworks wie JUnit verwendet werden kann. Die Systeme muessen per Hand getestet werden, indem manuell Testdaten eingefuegt werden. Desweiteren sind die Systeme informell spezifiziert. Testfaelle ohne die Hilfe vom Endbenutzer zu definieren, erweist sich als schwierig.
2. Systemfehler sind oft subtil und spezifisch fuer Geschaeftsprozesse. Die meisten Fehler passieren, weil es Missverstaendnisse zwischen denen, die das System konfigurieren, und den Benutzerinteressenten gibt. Systemtester, ohne detailierte Kenntnisse der Endbenutzerprozesse koennen solche Fehler nicht erkennen.

### Integrierte Applikationssysteme

Integrierte Applikationssysteme beinhalten zwei oder mehr Applikationssysteme oder manchmal auch Legacy-Systeme.
Der Ansatz wird verwendet, wenn kein einzelnes Applikationssystem allen Anforderungen entspricht oder wenn ein neues
Applikationssystem mit eine System, welche bereits verwendet wird, integriert werden soll. Die Interaktion zwischen den Systemen
ist durch APIs oder durch Serviceschnittstellen moeglich. Alternativ kann die Ausgabe des einen Systems mit der Eingabe des
anderen Systems verknuepft oder die Datenbank, welche von den Applikatiionen verwendet wird, angepasst werden.

Um ein integriertes Applikationssystem zu entwickeln, muessen eine Menge an Designentscheidungen getroffen werden:

1. **Welche individuelle Applikation liefert die am besten geeignete Funktion?** Grundsaetzlich gibt es mehrere verfuegbare Produkte, welche in verschiedenen Wegen verknuepft werden koennen. Liegt nicht viel Erfahrung mit einem Applikationssystem vor, so kann es schwierig sein, sich fuer ein Produkt zu entscheiden.
2. **wie werden Daten ausgetauscht?** Verschiedene Systeme benutzen eigene Strukturen und Datenttypen. Eventuell muessen Adapter implementiert werden, um zwischen den Repraesentationen konvertieren zu koennen. 
3. **Welche Features werden vom Produkt letzendlich verwendet?** Applikationssysteme liefern eventuell mehr Funktionalitaet als benoetigt wird. Es muss entschieden werden, welches Feature aus welchem Produkt sich am besten fuer die Anforderungen anbietet. Falls moeglich, sollten nicht benoetigte Features ebenfalls deaktiviert werden, um den Normalsystembetrieb nicht zu stoeren.

Das folgende Beispiel zeigt die integrierung von Systemen. Ein grosses Unternehmen moechte ein Beschaffungssystem einbauen,
welches den Angestellten das Bestellen von ihrem Schreibtisch aus ermoeglicht. Es wird sich dabei eine jaehrliche Einsparung von
5 Millionen Dollar erhofft. Durch das Zentralisieren des Einkaufs kann garantiert werden, dass immer bei Lieferanten bestellt wird,
die die besten Preise anbieten. Zusaetzlich sollte die notwendige Administration bei dem Bestellungsvorgang reduziert werden.

Das aktuelle manuelle System besteht daraus, die verfuegbare Ware auszuwaehlen, die Bestellung zu erstellen, diese genehmigen zu
lassen, die Bestellung dem Haendler zu schicken, die Ware zu erhalten und anschliessend die Bestaetigung, dass eine Zahlung 
erfolgen soll, zu geben.

Das Unternehmen hat ein altes Bestellsystem, welches von einer zentralen Beschaffung verwendet wird. Diese
Auftragsabwicklungssoftware ist in die existierenden Rechnungsstellen- und Liefersysteme eingebaut. Fuer das neue System, wird
das alte System in eine webbasierte E-Commerce-Platform und ein E-Mail-System, welches die Kommunikation mit den Benutzern
abwickelt, eingebaut. Die Struktur wird in folgender Abbildung dargestellt. 

BILD 15.14

Durch das integrieren von existierenden Applikationssystemen koennen Monate oder sogar Jahre Entwicklungszeit eingespart werden.
Das System aus dem Beispiel wurde in neun Monaten eingefuehrt, wobei vorher geschaetzt wurde, dass es drei Jahre dauer koennte,
ein eigenes System zu entwickeln, welches mit dem alten System verknuepft werden kann.

Die Applikationssytem-Integration kann mit einem serviceorientierten Ansatz vereinfacht werden. Dies bedeutet, dass der 
Zugriff auf Funktionalitaet des Applikationssystems durch Anbieten von Standard-Serviceschnittstellen ermoeglicht wird. Fuer 
jede diskrete Einheit der Funktionalitaet wird ein Service erstellt. Dazu kann ein Wrapper implementiert werden, die die
Applikation versteckt, aber extern sichtbare Services anbietet. Dies kann sehr gut bei alte Systemen gemacht werden, welche in
ein neues System integriert werden soll.

BILD 15.15

Das Integieren von Applikationssytemen ist das gleiche wie das Integrieren jeder anderer Komponente auch. Es muss die 
Systemschnittstelle, ueber die kommuniziert wird, verstanden werden. Es muessen Anforderungen gegen eine schnelle Entwicklung
und Wiederverwendung abgewogen werden. Und es muss eine Systemarchitektur entworfen werden, welche es ermoeglicht, dass die 
Applikationssysteme miteinander arbeiten koennen.

Die Tatsache, dass diese Produkte in der Regel eigenständige große Systeme sind und
oft als separate eigenständige Systeme verkauft werden, bringt zusätzliche Probleme mit sich. Böhm
und Abts (Boehm und Abts 1999) heben vier wichtige Systemintegrationsprobleme hervor:

1. **Mangelnde Kontrolle über Funktionalität und Leistung** Auch wenn eine Schnittstelle eines Produkts vielversprechend aussieht, weiss man nicht, ob das System nicht vielleicht schlecht implementiert ist, oder schlecht abschneidet. Das Produkt hat eventuell versteckte Operationen, welche bei der Benutzung in bestimmten Situationen stoeren koennen. Diese Probleme zu beheben kann sehr wichtig fuer den Systemintegrator sein, jedoch von weniger Bedeutung fuer den Systemanbieter selbst. Benutzer muessen so eventuell Problemungehungen finden, wenn das System wiederverwendet werden soll.
2. **Probleme mit der Systeminteroperabilität** Es ist schwierig individuelle Systeme miteinander arbeiten zu lassen, da in beiden Systemen Annahmen getroffen wurden, wie diese verwendet werden. Garlan et al. (Garlan, Allen, and Ockerbloom 1995), berichtet von einer Integration von vier Systemen. Drei Systeme waren eventbasiert, benutzten jedoch verschiedene Modelle von Events. Die Integration dauerte zwei Jahre statt die geschaetzten sechs Monate. Torchiano and Morisio (Torchiano and Morisio 2004) fanden heraus, dass das Nichteinhalten von Standards die Integrierung erschwert.
3. **No control over system evolution** Systemanbieter koennen alleine ueber Aenderungen des Systems entscheiden. Bei PC Produkten heisst dies, dass oft neue Versionen veroeffentlicht werden, welche eventuell nicht mit alten Versionen kompatibel sind. Neue Versionen haben eventuell neue ungewollte Funktionalitaeten und alte Versionen koennen nicht mehr verfuegbar und unterstuetzt werden.
4. **Unterstützung durch Systemanbieter** Anbieter bieten ganz unterschiedlich viel Support fuer ihre Produkte. Wenn Probleme auftreten ist die Unterstuetzung durch den Systemanbieter notwendig, da Kunden keinen Zugriff auf Programmcode oder detaillierte Dokumentation haben. Der sich veraendernde Markt und ekonomische Umstaende koennen dazu fuehren, dass der Systemanbieter nicht die Unterstuetzung liefern kann, die der Kunde benoetigt. Ein Produkt kann zum Beispiel aus dem Sortiment genommen werden, weil es nur eine begrenzte Nachfrage generiert.

Boehm and Abts vermuten, dass die Kosten fuer die Systemwartung und -weiterentwicklung bei integrierten Applikationssystemen groesser sind. Je weiter die Leute, welche fuer die Systemwartung zustaendig sind, von den eigentlichen Entwicklern des Systems getrennt sind, desto mehr Probleme mit dem integrierten System koennen auftreten.

### BilderS

![](media/image.jpg)

## Referenzen

[1]: Dijkstra, E. W. (1968). Go to statement considered harmful. 
Communications of the ACM, 11(3), 147-148.