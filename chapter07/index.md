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

![image](https://user-images.githubusercontent.com/58107983/163242011-39596cc7-e94c-4597-b1d8-af4ff9fcd91a.png)

**Abbildung 7.1 - Systemkontext für die Wetterstation [1]**

Abbildung 7.1 zeigt, dass es sich bei den Systemen in der Umgebung jeder Wetterstation um ein Wetterinformationssystem, ein Satellitensystem an Bord und ein Steuerungssystem handelt. Die Kardinalitätsinformation auf dem Link zeigt, dass es ein einziges Steuerungssystem gibt, aber mehrere Wetterstationen, einen Satelliten und ein allgemeines Wetterinformationssystem.

Ein Interaktionsmodell ist ein dynamisches Modell, das zeigt, wie das System mit seiner Umgebung interagiert, während es benutzt wird. Wenn Sie die Interaktionen eines Systems mit seiner Umgebung modellieren, sollten Sie einen abstrakten Ansatz verwenden, der nicht zu viele Details enthält. Eine Möglichkeit, dies zu tun, ist die Verwendung eines Anwendungsfallmodells.

![image](https://user-images.githubusercontent.com/58107983/167260952-33113a41-efbb-4ecf-9ed7-aaf0449971c5.png)

**Abbildung 7.2 - Anwendungsfälle für die Wetterstation[1]**

Das Anwendungsfallmodell für die Wetterstation ist in Abbildung 7.2 dargestellt. Es zeigt, dass die Wetterstation mit dem Wetterinformationssystem interagiert, um Wetterdaten und den Status der Wetterstationshardware zu melden. Weitere Interaktionen bestehen mit einem Steuerungssystem, das spezifische Steuerbefehle für die Wetterstation erteilen kann. Das Strichmännchen wird in der UML verwendet, um andere Systeme sowie menschliche Benutzer darzustellen.

Jeder dieser Anwendungsfälle sollte in einer strukturierten, natürlichen Sprache beschrieben werden, die den Entwicklern hilft, die Objekte im System zu identifizieren und ihnen ein Verständnis dafür zu vermitteln, was das System tun soll. Abbildung 7.3 zeigt die Beschreibung des Anwendungsfalls Wetter berichten aus Abbildung 7.2.

![image](https://user-images.githubusercontent.com/58107983/167261006-3bcb06c2-f2df-4f56-8259-6cce6eef5d39.png)

**Abbildung 7.3 - Beschreibung des Anwendungsfalls: Wetter berichten[1]**

### 7.1.2 Architektur-Design

Sobald die Wechselwirkungen zwischen dem Softwaresystem und der Systemumgebung definiert sind, werden diese Informationen als Grundlage für den Entwurf der Systemarchitektur verwendet. Die wichtigsten Komponenten, aus denen das System besteht, und ihre Interaktionen werden identifiziert, und dann wird die Systemorganisation unter Verwendung eines Architekturmusters, wie z. B. eines Schichten- oder Client-Server-Modells, entworfen.

![image](https://user-images.githubusercontent.com/58107983/167260961-bd27bd0a-eef7-4bb0-8979-f5953966f02b.png)

**Abbildung 7.4 - Hochrangige Architektur der Wetterstation[1]**

Die High-Level-Architektur der Wetterstations-Software ist in Abbildung 7.4 dargestellt. Die Wetterstation besteht aus unabhängigen Teilsystemen, die über eine gemeinsame Infrastruktur kommunizieren, die als Kommunikationsverbindung dargestellt ist. Jedes Teilsystem hört auf dieser Infrastruktur auf Nachrichten und empfängt die Nachrichten, die für es bestimmt sind.

![image](https://user-images.githubusercontent.com/58107983/167260966-c8b2549f-f164-4b03-b35e-c87295d3db54.png)

**Abbildung 7.5 - Architektur des Datenerfassungssystems[1]**

Abbildung 7.5 zeigt die Architektur des Teilsystems Datenerfassung, das in Abbildung 7.4 enthalten ist. Die Objekte Transmitter und Receiver befassen sich mit der Verwaltung der Kommunikation, und das Objekt WeatherData kapselt die Informationen, die von den Instrumenten gesammelt und an das Wetterinformationssystem übertragen werden.

### 7.1.3 Identifizierung der Objektklasse

### 7.1.4 Design Modelle

### 7.1.5 Schnittstellenspezifikation

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
![image](https://user-images.githubusercontent.com/58107983/167260979-2b0e13db-d152-4698-a0ea-681149526471.png)
![image](https://user-images.githubusercontent.com/58107983/167260983-5dab512d-16b4-4275-89c4-4aafdc563604.png)
![image](https://user-images.githubusercontent.com/58107983/167260989-3e6e1b02-a50a-4db3-96ec-61b8c4aaf3c9.png)
![image](https://user-images.githubusercontent.com/58107983/167260995-d55d1125-5ebb-4ce7-abd0-89662f020f09.png)
![image](https://user-images.githubusercontent.com/58107983/167261020-b065123f-ed61-4d23-acf2-a28c5ce24816.png)
![image](https://user-images.githubusercontent.com/58107983/167261025-e16fee4b-53f7-4f1d-a644-16c99f16ff6e.png)
![image](https://user-images.githubusercontent.com/58107983/167261038-bef996e9-c935-4e6f-8079-a6289987b3b6.png)
![image](https://user-images.githubusercontent.com/58107983/167261084-9ae5488e-bb6c-405f-8677-79ef6cc1cde8.png)
![image](https://user-images.githubusercontent.com/58107983/167261103-e27572f4-b05a-4173-abf9-c858156e4626.png)
![image](https://user-images.githubusercontent.com/58107983/167261113-09b289ba-fdad-45fe-aae6-df37b275df4d.png)
