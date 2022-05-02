# Dependable systems

**Autor:** Maxim Fründt

## Einführung

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

## Dependability properties (Eigenschaften der Dependability)

Die Dependability eines Systems beschreibt wie viel Vertrauen man in das System hat, dass es unter normalen Bedingungen seine Aufgabe erfüllt, ohne in einen Fehlerzustand überzugehen. Quantifiziert wird die Dependability nicht in zahlen sondern Beschreibungen wie beispielsweise "nicht zuverlässig", "sehr zuverlässig", "extrem zuverlässig".
Die Dependability eines Systems wird hauptsächlich durch fünf Eigenschaften beeinflusst. Diese sind im folgenden aufgelistet und in Abbildung 10.1 visualisiert.

- Availability (Verfügbarkeit), welche die Wahrscheinlichkeit darstellt, dass das System erreichbar ist und dem Benutzer seine Dienste zur verfügung stellen kann
- Reliability (Verlässlichkeit), ist die Wahrscheinlichkeit über eine festgelegte Zeit, dass das System seine Dienste korrekt zur Verfügung stellen kann
- Safety (Sicherheit in Hinsicht auf Schaden auf die Umgebung), ist die Wahrscheinlichkeit, dass das System Schaden am Mensch oder der Umwelt anrichtet
- Security (Sicherheit in Hinsicht auf Verteidigung gegen Eindringen), ist eine Beurteilung, wie wahrscheinlich es ist, dass das System absichtlichen oder unabsichtlichen Sicherheitsverstößen widerstehen kann
- Resilience (Widerstandfähigkeit), ist eine Beurteilung, wie gut das System seine kritischen Komponenten aufrechterhalten kann, während Störungen vorliegen wie der Ausfall von Komponenten oder Cyberangriffe

Nicht jede Eigenschaft ist zwingend für jedes System kritisch. Beispielsweise ist für eine Insulinpumpe die Security weniger wichtig, als die Reliability. Die Pumpe muss jederzeit ordnugnsgemäß funktionieren, speichert jedoch keine vertraulichen Daten.

|![](assets/PrincipleDependabilityProperties.png)|
|:--:| 
| *Abbildung 10.1: Haupteigenschaften der Dependability eines Systems* |

Zusätzlich gibt es weitere Systemeigenschaften, welche dessen Dependability beeinflussen.

- Repairability (Reparierbarkeit), welche beschreibt wie einfach das System reparierbar ist. Probleme im System müssen diagnostiziert werden können und die fehlerhafte Komponente muss erreichbar und anpassbar sein
- Maintainability (Wartbarkeit), welche beurteilt, wie gut das System an neue Gegebenheiten angepasst werden kann ohne neue Fehler im System einzufügen
- Error tolerance (Fehlertoleranz), beschreibt wie umfangreich das System gegen Fehleingaben geschützt ist

Um zuverlässige Software designen zu können muss folgendes berücksichtigt werden:
- Das Einbringen von versehentlichen Fehlern in der Software-Spezifikation und -Entwicklung ist zu vermeiden
- Verzifizierungs- und Validierungsprozesse, welche effektiv Restfehler aufspühren, die die Dependability der Software beeinflussen, müssen definiert werden
- Das System muss tolerant gegenüber Fehlern sein, sodass es auch im Fehlerfall weiter arbeiten kann
- Schutzmechanismen gegen externe Angriffe, welche die Availability oder Security beeinträchtigen, müssen designt werden.
- Das eingesetzte System und zusätzliche benötigte Software muss korrekt konfiguriert werden
- Fähigkeiten um externe Angriffe zu erkennen und ihnen zu widerstehen müssen im System vorgesehen werden
- Das System muss so designt werden, dass es sich schnell von Systemausfällen und Angriffen erholen kann, ohne kritische Daten zu verlieren

**Performance**
Um Fehlertoleranz gewährleisten zu können, muss redundanter Code implementiert werden, wodurch die Performance des Systems beeinträchtigt wird. Im Design des Systems muss also eine Balance aus Performance und Sicherheit, welche für das System adäquat ist, gefunden werden.

**Kosten**
Der Designprozess eines zuverlässigen Systems ist teurer. Neben der tatsächlichen Entwicklung müssen mehr Ressourcen für das Aufspühren von Fehlern und der Implementierung von Redundanz aufgebracht werden. Die Kosten steigen je nach Dependability-Level exponentiell an.

## Soziotechnische Systeme

Software und Hardware sind in Computersystemen voneinander abhängig. Zusammen formen sie ein System, welches komplexe Berechnungen ausführen und weitergeben kann. Dadurch folgt auch, dass Software Engineering keine für sich alleinstehende Aktivität ist, sondern ein Teil von Systems Engineering. 
Systeme sind in der Regel dazu ausgelegt der Gesellschaft einen Mehrwert zu bringen. Beispielsweise werden Wetterstationen von Organisationen ausgewertet, um eine vorhersage über das Wetter treffen zu können, wovon die Allgemeinheit profitiert. Systeme welche über die technischen Elemente hinausgehen, wie die im Beispiel genannte Organisation, welche die Daten der Wetterstationen auswertet, werden als soziotechnische Systeme bezeichnet. Soziotechnische Systeme sind komplex, dadurch werden sie in mehrere Schichten eingeteilt. Jedoch ist es auch wichtig das System als ganzes zu betrachten. Ein Fehler in der Software kann eventuell schnell behoben werden, der Einfluss auf die anderen Ebenen kann jedoch bleibende Schäden nach sich ziehen. In Abbildung 10.3 ist der Schichtenaufbau eines soziotechnischen Systems dargestellt und das Systems und Software Engineering den betroffenen Schichten zugewiesen. Da Software eine wichtige Rolle in jeder Ebene des Systems darstellt, gibt es keine ausdrückliche Softwareebene.

|![](assets/SociotechnicalSystemsStack.png)|
|:--:| 
| *Abbildung 10.3: Schichtenaufbau eines soziotechnischen Systems* |

- Hardwareebene: Stellt die Hardware des Systems dar
- Betriebssystemebene: Stellt eine Schnittstelle zwischen der höheren Softwarebene und der Hardware dar
- Kommunikations und Datenebene: Oft auch Middleware genannt, erweitert diese Ebene die Betriebssystemebene um Funktionalitäten wie zugriff auf Datenbanken und Remotesysteme
- Applikationsebene: Stellt die applikationsspezifischen Funktionen des Systems dar
- Geschäftsprozessebene: Beinhaltet die geschäftsspezifischen Funktionalitäten des Systems
- Organisationsschicht: Beinhaltet Strategien, Regeln, Vorschriften und Normen der Organisation, welche befolgt werden müssen
- Sozialebene: Stellt die Gesetze und Vorschriften der Gesellschaft dar, welche befolgt werden müssen

Die Ebenen sollen so aufgebaut werden, dass eine Ebene nur mit ihren direkten Nachbarn interargieren kann. Alle weiteren Ebenen sollen durch die Nachbarn abstrahiert werden. Das ist jedoch nicht immer möglich. Wenn beispielsweise neue Gesetze erlassen werden (Sozialebene) müssen eventuell Änderungen in den untersten Schichten vorgenommen werden.

Beim Design der Software muss stets das gesamte System im Blick behalten werden. Um andere Komponenten des Systems vor Fehlern in der Software zu schützen. Ein Softwarefehler darf nie zum Systemausfall führen sondern muss innerhalb seiner Ebene isoliert werden.

## Redundanz und Diversität

Obwohl viele Maßnahme getroffen werden, um Fehler im System zu vermeiden, können sie nie ausgeschlossen werden. Aus diesem Grund ist es wichtig, dass ein Fehler nicht zu einem Totalausfall des Systems führt. Methoden gegen einen Totalausfall im Fehlerfall beinhalten Redundanz (d. h. Komponenten werden in mehrfacher Ausführung eingesetzt) und Diversität (d. h. die redundanten Komponenten sind nicht dieselben). Bei der Verbindung von Redundanz und Diversität spricht man auch von diversitärer Redundanz. Als beispiel sollten persönliche Daten gesichert werden. Durch die Kopie der Daten erhält man eine Redundanz. Die Kopie sollte jedoch auf einem anderen Medium gesichert werden, wodurch man eine Diversität erreicht. Im gleichen Sinne sind Systeme, welche eine hohe Availability erreichen wollen oft mit mehreren Servern ausgestattet, welche unterschiedliche Hardware aufweisen.
Redundanz und Diversität werden auch im Prozess der Softwareentwicklung eingesetzt. So werden Probleme beispielsweise auf verschiedene Arten gelöst und das Ergebnis verglichen oder dieselbe Aufgabe von verschiedenen Entwicklern gelöst und verglichen. Solche Methoden führen jedoch zu höheren Entwicklungskosten. 
Neben höheren Kosten führen Redundanz und Diversität zudem zu komplexeren Systemen, wodurch die Möglichkeit, dass Fehler auftreten wieder steigt. Aus diesen Gründen sind manche Entwickler der Meinung, dass Software Redundanz und Diversität vermeiden sollte und besser so einfach wie Möglich gehalten wird und dafür mehr Ressourcen in die Verifikation und Validierung fließen sollen.

## Zuverlässige Prozesse

