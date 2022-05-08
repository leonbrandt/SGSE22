# 7 Design and implementation

**Autor:** Rei Berberi

**Anmerkung des Autors:** Dieses Kapitel ist eine ins Deutsche übersetzte Zusammenfassung von Kapitel 7 "Design and implementation" aus der 10. Auflage des Buches Software Engineering von Sommerville. Ich habe versucht, jedes Unterkapitel zusammenzufassen, indem ich die wichtigsten Punkte beibehalten und das Material so leicht verständlich wie möglich gemacht habe.

## Kurzbeschreibung und Ziele

Software-Design und -Implementierung ist die Phase im Software-Engineering-Prozess, in der ein ausführbares Softwaresystem entwickelt wird. Diese beiden Prozesse sind untrennbar miteinander verknüpft, so dass bei der Entwicklung eines Entwurfs normalerweise auch Implementierungsfragen berücksichtigt werden sollten.
Der Softwareentwurf ist eine kreative Tätigkeit, bei der auf der Grundlage der Anforderungen des Kunden Softwarekomponenten und ihre Beziehungen zueinander festgelegt werden. Die Implementierung ist der Prozess der Umsetzung des Entwurfs in ein Programm.

Die Ziele dieses Kapitels lauten wie folgt:

- die wichtigsten Aktivitäten in einem allgemeinen, objektorientierten Entwurfsprozess zu verstehen;
- einige der verschiedenen Modelle zu verstehen, die zur Dokumentation eines objektorientierten Entwurfs verwendet werden können;
- die Idee der Entwurfsmuster kennenzulernen und zu verstehen, wie diese eine Möglichkeit darstellen, Entwurfswissen und -erfahrung wiederzuverwenden;
- Einführung in die wichtigsten Fragen, die bei der Implementierung von Software zu berücksichtigen sind, einschließlich der Wiederverwendung von Software und der Open-Source-Entwicklung.

## 7.1 Objektorientiertes Design unter Verwendung der UML

Beim objektorientierten Entwurfsprozess werden Objektklassen und die Beziehungen zwischen diesen Klassen entworfen. Diese Klassen definieren die Objekte im System und ihre Interaktionen. Zu den Objekten gehören sowohl Daten als auch Operationen zur Bearbeitung dieser Daten, und oft gibt es eine klare Zuordnung zwischen realen Entitäten und den sie steuernden Objekten im System.
Der Entwurf ist kein klar umrissener, sequentieller Prozess. Daher entwickelt man einen Entwurf, indem man Ideen sammelt, Lösungen vorschlägt und diese Lösungen verfeinert, wenn neue Informationen verfügbar werden.

Um ein Systemdesign vom Konzept zum detaillierten, objektorientierten Design zu entwickeln, muss man:

1. Der Kontexts und die externe Interaktionen mit dem System verstehen und definieren.
2. Die Systemarchitektur entwerfen.
3. Die wichtigsten Objekte im System identifizieren.
4. Entwurfsmodelle entwickeln.
5. Schnittstellen spezifizieren.

Der objektorientierte Softwareentwurf wird in diesem Kapitel anhand der Entwicklung eines Entwurfs für einen Teil der eingebetteten Software für die in Kapitel 1 vorgestellte Wetterstation für die Wildnis erläutert.

### 7.1.1 Systemkontext und Interaktionen

Der erste Schritt in jedem Softwareentwicklungsprozess besteht darin, ein Verständnis für die Beziehungen zwischen der zu entwickelnden Software und ihrer externen Umgebung zu entwickeln. Dies ist wichtig für die Entscheidung, wie die erforderliche Systemfunktionalität bereitgestellt und wie das System für die Kommunikation mit seiner Umgebung strukturiert werden soll.
Ein Systemkontextmodell ist ein Strukturmodell, das die anderen Systeme in der Umgebung des zu entwickelnden Systems darstellt. Es kann mit Hilfe von Assoziationen dargestellt werden, die zeigen, dass es einige Beziehungen zwischen den an der Assoziation beteiligten Entitäten gibt.

![image](https://user-images.githubusercontent.com/58107983/167261207-2b9c3be3-9af1-420e-9356-064b3ccfbdfd.png)

**Abbildung 7.1** - Systemkontext für die Wetterstation [1]

Abbildung 7.1 zeigt, dass es sich bei den Systemen in der Umgebung jeder Wetterstation um ein Wetterinformationssystem, ein Satellitensystem an Bord und ein Steuerungssystem handelt. Die Kardinalitätsinformation auf dem Link zeigt, dass es ein einziges Steuerungssystem gibt, aber mehrere Wetterstationen, einen Satelliten und ein allgemeines Wetterinformationssystem.

Ein Interaktionsmodell ist ein dynamisches Modell, das zeigt, wie das System mit seiner Umgebung interagiert, während es benutzt wird. Wenn Sie die Interaktionen eines Systems mit seiner Umgebung modellieren, sollten Sie einen abstrakten Ansatz verwenden, der nicht zu viele Details enthält. Eine Möglichkeit, dies zu tun, ist die Verwendung eines Anwendungsfallmodells.

![image](https://user-images.githubusercontent.com/58107983/167260952-33113a41-efbb-4ecf-9ed7-aaf0449971c5.png)

**Abbildung 7.2** - Anwendungsfälle für die Wetterstation[1]

Das Anwendungsfallmodell für die Wetterstation ist in Abbildung 7.2 dargestellt. Es zeigt, dass die Wetterstation mit dem Wetterinformationssystem interagiert, um Wetterdaten und den Status der Wetterstationshardware zu melden. Weitere Interaktionen bestehen mit einem Steuerungssystem, das spezifische Steuerbefehle für die Wetterstation erteilen kann. Das Strichmännchen wird in der UML verwendet, um andere Systeme sowie menschliche Benutzer darzustellen.

Jeder dieser Anwendungsfälle sollte in einer strukturierten, natürlichen Sprache beschrieben werden, die den Entwicklern hilft, die Objekte im System zu identifizieren und ihnen ein Verständnis dafür zu vermitteln, was das System tun soll. Abbildung 7.3 zeigt die Beschreibung des Anwendungsfalls Wetter berichten aus Abbildung 7.2.

![image](https://user-images.githubusercontent.com/58107983/167261006-3bcb06c2-f2df-4f56-8259-6cce6eef5d39.png)

**Abbildung 7.3** - Beschreibung des Anwendungsfalls: Wetter berichten[1]

### 7.1.2 Architektur-Design

Sobald die Wechselwirkungen zwischen dem Softwaresystem und der Systemumgebung definiert sind, werden diese Informationen als Grundlage für den Entwurf der Systemarchitektur verwendet. Die wichtigsten Komponenten, aus denen das System besteht, und ihre Interaktionen werden identifiziert, und dann wird die Systemorganisation unter Verwendung eines Architekturmusters, wie z. B. eines Schichten- oder Client-Server-Modells, entworfen.

![image](https://user-images.githubusercontent.com/58107983/167260961-bd27bd0a-eef7-4bb0-8979-f5953966f02b.png)

**Abbildung 7.4** - Hochrangige Architektur der Wetterstation[1]

Die High-Level-Architektur der Wetterstations-Software ist in Abbildung 7.4 dargestellt. Die Wetterstation besteht aus unabhängigen Teilsystemen, die über eine gemeinsame Infrastruktur kommunizieren, die als Kommunikationsverbindung dargestellt ist. Jedes Teilsystem hört auf dieser Infrastruktur auf Nachrichten und empfängt die Nachrichten, die für es bestimmt sind.

![image](https://user-images.githubusercontent.com/58107983/167260966-c8b2549f-f164-4b03-b35e-c87295d3db54.png)

**Abbildung 7.5** - Architektur des Datenerfassungssystems[1]

Abbildung 7.5 zeigt die Architektur des Teilsystems Datenerfassung, das in Abbildung 7.4 enthalten ist. Die Objekte Transmitter und Receiver befassen sich mit der Verwaltung der Kommunikation, und das Objekt WeatherData kapselt die Informationen, die von den Instrumenten gesammelt und an das Wetterinformationssystem übertragen werden.

### 7.1.3 Identifizierung der Objektklasse

Die Beschreibung des Anwendungsfalls hilft dabei, Objekte und Operationen im System zu identifizieren. Aus der Beschreibung des Anwendungsfalls "Wetter berichten" geht hervor, dass Objekte implementiert werden müssen, die die Instrumente zum Sammeln von Wetterdaten darstellen, sowie ein Objekt, das die Zusammenfassung der Wetterdaten darstellt. In der Regel benötigt man auch ein oder mehrere High-Level-Systemobjekte, die die in den Anwendungsfällen definierten Systeminteraktionen kapseln. Mit diesen Objekten kann man beginnen, die allgemeinen Objektklassen im System zu identifizieren.

In der Praxis muss man mehrere Wissensquellen nutzen, um Objektklassen zu entdecken. Objektklassen, Attribute und Operationen, die zunächst aus der informellen Systembeschreibung identifiziert werden, können ein Ausgangspunkt für den Entwurf sein. Informationen aus dem Wissen der Anwendungsdomäne oder der Szenarioanalyse können dann zur Verfeinerung und Erweiterung der ursprünglichen Objekte verwendet werden. Diese Informationen können aus Anforderungsdokumenten, Gesprächen mit Benutzern oder Analysen bestehender Systeme gewonnen werden.

![image](https://user-images.githubusercontent.com/58107983/167260979-2b0e13db-d152-4698-a0ea-681149526471.png)

**Abbildung 7.6** - Objekte der Wetterstation[1]

Abbildung 7.6 zeigt fünf Objektklassen der Wetterstation in der Wildnis. Die Objekte Bodenthermometer, Anemometer und Barometer sind Objekte der Anwendungsdomäne, und die Objekte WeatherStation und WeatherData wurden anhand der Systembeschreibung und der Beschreibung des Szenarios (Anwendungsfall) identifiziert:

1. Die Objektklasse WeatherStation stellt die grundlegende Schnittstelle der Wetterstation mit ihrer Umgebung dar.
2. Die WeatherData-Objektklasse ist für die Verarbeitung des Wetterberichtsbefehls zuständig. Sie sendet die zusammengefassten Daten von den Instrumenten der Wetterstation an das Wetterinformationssystem.
3. Die Objektklassen Bodenthermometer, Anemometer und Barometer stehen in direktem Zusammenhang mit den Instrumenten im System. Sie spiegeln konkrete Hardware-Einheiten im System wider, und die Operationen befassen sich mit der Steuerung dieser Hardware.

Man verwendet das Wissen über die Anwendungsdomäne, um andere Objekte, Attribute und Dienste zu identifizieren:

1. Wetterstationen befinden sich oft an abgelegenen Orten und enthalten verschiedene Geräte, die manchmal ausfallen. Geräteausfälle sollten automatisch gemeldet werden. Dies impliziert, dass man Attribute und Operationen benötigt, um das korrekte Funktionieren der Instrumente zu überprüfen.
2. Da es viele abgelegene Wetterstationen gibt, sollte jede Wetterstation eine eigene Kennung haben, damit sie in der Kommunikation eindeutig identifiziert werden kann.
3. Da die Wetterstationen zu unterschiedlichen Zeitpunkten installiert werden, können auch die Gerätetypen unterschiedlich sein. Daher sollte auch jedes Instrument eindeutig identifiziert werden, und es sollte eine Datenbank mit Instrumenteninformationen geführt werden.

In dieser Phase des Entwurfsprozesses sollte man sich auf die Objekte selbst konzentrieren, ohne darüber nachzudenken, wie diese Objekte implementiert werden könnten. Sobald die Objekte identifiziert sind, verfeinert man den Objektentwurf, sucht nach gemeinsamen Merkmalen und entwirft dann die Vererbungshierarchie für das System.

### 7.1.4 Design Modelle

Entwurfs- oder Systemmodelle zeigen die Objekte oder Objektklassen in einem System. Sie zeigen auch die Assoziationen und Beziehungen zwischen diesen Objekten. Diese Modelle sind die Brücke zwischen den Systemanforderungen und der Implementierung eines Systems. Sie müssen abstrakt sein, damit unnötige Details die Beziehungen zwischen ihnen und den Systemanforderungen nicht verdecken. Sie müssen jedoch auch genügend Details enthalten, damit die Programmierer Entscheidungen über die Implementierung treffen können. Ein wichtiger Schritt im Entwurfsprozess ist daher die Entscheidung über die benötigten Entwurfsmodelle und den erforderlichen Detaillierungsgrad dieser Modelle. Dies hängt von der Art des Systems ab, das entwickelt werden soll.

Wenn man die UML zur Entwicklung eines Entwurfs verwendet, sollte man zwei Arten von Entwurfsmodellen entwickeln:

1. Strukturmodelle, die die statische Struktur des Systems anhand von Objektklassen und deren Beziehungen beschreiben.
2. Dynamische Modelle, die die dynamische Struktur des Systems beschreiben und die erwarteten Laufzeitinteraktionen zwischen den Systemobjekten aufzeigen.

Drei UML-Modelltypen sind besonders nützlich, um Anwendungsfall- und Architekturmodelle mit Details zu versehen:

1. **Subsystemmodelle**, die logische Gruppierungen von Objekten in kohärente Subsysteme darstellen. Diese werden durch eine Art Klassendiagramm dargestellt, wobei jedes Subsystem als Paket mit eingeschlossenen Objekten dargestellt wird. Subsystemmodelle sind Strukturmodelle.
2. **Sequenzmodelle**, die die Abfolge von Objektinteraktionen darstellen. Sie werden durch eine UML-Sequenz oder ein Kollaborationsdiagramm dargestellt. Sequenzmodelle sind dynamische Modelle.
3. **Zustandsautomatenmodelle**, die zeigen, wie Objekte ihren Zustand als Reaktion auf Ereignisse ändern. Sie werden in der UML durch Zustandsdiagramme dargestellt. Zustandsautomatenmodelle sind dynamische Modelle.

Ein **Subsystemmodell** ist ein nützliches statisches Modell, das zeigt, wie ein Entwurf in logisch zusammenhängenden Gruppen von Objekten organisiert ist. Ein Beispiel für ein Subsystemmodell ist bereits in Abbildung 7.4. dargestellt, in der die Subsysteme des Wetterkarten-Systems gezeigt werden.

**Sequenzmodelle** sind dynamische Modelle, die für jeden Interaktionsmodus die Abfolge der stattfindenden Objektinteraktionen beschreiben. Abbildung 7.7 ist ein Beispiel für ein Sequenzmodell, dargestellt als UML-Sequenzdiagramm. Dieses Diagramm zeigt die Abfolge der Interaktionen, die stattfinden, wenn ein externes System die zusammengefassten Daten von der Wetterstation anfordert.

![image](https://user-images.githubusercontent.com/58107983/167260983-5dab512d-16b4-4275-89c4-4aafdc563604.png)

**Abbildung 7.7** - Sequenzdiagramm zur Beschreibung der Datenerhebung[1]

Man liest Sequenzdiagramme von oben nach unten. Das obige Diagramm kann wie folgt gelesen werden:

1. Das SatComms-Objekt empfängt eine Anfrage des Wetterinformationssystems zur Erfassung eines Wetterberichts von einer Wetterstation. Es bestätigt den Empfang dieser Anfrage. Die Pfeilspitze auf der gesendeten Nachricht zeigt an, dass das externe System nicht auf eine Antwort wartet, sondern mit der weiteren Verarbeitung fortfahren kann.
2. SatComms sendet über eine Satellitenverbindung eine Nachricht an die WeatherStation, um eine Zusammenfassung der gesammelten Wetterdaten zu erstellen. Auch hier zeigt die Pfeilspitze an, dass SatComms nicht auf eine Antwort wartet.
3. WeatherStation sendet eine Nachricht an ein Commslink-Objekt, um die Wetterdaten zusammenzufassen. In diesem Fall zeigt die abgewinkelte Pfeilspitze an, dass die Instanz der WeatherStation-Objektklasse auf eine Antwort wartet.
4. Commslink ruft die Methode summarize im Objekt WeatherData auf und wartet auf eine Antwort.
5. Die Zusammenfassung der Wetterdaten wird berechnet und an die WeatherStation über das Commslink-Objekt.
6. WeatherStation ruft dann das SatComms-Objekt auf, um die zusammengefassten Daten über das Satellitenkommunikationssystem an das Wetterinformationssystem zu übertragen.

Sequenzdiagramme werden verwendet, um das kombinierte Verhalten einer Gruppe von Objekten zu modellieren, aber man möchte vielleicht auch das Verhalten eines Objekts oder eines Subsystems als Reaktion auf Nachrichten und Ereignisse zusammenfassen. Zu diesem Zweck kann man ein **Zustandsautomatenmodell** verwenden, das zeigt, wie die Objektinstanz ihren Zustand in Abhängigkeit von den empfangenen Nachrichten ändert. Abbildung 7.8 ist ein Zustandsdiagramm für das System der Wetterstation, das zeigt, wie es auf Anfragen für verschiedene Dienste reagiert.

![image](https://user-images.githubusercontent.com/58107983/167260989-3e6e1b02-a50a-4db3-96ec-61b8c4aaf3c9.png)

**Abbildung 7.8** - Zustandsdiagramm der Wetterstation[1]

Man kann dieses Diagramm wie folgt lesen:

1. Wenn der Systemzustand Shutdown ist, kann es auf eine restart()-, eine reconfigure()- oder eine powerSave()-Nachricht reagieren. Der unbeschriftete Pfeil mit dem schwarzen Punkt zeigt an, dass der Zustand Shutdown der Ausgangszustand ist. Eine restart()-Meldung bewirkt einen Übergang zum Normalbetrieb. Sowohl die powerSave()- als auch die reconfigure()-Nachricht bewirken einen Übergang in einen Zustand, in dem sich das System neu konfiguriert. Aus dem Zustandsdiagramm geht hervor, dass eine Rekonfiguration nur zulässig ist, wenn das System heruntergefahren wurde.
2. Im Zustand "Running" erwartet das System weitere Nachrichten. Wenn eine shutdown()-Meldung empfangen wird, kehrt das Objekt in den Zustand shutdown zurück.
3. Wenn eine reportWeather()-Meldung empfangen wird, geht das System in den Zustand Summarizing über. Wenn die Zusammenfassung abgeschlossen ist, geht das System in den Zustand Transmitting über, in dem die Informationen an das entfernte System übertragen werden. Anschließend kehrt es in den Zustand "Running" zurück.
4. Wenn ein Signal von der "clock" empfangen wird, geht das System in den Zustand "Collecting" über, in dem es Daten von den Instrumenten sammelt. Jedes Gerät wird nacheinander angewiesen, seine Daten von den zugehörigen Sensoren zu sammeln.
5. Wenn eine remoteControl()-Meldung empfangen wird, geht das System in einen kontrollierten Zustand über, in dem es auf einen anderen Satz von Meldungen aus der Fernsteuerungszentrale reagiert. Diese sind in diesem Diagramm nicht dargestellt.

### 7.1.5 Schnittstellenspezifikation

Ein wichtiger Teil eines jeden Entwurfsprozesses ist die Spezifikation der Schnittstellen zwischen den Komponenten des Entwurfs. Die Schnittstellen müssen spezifiziert werden, damit Objekte und Teilsysteme parallel entworfen werden können. Schnittstellen können in der UML mit der gleichen Notation wie in einem Klassendiagramm spezifiziert werden. Allerdings gibt es keinen Attributteil, und der UML-Stereotyp "interface" sollte in den Namensteil aufgenommen werden. In einem Schnittstellenentwurf sollten keine Details der Datendarstellung enthalten sein, da Attribute in einer Schnittstellenspezifikation nicht definiert sind. Allerdings sollten Operationen für den Zugriff und die Aktualisierung von Daten enthalten sein. Es gibt keine einfache 1:1-Beziehung zwischen Objekten und Schnittstellen. Ein und dasselbe Objekt kann mehrere Schnittstellen haben, von denen jede eine Sichtweise auf die Methoden darstellt, die es bereitstellt.

![image](https://user-images.githubusercontent.com/58107983/167260995-d55d1125-5ebb-4ce7-abd0-89662f020f09.png)

**Abbildung 7.9** - Schnittstellen von Wetterstationen[1]

Abbildung 7.9 zeigt zwei Schnittstellen, die für die Wetterstation definiert werden können. Die linke Schnittstelle ist eine Berichtsschnittstelle, die die Namen der Operationen definiert, die zur Erstellung von Wetter- und Statusberichten verwendet werden. Diese sind direkt den Operationen im WeatherStation-Objekt zugeordnet. Die Fernsteuerungsschnittstelle bietet vier Operationen, die auf eine einzige Methode im WeatherStation-Objekt abgebildet werden.

## 7.2 Entwurfsmuster

Entwurfsmuster stellen die besten Praktiken dar, die von erfahrenen objektorientierten Softwareentwicklern verwendet werden. Entwurfsmuster sind Lösungen für allgemeine Probleme, mit denen Softwareentwickler während der Softwareentwicklung konfrontiert sind. Diese Lösungen wurden durch Versuch und Irrtum von zahlreichen Softwareentwicklern über einen längeren Zeitraum hinweg erarbeitet. 1994 veröffentlichten die vier Autoren Erich Gamma, Richard Helm, Ralph Johnson und John Vlissides ein Buch mit dem Titel Design Patterns - Elements of Reusable Object-Oriented Software (Entwurfsmuster - Elemente wiederverwendbarer objektorientierter Software), das das Konzept der Entwurfsmuster in der Softwareentwicklung einführte.

Diese Autoren sind gemeinsam als Gang of Four (GOF) bekannt. In ihrem Buch über Patterns definierten sie die vier wesentlichen Elemente von Design Patterns:

1. Ein Name, der einen aussagekräftigen Verweis auf das Muster darstellt.
2. Eine Beschreibung des Problembereichs, die erklärt, wann das Muster angewendet werden kann.
3. Eine Lösungsbeschreibung der Teile der Entwurfslösung, ihrer Beziehungen und ihrer Verantwortlichkeiten.
4. Eine Aussage über die Konsequenzen - die Ergebnisse und Kompromisse - der Anwendung des Musters. Dies kann Designern helfen zu verstehen, ob ein Muster in einer bestimmten Situation verwendet werden kann oder nicht.

Patterns unterstützen die Wiederverwendung von Konzepten auf hoher Ebene. Wenn man versucht, ausführbare Komponenten wiederzuverwenden, wird man unweigerlich durch detaillierte Designentscheidungen eingeschränkt, die von den Implementierern dieser Komponenten getroffen wurden. Wenn man mit dem Entwurf eines Systems beginnt, kann es schwierig sein, im Voraus zu wissen, ob man ein bestimmtes Muster benötigen wird. Die Verwendung von Mustern in einem Entwurfsprozess beinhaltet daher oft die Entwicklung eines Entwurfs, das Auftreten eines Problems und die anschließende Erkenntnis, dass ein Muster verwendet werden kann.

## 7.3 Implementierungsfragen

Eine entscheidende Phase der Softwareentwicklung ist die Systemimplementierung, bei der eine ausführbare Version der Software erstellt wird. Die Implementierung kann die Entwicklung von Programmen in High-Level- oder Low-Level-Programmiersprachen oder die Anpassung allgemeiner, handelsüblicher Systeme an die spezifischen Anforderungen eines Unternehmens umfassen.
Einige Aspekte der Implementierung, die für die Softwaretechnik besonders wichtig sind, sind:

1. **Wiederverwendung:** Die meiste moderne Software wird durch die Wiederverwendung bestehender Komponenten oder Systeme erstellt.
2. **Konfigurationsmanagement:** Während des Entwicklungsprozesses werden viele verschiedene Versionen der einzelnen Softwarekomponenten erstellt. Wenn man diese Versionen nicht in einem Konfigurationsmanagementsystem verfolgt, besteht die Gefahr, dass man die falschen Versionen dieser Komponenten in das System aufnimmt.
3. **Host-Target-Entwicklung:** Produktionssoftware wird in der Regel nicht auf demselben Computer ausgeführt wie die Softwareentwicklungsumgebung. Vielmehr wird sie auf einem Computer (dem Host-System) entwickelt und auf einem anderen Computer (dem Zielsystem) ausgeführt.

### 7.3.1 Wiederverwendung

Ein auf Wiederverwendung basierender Ansatz ist heute bei webbasierten Systemen aller Art, wissenschaftlicher Software und zunehmend auch bei der Entwicklung eingebetteter Systeme weit verbreitet. Die Wiederverwendung von Software ist auf verschiedenen Ebenen möglich, wie in Abbildung 7.10 dargestellt:

![image](https://user-images.githubusercontent.com/58107983/167261084-9ae5488e-bb6c-405f-8677-79ef6cc1cde8.png)
**Abbildung 7.10** - Wiederverwendung von Software[1]

1. **Die Abstraktionsebene:** Auf dieser Ebene wird Software nicht direkt wiederverwendet, sondern man nutzt das Wissen über erfolgreiche Abstraktionen bei der Entwicklung der eigenen Software.
2. **Die Objektebene:** Auf dieser Ebene werden Objekte aus einer Bibliothek direkt wiederverwendet, anstatt den Code selbst zu schreiben. Um diese Art der Wiederverwendung zu realisieren, muss man geeignete Bibliotheken finden und herausfinden, ob die Objekte und Methoden die benötigte Funktionalität bieten.
3. **Die Komponentenebene:** Komponenten sind Sammlungen von Objekten und Objektklassen, die zusammenarbeiten, um verwandte Funktionen und Dienste bereitzustellen. Oft muss man die Komponente durch Hinzufügen von eigenem Code anpassen und erweitern.
4. **Die Systemebene:** Auf dieser Ebene werden ganze Anwendungssysteme wiederverwendet. Diese Funktion beinhaltet in der Regel eine Art von Konfiguration dieser Systeme. Dies kann durch Hinzufügen und Ändern von Code oder durch Verwendung der systemeigenen Konfigurationsschnittstelle geschehen.

Durch die Wiederverwendung vorhandener Software können neue Systeme schneller, mit weniger Entwicklungsrisiken und zu geringeren Kosten entwickelt werden. Da die wiederverwendete Software bereits in anderen Anwendungen getestet wurde, sollte sie zuverlässiger sein als neue Software. Die Wiederverwendung ist jedoch mit Kosten verbunden:

1. Die Kosten für die Zeit, die für die Suche nach wiederverwendbarer Software und die Bewertung, ob sie den eigenen Anforderungen entspricht, aufgewendet wird.
2. Gegebenenfalls die Kosten für den Kauf der wiederverwendbaren Software. Bei großen Systemen, die gebrauchsfertig kommen, können diese Kosten sehr hoch sein.
3. Die Kosten für die Anpassung und Konfiguration der wiederverwendbaren Softwarekomponenten oder -systeme, um die Anforderungen des zu entwickelnden Systems zu erfüllen.
4. Die Kosten für die Integration wiederverwendbarer Softwareelemente untereinander und mit dem neu entwickelten Code.

### 7.3.2 Konfigurationsmanagement

Es gibt vier grundlegende Aktivitäten des Konfigurationsmanagements:

1. Versionsmanagement, bei dem es darum geht, die verschiedenen Versionen von Softwarekomponenten im Auge zu behalten. Dadurch wird verhindert, dass ein Entwickler Code überschreibt, der von einem anderen an das System übermittelt wurde.
2. Systemintegration: Hier wird Unterstützung geboten, um den Entwicklern zu helfen, zu definieren, welche Versionen von Komponenten verwendet werden, um jede Version eines Systems zu erstellen. Diese Beschreibung wird dann verwendet, um ein System automatisch durch Kompilieren und Verknüpfen der erforderlichen Komponenten zu erstellen.
3. Problemverfolgung, bei der die Benutzer Fehler und andere Probleme melden können und alle Entwickler sehen können, wer an diesen Problemen arbeitet und wann sie behoben werden.
4. Release Management, bei dem neue Versionen eines Softwaresystems für Kunden freigegeben werden.

Software-Konfigurationsmanagement-Tools unterstützen jede der oben genannten Aktivitäten. Diese Werkzeuge werden normalerweise in einer integrierten Entwicklungsumgebung installiert. Die Versionsverwaltung kann durch ein Versionsverwaltungssystem wie z.B. Git unterstützt werden, das die Entwicklung an mehreren Standorten und in mehreren Teams unterstützen kann.

### 7.3.4 Host-Target-Entwicklung

Die meisten professionellen Softwareentwicklungen basieren auf einem Host-Target-Modell (Abbildung 7.15). Die Software wird auf einem Computer (dem Host) entwickelt, aber auf einem anderen Rechner (dem Target) ausgeführt. Allgemeiner ausgedrückt, kann man von einer Entwicklungsplattform (Host) und einer Ausführungsplattform (Target) sprechen.

![image](https://user-images.githubusercontent.com/58107983/167261113-09b289ba-fdad-45fe-aae6-df37b275df4d.png)
**Abbildung 7.11** - Host-Target-Entwicklung[1]

Manchmal sind Entwicklungs- und Ausführungsplattform identisch, so dass die Software auf demselben Rechner entwickelt und getestet werden kann. Insbesondere bei eingebetteten Systemen und mobilen Systemen sind die Entwicklungs- und die Ausführungsplattform jedoch unterschiedlich. Man muss entweder die entwickelte Software zum Testen auf die Ausführungsplattform verschieben oder einen Simulator auf dem Entwicklungsrechner laufen lassen.

Eine Softwareentwicklungsplattform sollte eine Reihe von Werkzeugen zur Unterstützung der Softwareentwicklungsprozesse bieten. Dazu können gehören:

1. Ein integrierter Compiler und ein syntaxgesteuertes Editiersystem, mit dem Sie Code erstellen, bearbeiten und kompilieren können.
2. Ein System zum Debuggen von Sprachen.
3. Grafische Bearbeitungswerkzeuge, wie z.B. Werkzeuge zur Bearbeitung von UML-Modellen.
4. Testwerkzeuge, wie z. B. JUnit, die automatisch eine Reihe von Tests für eine neue Version eines Programms ausführen können.
5. Werkzeuge zur Unterstützung von Refactoring und Programmvisualisierung.
6. Konfigurationsmanagement-Tools zur Verwaltung von Quellcode-Versionen und zur Integration und Erstellung von Systemen.

Normalerweise umfassen Entwicklungsumgebungen für Teams auch einen gemeinsamen Server, auf dem ein System zur Änderungs- und Konfigurationsverwaltung läuft, und vielleicht ein System zur Unterstützung des Anforderungsmanagements. Software-Entwicklungstools werden heute in der Regel innerhalb einer integrierten Entwicklungsumgebung (IDE) installiert.

Im Rahmen des Entwicklungsprozesses müssen Entscheidungen darüber getroffen werden, wie die entwickelte Software auf der Zielplattform eingesetzt werden soll. Bei diesen Entscheidungen sind folgende Punkte zu berücksichtigen:

1. Die Hardware- und Software-Anforderungen einer Komponente: Wenn eine Komponente für eine bestimmte Hardware-Architektur konzipiert ist oder von einem anderen Softwaresystem abhängt, muss sie natürlich auf einer Plattform eingesetzt werden, die die erforderliche Hardware- und Software-Unterstützung bietet.
2. Die Verfügbarkeitsanforderungen des Systems: Bei hochverfügbaren Systemen kann es erforderlich sein, dass die Komponenten auf mehr als einer Plattform eingesetzt werden. Dies bedeutet, dass im Falle eines Plattformausfalls eine alternative Implementierung der Komponente verfügbar ist.
3. Komponentenkommunikation: Wenn viele Komponenten miteinander kommunizieren, ist es in der Regel am besten, sie auf derselben Plattform oder auf räumlich nahe beieinander liegenden Plattformen einzusetzen. Dies verringert die Kommunikationslatenz.

## 7.5 Open-Source-Entwicklung

Open-Source-Entwicklung ist ein Ansatz zur Softwareentwicklung, bei dem der Quellcode eines Softwaresystems veröffentlicht wird und Freiwillige eingeladen werden, sich am Entwicklungsprozess zu beteiligen [2].

Open-Source-Software ist in der Regel kostengünstig oder sogar kostenlos zu erwerben. Normalerweise kann man Open-Source-Software kostenlos herunterladen. Wenn man jedoch Dokumentation und Unterstützung wünscht, muss man dafür bezahlen, aber die Kosten sind in der Regel recht gering. Ein weiterer wichtiger Vorteil der Verwendung von Open-Source-Produkten ist, dass weit verbreitete Open-Source-Systeme sehr zuverlässig sind. Sie haben eine große Zahl von Benutzern, die bereit sind, Probleme selbst zu beheben, anstatt diese Probleme dem Entwickler zu melden und auf eine neue Version des Systems zu warten. Fehler werden schneller entdeckt und behoben, als dies bei proprietärer Software normalerweise möglich ist.

Für ein Unternehmen, das in der Softwareentwicklung tätig ist, gibt es zwei Aspekte von Open-Source, die berücksichtigt werden müssen:

1. Soll das zu entwickelnde Produkt auf Open-Source-Komponenten zurückgreifen?
2. Soll ein Open-Source-Ansatz für die eigene Softwareentwicklung verwendet werden?

Wenn man ein Softwareprodukt für den Verkauf entwickelt, sind die Markteinführungszeit und die Kostenreduzierung entscheidend. Wenn man Software in einem Bereich entwickelt, in dem hochwertige Open-Source-Systeme zur Verfügung stehen, kann man durch die Verwendung dieser Systeme Zeit und Geld sparen. Entwickelt man jedoch Software für bestimmte organisatorische Anforderungen, kommt die Verwendung von Open-Source-Komponenten möglicherweise nicht in Frage.

### 7.5.1 Open-Source-Lizenzierung

Obwohl ein Grundprinzip der Open-Source-Entwicklung darin besteht, dass der Quellcode frei verfügbar sein sollte, kann der Eigentümer oder der Entwickler des Codes dessen Verwendung einschränken, indem er rechtsverbindliche Bedingungen in eine Open-Source-Softwarelizenz aufnimmt[3]. Einige Open-Source-Entwickler sind der Meinung, dass, wenn eine Open-Source-Komponente zur Entwicklung eines neuen Systems verwendet wird, dieses System auch Open Source sein sollte. Andere sind bereit, die Verwendung ihres Codes ohne diese Einschränkung zuzulassen. Die entwickelten Systeme können proprietär sein und als Closed-Source-Systeme verkauft werden.

Die meisten Open-Source-Lizenzen (Chapman 2010) sind Varianten eines von drei allgemeinen Modellen:

1. Die GNU General Public License (GPL). Dabei handelt es sich um eine so genannte reziproke Lizenz, die vereinfacht ausgedrückt bedeutet, dass Sie, wenn Sie Open-Source-Software verwenden, die unter der GPL-Lizenz lizenziert ist, diese Software als Open Source zur Verfügung stellen müssen.
2. Die GNU Lesser General Public License (LGPL). Dies ist eine Variante der GPL-Lizenz, bei der Sie Komponenten schreiben können, die auf Open-Source-Code verweisen, ohne den Quellcode dieser Komponenten veröffentlichen zu müssen. Wenn Sie jedoch die lizenzierte Komponente ändern, müssen Sie diese als Open Source veröffentlichen.
3. Die Berkley Standard Distribution (BSD) Lizenz. Dies ist eine nicht-reziproke Lizenz, was bedeutet, dass Sie nicht verpflichtet sind, alle Änderungen oder Modifikationen, die Sie am Open-Source-Code zu veröffentlichen. Sie können den Code in proprietäre Systeme integrieren, die verkauft werden. Wenn Sie Open-Source-Komponenten verwenden, müssen Sie den ursprünglichen Ersteller des Codes anerkennen.

## Referenzen

[1]: Ian Sommerville. 2015. Software Engineering (10th. ed.), 196-225.
[2]: Raymond, E. S. 2001. The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary. Sebastopol. CA: O’Reilly & Associates.
[3]: St. Laurent, A. 2004. Understanding Open Source and Free Software Licensing. Sebastopol, CA: O’Reilly & Associates.
