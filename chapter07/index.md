# 7 Design and implementation

**Autor:** Rei Berberi

## Kurzbeschreibung und Ziele

---

Software-Design und -Implementierung ist die Phase im Software-Engineering-Prozess, in der ein ausführbares Softwaresystem entwickelt wird. Diese beiden Prozesse sind untrennbar miteinander verknüpft, so dass bei der Entwicklung eines Entwurfs normalerweise auch Implementierungsfragen berücksichtigt werden sollten.
Der Softwareentwurf ist eine kreative Tätigkeit, bei der auf der Grundlage der Anforderungen des Kunden Softwarekomponenten und ihre Beziehungen zueinander festgelegt werden. Die Implementierung ist der Prozess der Umsetzung des Entwurfs in ein Programm.

Die Ziele dieses Kapitels lauten wie folgt:

- die wichtigsten Aktivitäten in einem allgemeinen, objektorientierten Entwurfsprozess zu verstehen;
- einige der verschiedenen Modelle zu verstehen, die zur Dokumentation eines objektorientierten Entwurfs verwendet werden können;
- die Idee der Entwurfsmuster kennenzulernen und zu verstehen, wie diese eine Möglichkeit darstellen, Entwurfswissen und -erfahrung wiederzuverwenden;
- Einführung in die wichtigsten Fragen, die bei der Implementierung von Software zu berücksichtigen sind, einschließlich der Wiederverwendung von Software und der Open-Source-Entwicklung.

---

## 7.1 Objektorientiertes Design unter Verwendung der UML

---

Beim objektorientierten Entwurfsprozess werden Objektklassen und die Beziehungen zwischen diesen Klassen entworfen. Diese Klassen definieren die Objekte im System und ihre Interaktionen. Zu den Objekten gehören sowohl Daten als auch Operationen zur Bearbeitung dieser Daten, und oft gibt es eine klare Zuordnung zwischen realen Entitäten und den sie steuernden Objekten im System.
Der Entwurf ist kein klar umrissener, sequentieller Prozess. Daher entwickelt man einen Entwurf, indem man Ideen sammelt, Lösungen vorschlägt und diese Lösungen verfeinert, wenn neue Informationen verfügbar werden.

Um ein Systemdesign vom Konzept zum detaillierten, objektorientierten Design zu entwickeln, muss man:

1. Der Kontexts und die externe Interaktionen mit dem System verstehen und definieren.
2. Die Systemarchitektur entwerfen.
3. Die wichtigsten Objekte im System identifizieren.
4. Entwurfsmodelle entwickeln.
5. Schnittstellen spezifizieren.

Der objektorientierte Softwareentwurf wird in diesem Kapitel anhand der Entwicklung eines Entwurfs für einen Teil der eingebetteten Software für die in Kapitel 1 vorgestellte Wetterstation für die Wildnis erläutert.

---

### 7.1.1 Systemkontext und Interaktionen

---

Der erste Schritt in jedem Softwareentwicklungsprozess besteht darin, ein Verständnis für die Beziehungen zwischen der zu entwickelnden Software und ihrer externen Umgebung zu entwickeln. Dies ist wichtig für die Entscheidung, wie die erforderliche Systemfunktionalität bereitgestellt und wie das System für die Kommunikation mit seiner Umgebung strukturiert werden soll.
Ein Systemkontextmodell ist ein Strukturmodell, das die anderen Systeme in der Umgebung des zu entwickelnden Systems darstellt. Es kann mit Hilfe von Assoziationen dargestellt werden, die zeigen, dass es einige Beziehungen zwischen den an der Assoziation beteiligten Entitäten gibt.

![image](https://user-images.githubusercontent.com/58107983/163242011-39596cc7-e94c-4597-b1d8-af4ff9fcd91a.png)
**Abbildung 7.1 - Systemkontext für die Wetterstation [1]**

Abbildung 7.1 zeigt, dass es sich bei den Systemen in der Umgebung jeder Wetterstation um ein Wetterinformationssystem, ein Satellitensystem an Bord und ein Steuerungssystem handelt. Die Kardinalitätsinformation auf dem Link zeigt, dass es ein einziges Steuerungssystem gibt, aber mehrere Wetterstationen, einen Satelliten und ein allgemeines Wetterinformationssystem.

Ein Interaktionsmodell ist ein dynamisches Modell, das zeigt, wie das System mit seiner Umgebung interagiert, während es benutzt wird. Wenn Sie die Interaktionen eines Systems mit seiner Umgebung modellieren, sollten Sie einen abstrakten Ansatz verwenden, der nicht zu viele Details enthält. Eine Möglichkeit, dies zu tun, ist die Verwendung eines Anwendungsfallmodells.

---

### 7.1.2 Architektur-Design

---

---

### 7.1.3 Identifizierung der Objektklasse

---

---

### 7.1.4 Design Modelle

---

---

### 7.1.5 Schnittstellenspezifikation

---

---

## 7.2 Entwurfsmuster

---

---

## 7.3 Implementierungsfragen

---

---

### 7.3.1 Wiederverwendung

---

---

### 7.3.2 Konfigurationsmanagement

---

---

### 7.3.4 Host-Target-Entwicklung

---

---

## 7.5 Open-Source-Entwicklung

---

---

### 7.5.1 Open-Source-Lizenzierung

---

---

## Referenzen

---

[1]: Ian Sommerville. 2015. Software Engineering (10th. ed.), 196-225.
