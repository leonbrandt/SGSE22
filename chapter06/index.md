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

## Layered Architecture

## Repository Architecture

## Client-Server Architecture

## Pipe and Filter Architecture

# Application Architectures

## Transaction Processing Systems

## Information Systems

## Language Processing Systems
