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

# Architectural Views

# Architectural Patterns

## Layered Architecture

## Repository Architecture

## Client-Server Architecture

## Pipe and Filter Architecture

# Application Architectures

## Transaction Processing Systems

## Information Systems

## Language Processing Systems
