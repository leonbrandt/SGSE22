Service-orientiertes Software-Engineering
=========================================

**Autor:** Christoph Raitzig

Sofern nicht anders gekennzeichnet, stammen die hier dargelegten Informationen aus *Software Engineering* von Ian Sommerville [1].

Einleitung
----------

Web-Services haben folgende Eigenschaften:
 * loosely coupled
 * einsetzbar als wiederverwendbare Komponente
 * kann von Programmen ausgewertet werden
 * wird mit Standard-Internetprotokollen oder XML-Protokollen angesprochen
Im Gegensatz zu Software-Komponenten sind Services unabhängig von den Anwendungen, welche diesen verwenden.

Beim Service-orientiert entwickelten Systemen ist das System distributiert, d.h. auf mehrere geographisch getrennte Computer verteilt, und jeder dieser Computer stellt einen Service zur Verfügung.

Durch den Einsatz von Standard-Protokollen ist die Zusammenstellung von Systemen aus Services unterschiedlicher Anbieter möglich. Zudem kann ein Service-Anbieter die Fähigkeiten und Details zur Benutzung öffentlich bekannt machen, wodurch diese Services ohne intensiven Kontakt zum Anbieter eingesetzt werden können - der Service muss nicht erst in Zusammenarbeit mit dem letztlichen Anbieter speziell für das Software-System entwickelt werden.

Einsatzszenarien:
 * Durch die Zusammensetzung von Services können schnell neue Möglichkeiten gefunden und realisiert werden.
 * Vereinfachte/automatisierte Zusammenarbeit von Unternehmenspartnern, indem die Unternehmen die Services der anderen Unternehmen ansprechen.

RESTful Services
----------------

RESTful Services sind Web-Services, bei denen es Ressourcen gibt. Diese werden durch eine URL identifiziert. Im Allgemeinen können die Standard-CRUD-Methoden verwendet werden, wobei diese i.d.R. durch die HTTP-Anfragemethode repräsentiert werden: POST für Create, GET für Read, PUT für Update und DELETE für DELETE.
RESTful Services können unterschiedliche Formate für die Daten verwenden. Das ist ein Unterscheidungsmerkmal zum weiter unten diskutierten SOA, welches nur XML erlaubt. Neben XML ist JSON ein wichtiges Daten-Format.

SOA
---

Service Oriented Architecture (SOA) ist ein Pattern, um Service-Orientierte Software zu entwickeln.
Bei SOA kann es unterschiedliche Implementierungen geben, welche als Service zur Verfügung stehen. Zwischen diesen kann dadurch zur Laufzeit ausgewählt werden.
Für SOA wurden unterschiedliche Standards entwickelt, welche innerhalb der SOA-Infrastruktur zum Einsatz kommen. Im Allgemeinen werden XML-Technologien verwendet. Mit dem Protokoll SOAP können Meta-Informationen über die Services ausgetauscht werden
Die Services werden über eine *Service Registry* gefunden. Dort  *Service Provider* ihre Services

SOA hat in den letzten Jahren an Bedeutung verloren, anstatt dessen kommen zunehmend RESTful Services zum Einsatz. Durch die geringere Standardisierung und die einfache Verarbeitung auf Client-Seite (was zur Anfangszeit der Smartphones wichtig war, da diese nur wenig Rechenleistung hatten) hat REST an Popularität gewonnen.

Service-Komposition
-------------------

Eine der Stärken des Service-orientierten Software-Engineerings ist, dass mehrere Services zu einem neuen Service kombiniert werden können.
Beispielsweise können Prozesse, die aus mehreren Schritten bestehen, durch die Kombination von mehreren Services realisiert werden. Die einzelnen Schritte werden jeweils durch einen Service ausgeführt, wodurch ein Workflow entsteht. Die Services haben Ein- und Ausgaben, welche vom vorherigen Service stammen bzw. an den nächsten weitergegeben werden.
Bei der Kombination von Services muss besonders auf Ausnahmesituationen geachtet werden. Wenn eine Anfrage an einen Service nicht gelingt (z.B. wird 500 Internal Server Error zurückgegeben) muss definiert sein, was passiert - es kann nicht einfach der nächste Service des Workflows abgefragt werden. Wenn die Ausnahme nicht technischer Natur, sondern sich aus dem zu lösenden Problem selbst ergibt, ist die Ausnahmebehandlung noch komplexer. Es kann dann sein, dass eine Aktion aus einem vorherigen Schritt rückgängig gemacht werden muss bzw. bestimmte Teilprozesse erneut ausgeführt werden müssen.
Die Kombination von Services kann mit folgenden sechs Schritten durchgeführt werden:
1. Workflow planen. Dieser Plan idealisiert, welche Services zur Verfügung stehen und deren Verhalten und muss ggf. während der weiteren Schritte angepasst werden.
2. Services entdecken, z.B. innerhalb des eigenen Unternehmens oder bei externen Service-Anbietern.
3. Auswahl aus den entdeckten Services treffen, welche im Workflow eingesetzt werden sollen.
4. Workflow auf Basis der in den beiden vorherigen Schritten herausgefundenen Informationen überarbeiten.
5. Programm/Service für den Workflow implementieren.
6. Programm/Service testen.
Für den ersten Schritt kann ein Modell des Workflows in Form eines UML-Diagrammes oder in BPMN (Business Process Modeling Notation) erstellt werden.
Beim Testen des Services gibt es häufig Einschränkungen gegenüber dem Testen anderer Software-Systeme, da externe Services nicht unter der vollständigen Kontrolle des Benutzers sind und deren Source Code nicht immer verfügbar ist. Zudem kann ein Service eines externen Anbieters zu einem zukünftigen Zeitpunkt nicht mehr existieren, wodurch vorherige Tests an Aussagekraft verlieren. Die Benutzung von externen Services kann kostenintensiv sein, wodurch das Testen teuer ist. Ausnahmesituationen zu Testen stellt auch eine Herausforderung da, da diese Situation nicht immer absichtlich erzeugt werden können. Ein Service kann auf unerwartete Weise fehlschlagen.

Service-Engineering
-------------------

Wie wiederverwendbare Services entwickelt werden ist Thema des Service-Engineering. Beim Service-Engineering gibt es drei Schritte:
1. Identifizieren der möglichen Services
2. Design des Service-Interfaces
3. Service-Implementierung und Deployment

### Service-Identifikation
Ziel der Service-Identifikation ist es, eine Menge von Services zu finden so wie dessen funktionale (was die Services tun) und nicht-funktionale (Sicherheit, Leistung) Anforderungen herauszuarbeiten.
Hier werden folgende Arten von Services betrachtet:
1. *Utility services*: Allgemein nützlicher Service.
2. *Business service*: Ein Service, welcher zur Unterstützung einer bestimmten Business-Funktion existiert.
3. *Coordination or process service*: Ein Service, welcher zur Unterstützung einer bestimmten Business-Capability existiert. Diese Services können mehrere Business-Funktionen umfassen sowie unterschiedliche Aktoren. Sie sind in der Regel komplexer als Business-Services.
Neben diesen Arten können Services *entity-oriented* oder *task-oriented* sein. *Entity-oriented* Services befassen sich mit einer Ressource und *task-oriented* Services mit einer Aufgabe.
Je nach Einsatzgebiet ist eine unterschiedliche Art von Service passend. Es können auch mehrere Services Sinn ergeben, z.B. ein Business-Service, welcher mehrere Utility-Services nutzt. Durch Betrachtung der Unternehmensprozesse können Einsatzmöglichkeiten für Services gefunden werden.
Nachdem Einsatzgebiete für Services identifiziert wurden, müssen die Services so identifiziert/strukturiert werden, dass diese unabhängig voneinander, wiederverwendbar und als ganzes sinnvoll Sinn (d.h. dass die Services gut zusammenarbeiten und sich deren Funktionalitäten nicht überlappen).
Bei der Identifikation von Services kann es hilfreich sein, sich folgende Fragen zu stellen:
- Für *entity-oriented* Services: Ist der Service mit einer einzigen Ressource, die in mehreren Business-Prozessen verwendet wird, assoziiert? Welche der CRUD-Operationen müssen unterstützt werden?
- Für *task-oriented* Services: Falls die Aufgabe mehrere Aktoren im Unternehmen betrifft, werden diese Aktoren zusammenarbeiten und die mit Einführung des Services benötigte Standardisierung annehmen?
- Ist der Service unabhängig bzw. in wie weit ist er von anderen Services abhängig?
- Ist der Service stateful? Wie muss der Zustand verwaltet werden (z.B. mit einer Datenbank)?
- Wird der Service auch von externen Kunden oder Partnern benutzt?
- Haben die unterschiedlichen Aktoren womöglich unterschiedliche nicht-funktionale Anforderungen an den Service?

### Service-Interface-Design
Ziel des Service-Interface-Designs ist es, die Operationen, welche der Service unterstützen muss, zu identifizieren. Dazu gehören auch die Parameter der Operationen.
Zum Interface-Design gehört unter anderem die Struktur der Anfrage-Daten. Z.B. wird spezifiziert, wie die JSON-Objekte aufgebaut sind.

### Service-Implementierung und -Deployment
Neben der Implementierung in einer bestimmten Programmiersprache und ggf. mit einem bestimmten Framework gehört zu diesem Schritt das Testen der Service-Software.
Beim Deployment wird der Service mit Servern verfügbar gemacht. Je nach Programmiersprache und benutztem Framework sind die Details des Deployments anders. Zudem muss die Dokumentation des Services den Benutzern zur Verfügung gestellt werden.

## Referenzen

[1]: Sommerville, I. (2015). Software engineering 10th Edition. ISBN-10, 137035152, 18. S. 520-547
