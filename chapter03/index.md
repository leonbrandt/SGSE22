# Agile Software Development

**Autor:** Benedikt Wiest

## Agile Methodik
 - Klassische plangesteuerte Softwareentwicklung dauert lange
 - Unternehmen agieren heutzutage auf einem schnell wandelnden Markt
 - Faktoren welche dafür sorgen:
	 - Neue Chancen in neuen Märkten
	 - rasches aufkommen konkurrierender Produkte/ Dienstleistungen  
 - Rasche Entwicklung und Bereitstellung von Software ist heute ein erheblicher Erfolgsfaktor
 - Anforderungen an Software ändern sich schnell
	 - bspw. durch Schnittstellen zu anderen Systemen
 - Anforderungen an Software kommen erst nach Bereitstellung auf
	 - Erschließung neuer Potentiale (bspw. Automatisierung von Aufgaben)
 - Notwendigkeit für schnellere Softwareentwicklung wurde bereits früh erkannt
	 - Späte 90er kamen agile Methoden auf
 - Agile Softwareentwicklung heute als synonym für schnelle Entwicklung
 - alle vorgestellten Agile Methoden haben 3 Gemeinsamkeiten
	 - Die Prozesse Spezifikation, Entwurf und Implementierung sind ineinander verschachtelt. Detaillierte Spezifikationen werden nicht (oder nur minimal/ oder generiert) angefertigt. Die aufgenommenen Anforderungen werden eher als Beschreibung der wichtigen Eigenschaften der Software verstanden.
	 - Inkrementelle Entwicklung unter zuhilfenahme des Feedbacks der Nutzer und/oder der Stakeholder. Software wird von Verison zu Version verbessert
	 -  Der Entwicklungsprozess wird durch umfangreiches Tooling unterstützt (bspw. automatisierte Tests, Tools für Konfigurationsmanagement,...)
 
 - Agile Methodik --> inkrementelle Entwicklung in kleinen Schritten
 - Einbeziehung des Kunden für Feedback zu neuen Versionen
	 - Aufnahme/ Priorisierung von Anforderungen
 - informelle Kommunikation statt formelle Besprechung
	 - weniger Overhead - schnellere Entwicklung möglich
 - Iterationen erfolgen aktivitätsübergreifend --> Unterschied zu plangesteuerter Entwicklung, alle Aktivitäten laufen parallel
 - In der Praxis werden plangesteuerte Prozesse und agile Methodik häufig vermischt genutzt
	 - geplante Aktivitäten in agiler Methodik
	 - in nächster Iteration kein Code, sondern Dokumentation oder Modelle
 - Wichtig --> agile Methodik ist nicht unbedingt auf Code fokussiert, sondern auf Vorgehen
 - Ansatz von plangesteuerter Softwareentwicklung funktioniert nicht für kleine und mittelgroße Software für Unternehmen, da mehr Zeit auf Planung und Prozess verwendet wird als auf die eigentliche Entwicklung
	- Extrem lange Release Zyklen und schwergewichtige Prozesse sind für Unternehmen heutzutage nicht mehr umsetzbar
 -  Agile Methodik wurde in den späten 1990er Jahre entwickelt mit dem Ziel, dass sich Entwickler auf die Softwareentwicklung konzentrieren können und der Prozess schlanker und schneller wird
 - Philosophie der agilen Methodik wurde im agilen Manifest niedergeschrieben
 - So heisst es im agilen Manifest
	- Bessere Softwareentwicklung durch
		- Menschen + Interaktionen > Prozesse + Tools
		- Funktionierende Software > Dokumentation
		- Zusammenarbeit mit dem Kunden > Vertragsverhandlungen
		- Reagieren auf Veränderungen > Plan folgen
 - (Auszug) Prinzipien im agilen Manifest
	
| Grundsatz | Beschreibung |
|--|--|
| Einbindung des Kunden | Enge Einbindung des Kunden, Definition  und Priorisierung neuer Anforderungen, Feedback zu Iterationen  |
| Veränderung aufgeschlossen gegenüberstehen| Damit rechnen das sich Anforderungen ändern und Software entsprechend entwickeln |
| Inkrementelle Auslieferung | Software wird iterativ entwickelt, Versionen verbessern jeweils die vorherige |
| Einfachheit | Komplexität an jeder möglichen Stelle reduzieren um Einfachheit herzustellen |
| Menschen > Prozesse | Kompetenz der Entwickler nutzen und die etablierung eigener Arbeitsweisen zulassen, statt stur an Prozessen festzuhalten |
 - Agile Methodik hat sich insbesondere für 2 Typen von Projekten bewährt
	 - Produktentwicklung kleiner und mittelgroßer Produkt welche verkauft werden
	 - kundenspezifische Systementwicklung unter verpflichtender Einbeziehung des Kunden, mit wenig Vorschriften und Interessensgruppen
 
## Agile development techniques

![Modell Extreme Programming](https://ibb.co/9ntbMfR)

-	Ideen der agilen Methodik wurde von verschiedenen Personen in den 90er Jahren entwickelt
-	Einer der bedeutendsten Ansätze war das sogenannte "Extreme Programming" (abk. XP) welches durch Kent Beck geprägt wurde
-	So benannt, da agile Methodik und iterative Entwicklung auf ein "extremes" Niveau getrieben wird
-	XP Prozess
	-	Aufnahme von Anforderungen in Form von User Stories
	-	Umsetzung der User Stories in Arbeitspakete
	-	Umsetzung der Arbeitspakete durch Entwickler in 2er Teams
	-	Erst Tests entwickeln, dann Code 
	-	Alle Tests müssen erfolgreich durchlaufen werden wenn der Code integriert wird
-	Abstände zwischen Versionen sind in XP sehr gering, es können auch mehrere unterschiedliche Versionen pro Tag entstehen
-	XP stütz sich auf agile Methodik und war damals daher sehr kontrovers (quasi der Zeit vorraus)
-	XP setzt agile Prinzipien um, wie in der Tabelle zu sehen:

|Grundsatz| Beschreibung |
|--|--|
| Kollektives Eigentum | Entwicklerpaare arbeiten an jeder Stelle, keine Bildung von Kompetenzinseln. Jeder kann alles ändern. |
| Continuous integration | Zeitnahe Integration der entwickelten Software, alle Tests müssen erfolgreich durchlaufen werden wenn neue Software integriert wird  |
| Inkrementelle Planung | Anforderungen werden auf Story Cards festgehalten und je nach verfügbarer Zeit und Priorität umgesetzt |
| On-site Customer | Kunde ist Bestandteil der Entwicklung, ein repräsentativer End-Nutzer muss dem Entwicklerteam permanent zur Verfügung stehen |
| Pair programming | Entwickler arbeiten in 2er Teams um sich gegenseitig zu unterstützen und zu überprüfen |
| Refactoring | Kontinuierliche Überarbeitung von bestehendem Code um den Code einfach und wartbar zu halten |
| Simple design | Umsetzung nicht über das Ziel hinaus, es wird nur das umgesetzt was angefordert ist |
| Small releases | Auslieferung minimaler Umsetzungen der geforderten Funktionen, weiterentwicklung dieser Funktionalitäten wird auf Basis dieser ersten Version ausgeliefert |
| Konstante Geschwindigkeit | Überarbeitung führt zu schlechterem Code und mittelfristig zur geringerer Produktivität |
| Test-first | Automatisierte Unit-Tests unterstützen dabei Tests zu schreiben, bevor die Funktionalität selbst entwickelt wird |

-	Die praktische Umsetzung von XP hat sich als schwierig herausgestellt
	-	XP passt nicht zu Management und Unternehmenskultur der meisten Unternehmen
-	Häufig werden daher einzelne Bestandteile des XP in Kombination mit anderen agilen Methodiken (wie z.B. Scrum) umgesetzt
-	XP hat mit seinen Bestandteilen einen wichtigen Beitrag zur Umsetzung agiler Methodik in Unternehmen geleistet, die wichtigsten Bestandteile werden daher folgend genauer erklärt und beschrieben

 ### User Stories

// einfügen Story Card - in Cloud
// einfügen Tasks - in Cloud

 - agile Methodik sieht keine seperate Anforderungserhebung (als Phase) vor
 - Aufnahme von Anforderung in Form von Nutzungsszenarien (User Stories) 
 - Entwickler und Kunde entwickeln eine Story Card, welche die Kundenbedürfnisse konkret beschreibt
 - Umsetzung des Szenarios in einer zukünftigen Iteration
 - Beschreibung der eingefügten Story Card
	 - Szenario für die Verschreibung von Medikamenten in einem medizinischen System
 - Beschreibung der daraus abgeleiteten Tasks
	 - Entwickler schätzen Aufwand für Umsetzung
	 - Kunde gibt Priorität
	 - Einplanung der Tasks in Iteration
 - Ausarbeitung neuer User Stories / Veränderung bestehender User Stories im gesamten Prozess 
 - Menschen können sich besser mit Geschichten identifizieren als mit niedergeschriebenen Stichpunkten in Anforderungsdokumenten
 - User Stories haben das Problem, dass sie nicht immer vollständig sind
	 - besonders erfahrene Nutzer sind häufig so sehr mit ihrer Arbeit vertraut, dass sie wichtige Details weglassen
	
### Refactoring
 - Grundprinzip im traditionellen Software Engineering - design for change
	 - Code so entwickeln, dass zukünftige Änderungen leicht umsetzbar sind
 - In XP wird dieser Grundsatz nicht gelebt, da der Aufwand für design of change sehr groß ist
	 - Keine Zeit darauf verwenden ein System allgemeiner zu gestalten, da erwartete Anforderungen häufig nicht gestellt werden, oder ganz anders geäußert werden
 - Prinzip in XP - Code permanent refaktorisieren
	 - Suche nach Verbesserungsmöglichkeiten in bestehendem Code und Umsetzung dieser Möglichkeiten 
	 - Verhindern das Gesamtstruktur durch viele lokale Änderungen verschlechtert wird
 - Verbesserung der Lesbarkeit von Code und Struktur
 - Beispiele für Refactoring Maßnahmen
	 - Reorganisation von Klassenhierarchien
	 - Aufräumen/Umbenennen von Attributen und Methoden
	 - Ausgliederung / Nutzung von Code aus Bibliotheken
 - Für Refactoring muss man sich trotz Druck durch neue Anforderungen Zeit nehmen

### Test-first development
-	Im  Vergleich zu einem plangesteuerten Modell, existieren bei inkrementeller/agiler Entwicklung keine Systemspezifikation mit Hilfe derer Tests erarbeitet werden können. Getestet wird eher informell.
-	 Im XP wird ein umfangreiches Testkonzept umgesetzt, welches sich wie folgt zusammensetzt
		-	Test-first Entwicklung
		-	inkrementelle Entwicklung der Test auf Basis der Szenarien
		-	Einbindung der Nutzer in die Entwicklung der Tests
		-	Nutzung von automatisierten Test Frameworks
	-	Test-first Entwicklung bringt zahlreiche Vorteile
		-	implizite Definition einer Schnittstelle
		-	Spezifikation des Verhaltens für den neuen Code
		-	Hohe Anzahl an Tests - hohe Coverage
		-	Vermeidung von Test-Lag
		-	--> Reduzierung von Fehlern und Missverständnissen, Erhöhung der Qualität (sowohl auf Produkt als auch Code Ebene)
	-	Damit test-first funktioniert, müssen die Anforderungen klar definiert werden (bei XP gelöst über Story Card und daraus folgende Tasks)
	-	Rolle des Kunden im Testprozess --> gemeinsame Entwicklung von Akzeptanztest für die End-User
	-	Testautomatisierung unerlässlich
		-	Tests als ausführbare Komponenten implementieren
		-	Idealerweise Entwicklung mit Framework (z.B. Junit)
		-	Tests müssen durchlaufen vor Integration
	-	Probleme bei der Gewährleistung einer vollständigen Coverage
		-	Programmierer programmieren lieber als zu testen - möglicherweise werden Randfälle nicht getestet, weil man den Aufwand scheut
		-	In einigen Bereichen ist es schwierig inkrementell Tests zu entwickeln, beispielsweise bei der Anzeige Logik von komplexen UIs
	-	Coverage ist wichtig - ist aber keine Garantie für die funktionale Richtigkeit des Produkt
	-	Konstante Pflege der Tests ist nötig

### Pair programming
-	Weiteres Konzept von XP - Pair programming
-	Entwickler arbeiten paarweise, am gleichen Computer, am gleichen Code
-	Dynamische Bildung von Entwickler Paaren
-	Vorteile von Pair programming
	-	Kollektives Eigentum und gemeinsame Verantwortlichkeit - keine Bildung von Kompetenzinseln. Team als ganzes trägt Verantwortung für den Code.
	-	Wenig formelles Überprüfungsverfahren - nach dem 4-Augen Prinzip arbeiten sorgt für weniger Fehler. Fehler werden schneller identifiziert. Günstige und einfache Variante von Code Reviews.
	-	Ermutigung zu umfangreichen Refactoring 
-	 Studien zur Frage von Produktivität bei Pair programming - gängige Meinung = weniger produktiv (Entwicklerpaar schafft nur halb soviel Code wie zwei alleinarbeitende Entwickler)
		-	Studie unter freiwillig teilnehmenden Studenten 
			-	Produktivität nimmt nicht ab - vermutlich darauf zurückzuführen das Entwickler sich mehr besprechen, Fehler und Irrwege direkt ausgeschlossen werden
		-	Studie unter erfahrenen Programmierern konnte Ergebnisse nicht reproduzieren
			-	Produktivität sank erheblich
		-	Wissensaustausch während der gemeinsamen entwickeln senkt Projektrisiken bei ausscheiden eines Mitglieds - Pair programming kann auch deshalb Sinn machen

## Agile project management
-	Planorientierte Ansätze zur Softwareentwicklung ermöglichen externen Beobachtern einen umfangreichen Einblick in das Projektgeschehen und den Fortschritt
	-	Klare Abgrenzung von Phase ermöglicht starkes Projektcontrolling
-	Frühe Ansätze der agilen Methodik kollidieren mit dem grundsätzlichen Bedürfnis nach Transparenz zur Planung in großen Unternehmen außerdem kann eine optimale Nutzung der Entwicklungsressourcen (z.B. Zeit) nicht sichergestellt werden 
	-	Entwickler organisieren sich selbstständig 
	-	Keine Dokumentation
	-	Kurzfristige zyklische Planung der Entwickler
-	Entwicklung von Scrum --> Rahmen für die Organisation von Projekten, welche mit agiler Methodik arbeiten
	-	Ermöglichung von Einblick ins Projekt für externe
-	Zur klaren Abgrenzung von bekannten Projektmanagement Methoden, wurde eine neue Terminologie entwickelt
	-	Tabelle mit Terminologie einfügen
- Scrum folgt den Prinzipien des agilen Manifest
- Keine explizite Vorschriften welche agilen Methodiken genutzt werden müssen (z.b. kein Pair-programming)
	- dadurch leichter integrierbar in bestehende Unternehmensstrukturen 
- Am weitesten verbreitetes Modell für den Einsatz in agilen Projekten
- Scrum Prozess (Abbildung einfügen) 
	- 	Input für den Prozess - Anforderungen/ Aktivitäten welche im Product Backlog beschrieben werden
		- Aktivitäten können zum Beispiel auch sein einen Prototyp zu entwickeln oder ein Modell zu definieren
		 - Product Owner ist verantwortlich für das Product Backlog und dessen Korrektheit/ Vollständigkeit 
	- Iteration im Prozess erzeugt neues Programminkrement welches an den Kunden ausgeliefert wird / werden kann
	- Sprint Zyklus in festen Abständen
		- i.d.r. 2-4 Wochen
	- Zu Beginn von jedem Sprint werden die Aktivitäten welche umgesetzte werden sollen in diesem Sprint durch den Product Owner und die Entwickler ausgewählt 
		- Aktivitäten welche nicht im Sprint erledigt werden können, wandern zurück ins Product Backlog
		- Sprints werden nicht verlängert weil Aktivitäten noch nicht fertig sind
	-  Ausgewählte Items werden priorisiert und in das Sprint Backlog aufgenommen
		- Sprint Backlog wird dann durch die Entwickler abgearbeitet
		- Für Schätzungen zum Zeitbedarf werden Vergleichswerte auf Basis vergangener Sprints ermittelt (bspw. Anzahl abgearbeitete Backlog Items pro Sprint)
	- Entwickler suchen sich selbst Items aus dem Sprint Backlog aus und beginnen mit der Arbeit
	- Tägliche Meetings (Scrums) während des Sprints zum Austausch unter den Entwicklern
		- Im Scrum werden der Fortschritt im aktuellen Arbeitspaket, Probleme bei der Entwicklung und ein Forecast der Entwicklung für den nächsten Tag diskutiert
		-    Keine Anweisungen durch den Scrum Master
		-  Meeting dient nur der kurzfristigen Planung
	- Möglichkeit - Koordinierung über Scrum Board
		- Whiteboard auf dem alle aktuellen Arbeitspakete und Ressourcen übersichtlich dargestellt sind
		- Jedes Teammitglied erhält einen schnellen Überblick über die Lage 
		- Steuerung der Auswahl von Arbeitspaketen über verschieben von Elementen auf dem Whiteboard
	- Am Ende des Sprints --> Review Meeting
		- Alle nehmen teil
		- Ziele --> Verbesserung des Prozess (besprechen was besser gemacht werden kann im nächsten Sprint) und Überprüfung des Product Backlog vor der nächsten Iteration
	- Scrum Master ersetzen idr die Rolle des Projektmanagers in vielen Unternehmen
		- Berichte über Projekt an Geschäftsführung/Management
		- Ggf. hat ein Scrum Master Personal und Resourcen Verantwortung
	
	- Dinge welche Scrum Nutzer besonders schätzen:
		- Zerlegung des Produkts in kleinere Teile - dadurch besseres Verständnis
		- Unklare Anforderungen halten den Prozess nicht auf
		- Hohe Transparenz im Team - mehr Kommunikation, höhere Arbeitsmoral
		- Zufriedenere Kunden durch regelmäßige Auslieferung von Inkrementen und Einbindung in den Entwicklungsprozess (Feeback)
	-  Großes Vertrauen zwischen Entwicklern und dem Kunden wird aufgebaut 
- Veteilte Entwicklung mit Scrum möglich 
	- Verteilt = Teams arbeiten an unterschiedlichen Standorten
	- Anforderungen für verteiltes Arbeiten mit Scrum in Abbildung darstellen

## Scaling agile methods
