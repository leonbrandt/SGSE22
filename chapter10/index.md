# Dependable systems

**Autor:** Maxim Fründt

## 10 Einführung

Durch die hohe Bedeutung, die Software in unserem alltäglichem Leben hat, ist es von großer Wichtigkeit, dass man sich auf diese verlassen kann. Man spricht auch von der Dependability (Zuverlässigkeit) von Software(-Systemen). Die Software sollte nicht nur immer zur Verfügung stehen, wenn sie benötigt wird, sondern korrent und ohne Seiteneffekte funktionieren. Um die Doppeldeutigkeit der Begriffe zu umgehen, wird im Folgenden der englische Begriff verwendet, bei Erstnennung wird eine Übersetzung dazu geschrieben.

Die Dependability von Systemen ist in der Regel wichtiger als die Gesamtheit an Funktion dessen, hauptsächlich aus folgenden Gründen:
- Oft ist es verkraftbar wenn eine Funktion des Systems ausfällt, solange das System weiter verfügbar ist
- Unzuverlässliche oder unsichere Systeme werden von Benutzern abgelehnt, diese Ablehnung kann sich auch auf andere Produkte des Unternehmens auswirken
- Die Kosten eines Ausfalls können je nach Anwendung immens hoch sein
- Unzuverlässige Systeme können zu Datenleaks oder Datenverlust führen

Systeme können auch ohne hohe Dependability nützlich sein, jedoch wird in diesem Fall von außen versucht dies zu kompensieren. Beispielsweise wird ein Privatnutzer seine Daten regelmäßig Backupen, um diese nicht durch einen Softwarefehler auf dem Gerät zu verlieren.

Um ein zuverlässiges System Designen zu können, muss mehr als nur die Software betrachtet werden. Die ausführende Hardware und der bedienede Nutzer spielen auch einen Faktor in der Dependability des Systems, folglich unterscheidet man zwischen

- Hardware-Fehler, welche durch einen Designfehler, einem Herstellungsfehler, einem Fehler durch die Umgebung oder durch erreichen des Endes der Lebenszeit auftreten können
- Software-Fehler, welche durch Fehler in der Spezifikation, dem Design oder der Implementierung der Software auftreten können
- Menschliche-Fehler, welche durch nicht vorhergesehene Bedienung der Software entstehen können

## 10.1 Dependability properties (Eigenschaften der Dependability)

Die Dependability eines Systems beschreibt wie viel Vertrauen man in das System hat, dass es unter normalen Bedingungen seine Aufgabe erfüllt, ohne in einen Fehlerzustand überzugehen. Quantifiziert wird die Dependability nicht in zahlen sondern Beschreibungen wie beispielsweise "nicht zuverlässig", "sehr zuverlässig", "extrem zuverlässig".
Die Dependability eines Systems wird hauptsächlich durch fünf Eigenschaften beeinflusst. Diese sind

- Availability (Verfügbarkeit), welche die Wahrscheinlichkeit darstellt, dass das System erreichbar ist und dem Benutzer seine Dienste zur verfügung stellen kann
- Reliability (Verlässlichkeit), ist die Wahrscheinlichkeit über eine festgelegte Zeit, dass das System seine Dienste korrekt zur Verfügung stellen kann
- Safety (Sicherheit in Hinsicht auf Schaden auf die Umgebung), ist die Wahrscheinlichkeit, dass das System Schaden am Mensch oder der Umwelt anrichtet
- Security (Sicherheit in Hinsicht auf Verteidigung gegen Angriffe), ist eine Beurteilung, wie wahrscheinlich es ist, dass das System absichtlichen oder unabsichtlichen Störungen widerstehen kann
- Resilience (Widerstandfähigkeit), ist eine Beurteilung, wie gut das System seine kritischen Komponenten aufrechterhalten kann, während Störungen vorliegen wie der Ausfall von Komponenten oder Cyberangriffe

Nicht jede Eigenschaft ist zwingend für jedes System kritisch.

|![](assets/PrincipleDependabilityProperties.png)|
|:--:| 
| *Abbildung 10.1: Haupteigenschaften der Dependability eines Systems* |