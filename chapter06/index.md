# Architectural Design

**Autor:** Leon Brandt

---

Status dieses Dokuments:

- [ ] Gesamtinhalt stichpunktartig wiedergeben (WIP, ~ 50 %, bis Sa, 30.04.)
- [ ] Stichpunkte verdichten + strukturieren (bis So, 31.04.)
- [ ] Fließtext erzeugen (bis Fr, 06.05.)

---

# Einleitung

## Definition

- Architectural design befasst sich mit der Organisation und dem Entwurf der Struktur von Softwaresystemen
- (Erster Prozesschritt im Prozess aus Chapter 2)
- Architectural design ist das Bindeglied zwischen Design und Requirements engineering
- Architectural design identifiziert die strukturellen Hauptkomponenten eines Systems sowie die Beziehungen dieser
- Architectural design erzeugt als Artefakt ein Architectural model
	- Dieses beschreibt die Organisation eines Systems als Menge von kommunizierenden Komponenten

## Motivation

- Agile Prozesse: Üblich, dass früh im Entwicklungsprozess ein Fokus auf das Design des Gesamtsystems gelegt wird
- Inkrementelles Entwickeln von Architekturen ist üblicherweise nicht erfolgreich
- Refactoring einzelner Komponenten ist üblicherweise relativ einfach
- Refactoring einer Systemarchitektur ist "teuer", weil möglicherweise ein Ändern (der meisten) Komponenten erforderlich wird

## Artefakt: Architectural model

- [Beispiel für Architectural model]

## Abgrenzung zu Requirements engineering

- Praxis: Große Schnittmenge zwischen Requirements engineering und Architectural design
- Idealfall: Systemspezifikation enthält keine Designinformationen
	- Unrealistisch, da Hauptkomponenten einer Architektur High-Level-Features eines Systems repräsentieren
- Teil des Requirements engineering kann das Erzeugen einer abstrakten Systemarchitektur sein
	- Systemfeatures werden zu abstrakten Komponenten oder Subsystemen gruppiert

## Abstraktionsebenen

- Softwarearchitekturen können auf zwei Abstraktionsebenen betrachtet werden:
	- **Architecture in the small**
		- Architektur individueller Programme (Dekomposition dieser in Komponenten)
		- (Fokus dieses Kapitels)
	- **Architecture in the large**
		- Architektur komplexer Systeme aus anderen Systemen, Programmen und Programmkomponenten
		- Diese sind möglicherweise verteilt
		- (Chapter 17, 18)

## Relevanz

- (Das explizite Erzeugen von) Softwarearchitekturen ist wichtig, weil:
	- Dies die Performance, Robustness, Distributability, Maintainability eines Systems beeinflusst (Bosch 2000)
		- Individuelle Komponenten implementieren die funktionalen Anforderungen eines Systems
		- Der dominante Einflussfaktor auf nicht-funktionale Anforderungen eines Systems ist seine Systemarchitektur
			- (Bestätigt durch Studie (Chen 2013))
	- Das explizite Designen und Dokumentieren von Softwarearchitekturen folgende Vorteile hat (Bass 2012)
		- Stakeholder communication
			- Eine High-Level-Repräsentation eines Systems kann zur Diskussion mit diversen Stakeholdern genutzt werden
		- System analysis
			- Ein explizites Benennen einer Systemarchitektur erfordert Analyse
			- Architectural design decisions haben einen tiefgreifenden Effekt auf Anforderungen wie Performance, Reliability, Maintainability
		- Large-scale reuse
			- Systemarchitekturen sind für Systeme mit ähnlichen Anforderungen häufig gleich
			- Architectural models können für Systeme mit ähnlichen Anforderungen wiederverwendet werden
			- (Chapter 15)

## Formalität von Architectural models

- Systemarchitekturen werden häufig informell durch einfache Blockdiagramme modelliert
	- Kästen repräsentieren Komponenten
	- Kästen in Kästen repräsentieren Komponenten, die in Subkomponenten zerlegt werden
	- Pfeile repräsentieren den Fluss von Daten oder Kontrollsignalen

---

- Blockdiagramme stellen eine High-Level-Betrachtung einer Systemstruktur dar
- Menschen verschiedener Disziplinen (die im Softwareentwicklungsprozess involviert sind) können diese verstehen
- Entgegen dem weitverbreiteten Einsatz argumentieren Bass et. al. gegen dein Einsatz von Blockdiagrammen zur Beschreibung von Softwarearchitekturen (Bass 2012)
	- Informelle Darstellungen sind schlechte Repräsentationen von Softwarearchitekturen
		- Sie stellen die Typen von Beziehungen zwischen Komponenten nicht dar
		- Sie stellen die von außen sichtbaren Eigenschaften von Komponenten nicht dar

---

- Der Widerspruch zwischen Theorie und Praxis entsteht, weil zwei Arten der Verwendung von Architectural models existieren
	- "As a way of encouraging discussions about the system design"
		- -> Kommunikationshilfe im Designprozess
		- High-Level-Repräsentationen von Systemen ist nützlich für die Kommunikation mit Stakeholdern und die Projektplanung
			- Diese sind nicht überladen mit Details
			- Stakeholder erhalten ein Verständis über eine abstrakte Betrachtung des Systems
			- Es kann über das System in Gänze diskutiert werden, ohne Verwirrung durch Details zu erzeugen
			- Hauptkomponenten sind einfach zu identifizieren, sodass Manager die Entwicklung dieser planen können
	- "As a way of documenting an architecture that has been designed"
		- -> Dokumentation
		- Ziel: Erzeugen eines vollständigen Systemmodells
		- Dieses zeigt alle Komponenten sowie deren Interfaces und Verbindungen
		- Detaillierte Beschreibungen von Architekturen erleichtern das Verständis sowie die Weiterentwicklung von Systemen

---

- Blockdiagramme sind ein guter Weg, um Kommunikation zwischen allen im Softwaredesignprozess involvierten Personen zu ermöglichen
- Blockdiagramme sind intuitiv
	- Domainexperten sowie Softwareingenieure können an Diskussionen über das System teilnehmen
- Blockdiagramme helfen Managern Projekte zu planen
- In vielen Projekten stellen Blockdiagramme die einzige Architekturbeschreibung dar

---

- Wenn es erforderlich ist, eine Architektur im Detail zu dokumentieren, ist eine strengere Notation besser
- Es existieren verschiedene Architectural description languages (Bass 2012)
- Höherer Detailgrad, Vollständigkeitsgrad = Weniger Raum für Missverständnisse von Beziehungen zwischen Komponenten
- Erzeugen einer detaillierten Architekturdokumentation ist "teuer" und zeitaufwendig
- Es ist praktisch nicht möglich zu messen ob dies Kosteneffektiv ist, deshalb ist dieser Ansatz nicht weit verbreitet

# Architectural Design Decisions

## Prozess

- Architectural design ist ein kreativer Prozess
- Es wird die Organisation eines Systems designed, sodass funktionale und nicht-funktionale Anforderungen an das System erfüllt werden
- Es existiert kein "formelhafter" (formulaic) Prozess
- Der Prozess hängt ab von:
	- Dem Typ des zu entwickelnden Systems
	- Dem Hintergrund und der Erfahrung des Systemarchitekts
	- Spezifische Anforderungen an das System
- Architectural design = Serie an Entscheidungen zu treffen; Nicht: Sequenz von Aktivitäten

---

- Während des Architectural design process müssen Systemarchitekten eine Reihe an "strukturellen Entscheidungen" (structural decisions) treffen
- Diese haben tiefgreifende Auswirkungen auf das System und den Entwicklungsprozess
- In Abhängigkeit zu ihrem Wissen und ihrer Erfahrung haben sich Systemarchitekten folgende Fragen zu stellen [Figure 6.2]


## Fragestellungen

- Is there a generic application architecture that can act as a template for the system that is being designed?
- How will the system be distributed across hardware cores or processors?
- What Architectural patterns or styles might be used?
- What strategy will be used to control the operation of the components in the system?
- How should the architecture of the system by documented?
- What architectural organization is best for delivering the non-functional requirements of the system?
- How will the structural components in the system be decomposed into sub-components?
- What will be the fundamental approach used to structure the system?

---

- Systeme in der selben Anwendungsdomäne besitzen häufig eine ähnliche Architektur
	- Diese reflektiert die fundamentalen Konzepte der Anwendungsdomäne
- Beim Design von Systemarchitekturen ist zu Entscheiden, was das System mit breiteren Klassen an Anwendungen gemeinsam hat
	- "Wie viel Wissen kann aus diesen Anwendungen wiederverwendet werden?"

---

- Die meisten großen Systeme sind verteilt (Software ist verteilt über viele verschiedene Computer)
	- Die Auswahl einer Verteilungsarchitektur hat wesentliche Auswirkungen auf Performance und Reliability des Systems (Chapter 17)

---

- Die Architektur eines Systems basiert möglicherweise auf einem Pattern oder Style
- Ein Architectural pattern ist die Beschreibung der Organisation eines Systems, wie Client-Server oder Layered architecture (Garlan 1993)
- Architectural pattern beschreiben die wesentlichen Eigenschaften einer Architektur, welche in verschiedenen Softwaresystemen wiederverwendet wird

---

- Architectural style = Fragen 4-6
- ...


## Nicht-funktionale Anforderungen an Systeme

- Aufgrund der engen Beziehung zwischen nicht-funktionalen Anforderungen an ein System und Softwarearchitektur sollte die Wahl des Architectural style und architectural structure von nicht-funktionalen Anforderungen abhängen

---

- Performance
	- Wenn Performance eine kritische Anforderung ist:
		- Die Architektur sollte kritische Operationen auf eine geringe Anzahl an Komponenten lokalisieren (keine Verteilung)
			- Das kann weniger, größere anstatt viele feingranulare Komponenten bedeuten
			- Große Komponenten reduzieren Kommunikation zwischen Komponenten
		- Parallelisierung auf mehreren Prozessoren sollte in Erwägung gezogen werden
- Security
	- Wenn Security eine kritische Anforderung ist:
		- Layered Structure
			- Kritische Assets weiter innen
			- Hoher Grad an Security-Validierung innerhalb der Layer
- Safety
	- Wenn Safety eine kritische Anforderung ist:
		- Safety-relevante Vorgänge sollten in einer gemeinsamen Komponente oder in einer geringen Anzahl an Komponenten stattfinden
			- Reduziert Kosten und Probleme hinsichtlich Validierung
			- Ermöglicht verbundene Schutzsysteme, welche im Fehlerfall sicher abgeschaltet werden können
- Availability
	- Wenn Availability eine kritische Anforderung ist:
		- Redundante Komponenten
			- Ermöglicht Ersetzen und Aktualisieren von Komponenten ohne Downtime
		- (Chapter 11)
- Maintainability
	- Wenn Maintainability eine kritische Anforderung ist:
		- Fein-Granulare, Self-Contained (unabhängige) Komponenten
		- Producers von Daten sollten von Consumers getrennt sein
		- Verteile Datenstrukturen sollten vermieden werden

---

- Es besteht Konfliktpotential zwischen diesen Architekturen
	- Beispiel: große Komponenten verbessern Performance, kleine Komponenten verbessern Maintainability
		- Sollte beides relevant sein, muss ein Kompromiss gefunden werden
			- Anwenden unterschiedlicher Pattern / Styles für unterschiedliche Teile des Systems

---

- Bewertung eines Architekturdesigns ist schwierig, weil:
	- Der Test einer Architektur ist die Genügung des Systems hinsichtlich funktionaler und nicht-funktionaler Anforderung im Betrieb
- Evaluation kann teilweise durch Vergleich eines Architekturdesigns mit Referenzarchitekturen oder Pattern geschehen
- (Bosch beschreibt nicht-funktionale Charakteristiken von Pattern) (Bosch 2000)

# Architectural Views

## Perspektiven auf Architektur

- Zwei Arten der Verwendung von Architectural models
	- Kommunikationshilfe im Designprozess
	- Dokumentation (Als Basis für Design in höherem Detailgrad bzw. Implementierung)
- Probleme / Fragestellungen:
	- Welche Perspektiven sind beim Entwurf und der Dokumentation einer Systemarchitektur nützlch?
	- Welche Notationen sollen für die Beschreibung von Architekturmodellen verwendet werden?

---

- Es ist nicht möglich, alle relevanten Informationen über die Architektur eines Systems in einem einzelnen Diagramm darzustellen
	- Ein graphisches Modell kann nur eine Sichtweise / Perspektive zeigen
		- Es zeigt möglicherweise:
			- Wie ein System in Module zerlegt ist
			- Wie Prozesse zur Laufzeit interagieren
			- Wie Komponenten über ein Netzwerk verteilt sind
		- Alle diese Perspektiven sind nützlich zu unterschiedlichen Zeitpunkten (für Design und Dokumentation)

## 4 Views

- Krutchen schlägt in einem 4+1-view-model of software architecture view fundamentale Architektur-Sichten vor (Krutchen 1995)
	- Logical view
		- Diese zeigt die wesentlichen Abstraktionen innerhalb des Systems als Objekte oder Objektklassen
		- Eine Zuordnung von Systemanforderungen zu Entities sollte möglich sein
	- Process view
		- Diese zeigt wie das System zur Laufzeit aus interagierenden Prozessen zusammengesetzt ist
		- Diese View ist nützlich um nicht-funktionale Charakteristiken wie Performance oder Availability zu beurteilen
	- Development view
		- Diese zeigt wie die Software zur Entwicklung zerlegt ist
		- Komponenten, die von einem einzelnen Entwickler(-team) implementiert werden, sind sichtbar
		- Diese View ist nützlich für Manager und Programmierer
	- Physical view
		- Diese zeigt die Hardware sowie die Verteilung von Komponenten über die Prozessoren im System
		- Diese View ist nützlich für Systemingenieure zur Planung des Deployment

## Conceptual View

- Hofmeister et. al. ergänzen die "Conceptual view" (Hofmeister 2000)
	- Diese ist eine abstrakte Ansicht des Systems, welche genutzt werden kann um High-Level-Anforderungen in detaillierte Spezifikationen zu zerlegen
	- Diese View hift Ingeneuren zu entscheiden, welche Komponenten wiederverwendet werden können
		- Welche Komponenten eine Product line anstatt eines Systems repräsentieren (Chapter 15)
			- (Figure 6.1 ist Beispiel für Conceptual view)

## Praxis

- In der Praxis wird eine Conceptual view meistens innerhalb des Designprozesses erzeugt
- Diese wird genutzt um Stakeholdern die Architektur zu erklären
- Diese hilft Architectural design decisions zu machen
- Innerhalb des Designprozesses werden andere Sichten bei Bedarf erzeugt
- Es ist selten nötig, eine vollständige Beschreibung aller Sichten zu erzeugen

## Formalität (Meinungen)

- Es existieren unterschiedliche Meinungen darüber, ob zur Beschreibung von Softwarearchitekturen UML genutzt werden sollte
- Umfrage: Wenn UML genutzt wird, dann meistens informell (Lange 2006)
	- Autoren argumentieren, dass dies ein Problem darstellt

---

- Meinung (Sommerville):
	- UML wurde entwickelt, um objektorientierte Systeme zu beschreiben
	- Zur Phase des Architekturdesigns sollen Systeme in einem höheren Level von Abstraktion beschrieben werden
	- Objektklassen sind zu nah an der Implementierung um zur Beschreibung von Architekturen nützlich zu sein
	- UML ist im Designprozess nicht nützlich
	- Besser: Informelle Notationen, die schneller zu schreiben sind und einfach auf Whiteboards gezeichnet werden können
	- UML hat seinen größten Wert zu Dokumentation von Architekturen im Detail

---

- Bass et. al. schlagen die Verwendung von spezialisierten Architectural descriptions languages (ADLs) vor (Bass 2012)
- Grundelemente: Komponenten, Verbinder
- Enthalten Regeln und Leitlinien für wohlgeformte Architekturen
- Diese Spezialsprachen sind für Domänen- und Anwendungs-Experten möglicherweise schwer zu nutzen
- Meinung (Sommerville): Informelle Modelle und UML bleiben allgemeine Praxis

---

- Agile Methoden: Claim:
	- Detaillierte Dokumentationen bleiben meistens ungenutzt
	- Die Entwicklung von Dokumenten zur Dokumentation von Architekturen ist eine Verschwendung von Zeit und Geld
- Meinung (Sommerville): Zustimmung
	- Außerhalb von kritischen Systemen ist die Entwicklung einer Architekturbeschreibung im Sinne der 4 Views den Aufwand nicht wert
	- Es sollten die Views genutzt werden, die zur Kommunikation nützlich sind
	- Es sollte sich nicht um die Vollständigkeit der Dokumentation einer Architektur gesorgt werden

# Architectural Patterns

## Einleitung & Definition

- Pattern als Art des Präsentierens, Teilens und Wiederverwendens von Wissen über Softwaresysteme ist in diversen Bereichen des Software Engineering üblich (Auslöser: Gamma 1995)
- (Diverse weitere Sammlungen von Pattern existieren)

---

- Architectural Patterns wurden 1996 von Shawn & Garlan als "architectural styles" eingeführt (Shaw 1996)
- (5 Handbücher zur "pattern-oriented software architecture")

---

- Pattern werden in standardisierten Wegen beschrieben
	- Durch Nutzen von verbale Beschreibung und Diagramme

---

- Architectural pattern = "stylized, abstract description of good practice, which has been tried and tested in different systems and environments"
- Ein Architectural pattern sollte die Organisation eines Systems beschreiben, die in bestehenden Systemen erfolgreich waren
	- Auch: Stärken und Schwächen das Pattern

---

- (Hinweise zu Notation von Pattern)

---

- Es folgen ausgewählte Beispiele für weit verbreitete Pattern, die gute Prinzipen des Architectural Designs zeigen

## MVC

[Figure 6.4, 6.5, 6.6 (p. 176, 177)]

### Beschreibung

- Seperiert Präsentation und Interkation von Daten
- System ist strukturiert in 3 logische Komponenten
- Model: Verwaltet Daten und implementiert Operationen auf diesen
- View: Definiert und verwaltet die Präsentation der Daten
- Controller: Verwaltet Benutzerinteraktion und leitet diese an View und Model

### Beispiel

[Figure 6.6]

### Verwendung

- Wenn es mehrere Wege gibt Daten zu betrachten und mit diesen zu interagieren
- Wenn zukünftige Anforderungen für Interkation von Präsentation von Daten unbekannt sind

### Vorteile

- Erlaubt Datenänderungen unabhängig von der Präsentation (sowie umgekehrt)
- Erlaubt Präsentation der selben Daten auf unterschiedliche Weise (Änderungen der Daten in einer Präsentation sind in allen sichtbar)

### Nachteile

- Zusätzlicher Code sowie Code-Komplexität, auch wenn Datenmodell und Interaktion simpel sind

## Layered Architecture

### Motivation und Beschreibung

- "Seperation" + "Independence" sind fundamentale Prinzipien von Architectural design
	- Erlauben Lokalität von Änderungen
- MVC seperiert Elemente eines Systems und erlaubt unabhängige Änderungen dieser
	- Bsp: Hinzufügen oder Ändern einer View kann ohne Änderungen im Model geschehen
- Layered Architecture ist ein alternativer Weg um "seperation" und "independence" zu erreichen
- Systemfunktionalität ist in Schichten organisiert
- Jede Schicht erfordert nur die Schicht direkt unterhalb

### Vorteile

- Schichtung unterstützt inkrementelles Entwickeln von Systemen
- Während der Entwicklung können Services eines Layers Benutzern bereitgestellt werden
- Einzelne Layer sind austauschbar und portabel (solange sich Interfaces nicht ändern)
- Bei Änderungen im Interface eines Layers sind nur die angrenzenden Layer betroffen
- Layered Architectures halten Maschinenabhängigkeiten lokal
	- Dies erleichtert Multi-Plattform Implementierungen
		- Nur Maschinenabhängige Layer müssen neu implementiert werden

---

[Figure 6.7, 6.8, 6.9 (p. 178, 179)]

### Beschreibung

- Organisiert ein System in Schichten (mit zusammengehörigen Funktionalitäten)
- Eine Schicht stellt der Schicht über ihr Services zur Verfügung
- Die unterste Schicht repräsentiert Core-Funktionalitäten

### Beispiel

[Figure 6.9]

### Verwendung

- Wenn neue Funktionalitäten "on top of" zu existierenden Systemen hinzugefügt werden sollen
- Wenn Entwicklung über mehrere Teams verteilt ist (Jedes Team hat Verantwortung für eine Schicht)
- Wenn eine Anforderung an Multilevel Security besteht

### Vorteile

- Erlaubt Austauschen von ganzen Schichten (solange Interface erhalten bleibt)
- Redundante Funktionalitäten (z.B. Authentifizierung) in jeder Schicht können Dependability eines Systems verbessern

### Nachteile

- In der Praxis ist eine saubere Seperierung von Schichten häufig schwierig
- "hohe" Schichten müssen ggf. mit "niedrigen" Schichten direkt interagieren und nicht via. den Schichten dazwischen
- Mehrere Level der Verarbeitung / Interpretation von Anfragen kann Performance negativ beeinträchtigen

---

- (Beschreibungen der Diagramme [Figure 6.8, 6.9])

## Repository Architecture

### Klassifikation

- Layered architecture und MVC sind Beispiele von Pattern, die die konzeptionelle Organisation von Systemen betrachten
- Repository architecture beschreibt, wie eine Menge von interagierenden Komponenten Daten austauschen können

### Beschreibung

- Alle Daten innerhalb eines Systems sind in einem zentralen Repository verwaltet
- Komponenten interagieren nur durch das Repository mit diesen, niemals direkt

### Beispiel

[Figure 6.11]

### Verwendung

- Bei Systemen, die große Mengen von Informationen erzeugen, die über einen "langen" Zeitraum persistiert werden müssen
- Bei Data-driven systems, wo das Hinzufügen von Daten in ein Repository Aktionen auslöst

### Vorteile

- Komponenten sind unabhängig und müssen nicht von der Existenz anderer Komponenten wissen
- Datenänderungen innerhalb einer Komponente wirken sich global auf alle Komponenten aus
- Alle Daten sind konsistent durch Zentralisierung (gut für z.B. Backups)

### Nachteile

- Repository = single point of failure
	- Probleme im Repository haben Auswirkungen auf das gesamte System
- Organisation der gesamten Kommunikation durch ein Repository kann uneffizient sein
- Verteilung des Systems (über mehrere Rechner) kann schwierig sein

---

[Figure 6.10, 6.11 (p. 179, 180)]

### Anwendungsfälle

- Die Mehrheit der Systeme, die große Mengen von Daten verarbeiten sind um geteilte Datenbanken oder Repositories organisiert
- Dieses Modell ist geeignet für Anwendungen, bei deinen eine Komponente Daten generiert, die von einer anderen Komponente genutzt werden sollen
- Bsp:
	- Command and control systems
	- Management information systems
	- CAD
	- Interactive development environments (for software)

---

- (Beispiel [Figure 6.11])

### Vorteile / Nachteile

- Die Organisation von Tools um ein Repository ist ein effizienter Weg um große Mengen von Daten zu teilen
- Es müssen keine Daten explizit zwischen Komponenten ausgetauscht werden
- Komponenten müssen jedoch auf Basis eines Repository-Datenmodells arbeiten
	- Dieses ist ein Kompromiss zwischen spezifischen Anforderungen von Komponenten
	- Es kann schwierig oder unmöglich sein neue Komponenten zu integrieren
		- Das Datenmodell dieser kann mit dem des Repositories inkompatibel sein
- In der Praxis kann es schwierig sein das Repository über mehrere Rechner zu verteilen
	- Die (physische) Verteilung eines logischen zentralen Repositories erfordert das Verwalten mehrerer Kopien der Daten
		- Das Herstellen von Konsistenz kann einen Overhead zum System hinzufügen

### Passiv vs. Aktiv

- Figure 6.11: Das Repository ist passiv und die Steuerung ist die Aufgabe der Komponenten, die das Repository nutzen
- Alternative:
	- Abgeleitet von AI-Systemen
	- "Blackboard"-Modell
	- Triggert Komponenten, wenn Daten verfügbar werden
	- Geeignet, wenn Daten im Repository unstrukturiert sind
	- ??? Wiederspruch (TODO, p. 180)

## Client-Server Architecture

### Motivation und Beschreibung

- Das Repository pattern beschäftigt sich mit der statischen Struktur eines Systems
	- Es zeigt nicht die Organisation zur Laufzeit
- Das Client-Server pattern ist eine weit verbreitet Organisation zur Laufzeit von verteilten Systemen
- Ein System, das dem Client-Server pattern folgt, ist organisiert als eine Menge von
	- Services und zugehörigen Servern
	- Clients, die Services nutzen
- Die Hauptkomponenten dieses Modells sind:

#### Server

- Eine Menge an Servern bieten Services für andere Komponenten
- Bsp: Druckserver, Dateiserver, Compile-Server
- Server sind Software-Komponenten
	- Mehrere Server können auf dem selben Rechner laufen

#### Clients

- Eine Menge an Clients nutzt die durch Server bereitgestellten Services
- Üblicherweise laufen viele Instanzen eines Client-Programms parallel auf vielen Computern

#### Network

- Ein Netzwerk erlaubt den Clients den Zugriff auf Services
- Client-server systeme sind üblicherweise als verteilte Systeme implementiert

### Beschreibung

- Ein System ist repräsentiert durch eine Menge an Services, die von Servern zur Verfügung gestellt werden
- Clients sind Nutzer dieser Services
	- Sie greifen auf Server zu um diese zu nutzen

### Beispiel

[Figure 6.13]

### Verwendung

- Wenn Daten in einer geteilten Datenbank von verschiedenen Orten abgerufen werden muss
- Wenn die Last auf ein System variablen ist (Server können repliziert werden)

### Vorteile

- Hauptvorteil: Verteilung von Servern über ein Netzwerk
- Generelle Funktionalitäten können Clients zur Verfügung gestellt werden, ohne, dass alle Clients alle Services selbst implementieren müssen

### Nachteile

- Jeder Service ist ein single point of failure
	- Anfällig bei DoS-Attaken, Server-Fehlern
- Perfomance kann unvorhersehbar sein
	- Diese hängt von System und Netzwerk ab
- Management-Probleme, wenn Server verschiedenen Organisationen angehören

### Lokale Implementierung

- Client-server Architekturen werden üblicherweise als verteilte Systene verstanden
- Das logische Modell von unabhängigen Services, die durch verschiedene Server angeboten werden, kann auf einem einzigen Rechner implementiert werden
- Wichtige Vorteile: seperation, independence
- Services und Server können ausgetauscht werden, ohne andere Teile des Systems zu beeinflussen

### Kommunikation

- Clients müssen verfügbare Server sowie deren Services kennen
- Server müssen nicht die Identität bzw. die Anzahl der Clients kennen
- Clients greifen auf Services via RPC (IPC) durch request-reply-Protokolle (http) zu
	- Clients machen Anfragen zu Servern und warten auf Antworten

---

- (Beispiel [Figure 6.13])

### Vorteile

- Wichtigster Vorteil des Client-Server-Modells ist die Verteilung eines Systems
- Vernetzte Systeme mit vielen verteilten Prozessoren können effektiv sein
- Es ist einfach neue Server hinzuzufügen und diese mit dem restlichen System zu integrieren
- Es ist einfach Server zu upgraden, ohne andere Teile eines Systems zu beeinflussen
- (Mehr in Chapter 17)

## Pipe and Filter Architecture

### Beschreibung

- Pipe and filter pattern = Modell der Organisation von Systemen zur Laufzeit
- Funktionen transformieren Inputs und erzeugen Outputs
	- Daten fließen durch eine Sequenz dieser und werden nach und nach transformiert
- Jede Bearbeitungsschritt ist als Transformation implementiert
- Transformationen können sequentiell oder parallel ausgeführt werden
- Daten können Elementweise oder in Batches verarbeitet werden

---

- Verarbeitung von Daten eines Systems ist so organisiert, dass jede Verarbeitungseinheit (filter) einen Typ der Datentransformation durchführt
- Daten fließen (pipe) zur Verarbeitung von einer Komponente zur Nächsten

### Beispiel

- [Figure 6.15]

### Verwendung

- In Data-processing applications (batch-/transaction-based)
- Wenn Inputs in seperaten Schritten zu Outputs verarbeitet werden

### Vorteile

- Einfach zu verstehen
- Ermöglicht das Wiederverwenden von Transformations-Komponenten
- Die Art der Verarbeitung entspricht die Art der Struktur vieler Businessprozesse
- Weiterentwicklung durch Hinzufügen von Transformations-Komponenten ist simpel
- Kann entweder als sequentielles oder paralleles System implementiert werden

### Nachteile

- Datenformate müssen zwischen kommunizierenden Transformations-Komponenten abgestimmt werden
- Jede Transformation müss Input parsen und definierten Output erzeugen (unparsen)
	- Erhöht System-Overhead
- Wiederverwendung von Komponenten bei Inkompabilität von Datenformaten kann unmöglich sein

### Ursprung

- Bezeichnung "pipe und filter" entspringt originalem Unix-System (Linken von Prozessen durch pipes)

### Anwendungsfälle

- Varianten dieses Pattern sind in Benutzung seit Computer für automatisierte Datenverarbeitung eingesetzt werden
- Batch sequentielle Variante ist üblich in Abrechnungssystemen (billing systems)
- Embedded Systems können als Prozess-Pipeline organisiert werden (parallelle Prozesse; Chapter 21)

---

- (Beispiel [Figure 6.15])

---

- Pipe and filter Systeme sind am besten für batch processing und embedded systems geeignet, wo Benutzerinteraktion begrenzt ist
- Interaktive Systeme sind schwierig als Pipe and filter System umzusetzen
	- Weil Datenströme verarbeitet werden
- Grafische UIs haben Steuerungsstrategien, die auf Events basieren
	- Es ist schwierig dies als sequentieller Stream zu implementieren

# Application Architectures

## Transaction Processing Systems

## Information Systems

## Language Processing Systems
