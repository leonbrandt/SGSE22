# Dependable systems

**Autor:** Maxim Fründt

## 10 Einführung

Durch die hohe Bedeutung, die Software in unserem alltäglichem Leben hat, ist es von großer Wichtigkeit, dass man sich auf diese verlassen kann. Man spricht auch von der Dependability (=Zuverlässigkeit) von Software(-Systemen). Die Software sollte nicht nur immer zur Verfügung stehen, wenn sie benötigt wird, sondern korrent und ohne Seiteneffekte funktionieren.

Die Zuverlässigkeit von Systemen ist in der Regel wichtiger als die Gesamtheit an Funktion dessen, hauptsächlich aus folgenden Gründen:
- Oft ist es verkraftbar wenn eine Funktion des Systems ausfällt, solange das System weiter verfügbar ist
- Unzuverlässliche oder unsichere Systeme werden von Benutzern abgelehnt, diese Ablehnung kann sich auch auf andere Produkte des Unternehmens auswirken
- Die Kosten eines Ausfalls können je nach Anwendung immens hoch sein
- Unzuverlässige Systeme können zu Datenleaks oder Datenverlust führen

Systeme können auch ohne hohe Zuverlässigkeit nützlich sein, jedoch wird in diesem Fall von außen versucht dies zu kompensieren. Beispielsweise wird ein Privatnutzer seine Daten regelmäßig Backupen, um diese nicht durch einen Softwarefehler auf dem Gerät zu verlieren.

Um ein zuverlässiges System Designen zu können, muss mehr als nur die Software betrachtet werden. Die ausführende Hardware und der bedienede Nutzer spielen auch einen Faktor in der Zuverlässigkeit des Systems, folglich unterscheidet man zwischen

- Hardware-Fehler, welche durch einen Designfehler, einem Herstellungsfehler, einem Fehler durch die Umgebung oder durch erreichen des Endes der Lebenszeit auftreten können
- Software-Fehler, welche durch Fehler in der Spezifikation, dem Design oder der Implementierung der Software auftreten können
- Menschliche-Fehler, welche durch nicht vorhergesehene Bedienung der Software entstehen können
