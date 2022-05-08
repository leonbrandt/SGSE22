# 7 Design and implementation

**Autor:** Rei Berberi

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

## 7.3 Implementierungsfragen

### 7.3.1 Wiederverwendung

### 7.3.2 Konfigurationsmanagement

### 7.3.4 Host-Target-Entwicklung

## 7.5 Open-Source-Entwicklung

### 7.5.1 Open-Source-Lizenzierung

## Referenzen

[1]: Ian Sommerville. 2015. Software Engineering (10th. ed.), 196-225.

![image](https://user-images.githubusercontent.com/58107983/167260952-33113a41-efbb-4ecf-9ed7-aaf0449971c5.png) - usecase
![image](https://user-images.githubusercontent.com/58107983/167261006-3bcb06c2-f2df-4f56-8259-6cce6eef5d39.png) - usecase desc
![image](https://user-images.githubusercontent.com/58107983/167260961-bd27bd0a-eef7-4bb0-8979-f5953966f02b.png) - arch fo weath
![image](https://user-images.githubusercontent.com/58107983/167260966-c8b2549f-f164-4b03-b35e-c87295d3db54.png) - arch of data
![image](https://user-images.githubusercontent.com/58107983/167260979-2b0e13db-d152-4698-a0ea-681149526471.png) - weather station objects
![image](https://user-images.githubusercontent.com/58107983/167260983-5dab512d-16b4-4275-89c4-4aafdc563604.png) - sequence diagramm
![image](https://user-images.githubusercontent.com/58107983/167260989-3e6e1b02-a50a-4db3-96ec-61b8c4aaf3c9.png) - station state diag
![image](https://user-images.githubusercontent.com/58107983/167260995-d55d1125-5ebb-4ce7-abd0-89662f020f09.png) - interfaces
![image](https://user-images.githubusercontent.com/58107983/167261020-b065123f-ed61-4d23-acf2-a28c5ce24816.png)
![image](https://user-images.githubusercontent.com/58107983/167261025-e16fee4b-53f7-4f1d-a644-16c99f16ff6e.png)
![image](https://user-images.githubusercontent.com/58107983/167261038-bef996e9-c935-4e6f-8079-a6289987b3b6.png)
![image](https://user-images.githubusercontent.com/58107983/167261084-9ae5488e-bb6c-405f-8677-79ef6cc1cde8.png)
![image](https://user-images.githubusercontent.com/58107983/167261103-e27572f4-b05a-4173-abf9-c858156e4626.png)
![image](https://user-images.githubusercontent.com/58107983/167261113-09b289ba-fdad-45fe-aae6-df37b275df4d.png)
