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
-	Entwicklung agiler Methoden ursprünglich für kleine Teams 
	-	enge Zusammenarbeit
	-	niederschwellige Kommunikation möglich
-	Vorteile wie schnelle Produktbereitstellung sind auch für große Unternehmen und große Softwareprojekte relevant, dass Interesse an der Skalierung von agiler Methodik stieg daher schnell an.
-	Ziel der Skalierung
	-	agile Methodik für große Softwaresysteme, an denen mehr als ein (kleines) Team arbeitet
	-	Nutzung agiler Methodik, auch über die reine Software Entwicklung hinaus
-	Es kann davon ausgegangen werden, dass in großen Unternehmen eine Produktivitätssteigerung von 15% in einem Zeitraum von 3 Jahren erreicht werden kann durch die Skalierung agiler Methodik

### Practical problems with agile methods
- Für den Einsatz bei der Entwicklung von Softwareprodukten und Apps ist die agile Methodik der wohl beste Einsatz
- Für die Entwicklung von eingebetteten Systemen oder großen, hochkomplexen Softwaresystemen sind agile Methoden möglicherweise nicht geeignet
- Die Entwicklung von großen, langlebigen Softwaresystemen mit agiler Methodik wirft einige Probleme auf:
	- Die informelle Arbeitsweise der agilen Methodik ist mit den juristischen Rahmenbedingungen schwer zu vereinbaren (bspw. Vertragsverhandlungen)
	- Agile Methodik eignet sich für die Neuentwicklung von Software, jedoch nicht für die Wartung dieser. Wartung verursacht jedoch einen Großteil der Kosten.
	- Agile Methodik war für räumlich eng zusammen arbeitende Entwickler entworfen. In der Softwareentwicklung wird heute aber eher dezentral in verteilten Teams gearbeitet.
- Insbesondere die informelle Arbeitsweise ist problematisch. Bei der Beauftragung von externen Unternehmen zur Softwareentwicklung, wie es bei großen Projekten in entsprechenden Unternehmen üblich ist, gehört die Dokumentation der Anforderungen zu den gängigen Vertragsunterlagen. Wie bekannt existiert bei dem Vorgehen nach Scrum aber nicht im vorhinein ein vollständiges Anforderungsdokument, da dies erst mit der inkrementell aufgebaut wird.  
- Bei agiler Methodik wird daher in der Regel die geleistete Arbeit bezahlt und kein fester Preis für die Umsetzung einer festen Liste  mit Anforderung.
	- Problematisch wird dies nur, wenn es zu Problemen kommt und die Schuldfrage für entstehende Mehraufwände geklärt werden muss 
- Es gibt keinen Konsens in wiefern agile Methodik für die Wartung von bestehenden individuellen Softwaresystemen geeignet ist, mögliche Probleme hierbei sind:
	- fehlende Dokumentation
	- Einbindung des Kunden sicherstellen
	- Konstante Auslastung des Entwicklerteams
- Bei Systemen welcher mit agiler Methodik implementiert wurden, sollte der Code in hoher Qualität und guter Lesbarkeit vorliegen - ein ausführliche Dokumentation sollte also nicht nötig sein, damit sich Entwickler zur Wartung der Systeme einarbeiten können.
	- Problematisch - wie können die Auswirkungen einer Änderung beurteilen, wenn nicht vollständig klar ist, was das System tun soll?
- Die konstante Auslastung der Entwickler innerhalb des Projekts sorgt dafür, dass informell gesammeltes Wissen nicht abwandert in andere Projekte. Löst sich das Projektteam auf, geht das gesammelte Wissen nahezu vollständig verloren.
	- Entwickler programmieren lieber Neuentwicklungen statt Altsoftware zu warten
- Prinzip der permanenten Einbindung eines repräsentativen Vertreter des Kunden kann bei Wartung nicht immer aufrechterhalten werden
	- Kosten für die permanente Bereitstellung sind für den Kunden sehr hoch, ob das für die Wartung zu rechtfertigen ist, ist fraglich

### Agile and plan-driven methods

// Grafik über die Einflussfaktoren einfügen

-	Aufgrund elementarer Unterschiede in der Arbeitsweise von kleinen Unternehmen (Bspw. Startups) zu großen Unternehmen (bspw. Konzerne), ist zur Skalierung von agiler Methodik eine Einbindung plangesteuerter Aktivitäten unerlässlich. Software Entwicklung muss in großen Unternehmen geplant werden, außerdem ist ein Controlling der Projekte unerlässlich. 
-	 Unternehmen haben in ihren Entwicklungsprozessen agile Aktivitäten und plangesteuerte Aktivitäten eingebaut. Findung des richtigen Gleichgewichts zwischen Agilität und plangesteuerter Entwicklung müssen Unternehmen abhängig der Rahmenbedingungen finden, hierzu können 5 Fragen herangezogen werden:
		-	Wie groß ist das zu entwickelnde System?
			-	agile Methodik eignet sich eher für kleine, eng zusammenarbeitende Teams
		-	Welche Art von System wird entwickelt?
			-	Komplexe Systeme (bspw. Steuerungen mit der Anforderung Echtzeit) benötigen einen detailierten Entwurf vor der Entwicklung. Für die Umsetzung eignet sich daher eher ein plangesteuerter Ansatz.
		-	Wie hoch ist die Lifetime des Systems?
			-	Systeme, welche besonders lange genutzt werden, benötigen häufig eine umfangreichere Design Phase um die Erweiterbarkeit und Wartbarkeit der Software sicherzustellen. Wählt man einen agilen Ansatz, sollte sichergestellt werden, dass die Entwickler der Software auch in der Wartungsphase dabei sind. 
		-	Welche Regulierungen gelten für das Produkt?
			-	Systeme welche einer externen Regulierung unterliegen (z.b. Software im Bereich der Luftfahrt) müssen zur Einhaltung von Sicherheitsbestimmungen sehr gut dokumentiert werden. Es bietet sich daher an, einen plangesteuerten Ansatz zu wählen.
	-	 Neben den Fragen zum System, müssen sich Unternehmen auch Fragen zum entwickelnden Team stellen um das richtige Maß zwischen agiler Methodik und plangesteuerten Aktivitäten zu finden. Auch die Frage zur Technologie des zu entwickelnden Systems ist erheblich für die Wahl des Vorgehens.
			-	Wie  kompetent sind die Entwickler und Entwicklerinnen im Entwicklungsteam? Die Umsetzung eines detaillierten Entwurf benötigt nicht so viel Kompetenz, wie die aktive Beteiligung bei allen Entwicklungsaktivitäten (also z.B. auch die Arbeit an den Architekturentwürfen des Systems). Für agile Methodik ist das nötige Kompetenzniveau grundsätzlich höher, bei planbasiertem Vorgehen können die besten Entwickler sich um Entwurf und Design der Software kümmern
			-	Arbeitet das Entwicklerteam zentral? Agile Methodik eignet sich besonders für kleine, zentral arbeitende Teams
			-	 Welche Technologien stehen zur Unterstützung des Prozess zur Verfügung?
					-	agile Methodik ist eher auf Tools angewiesen um einen besseren Überblick über das in Entwicklung befindliche System zu erhalten
		-	Auch Fragen betreffend der Organisation (Unternehmen) können Einfluss auf den Anteil an plangesteuerten Aktivitäten haben. Das allgemein vermittelte Bild, der unbürokratischen und legeren, jungen Softwareunternehmen entspricht nicht, oder nur in teilen, der Wahrheit.
			-	Gibt es rechtliche Rahmenbedingungen, welche einen detaillierten Softwareentwurf und/oder eine vollumfängliche Dokumentation nötig machen? Sollte dies der Fall sein, ist ein planorientiertes Vorgehen besser geeignet, als ein agiles.
			-	Kann die inkrementelle Strategie und die damit verbundene kontinuierliche Auslieferung des Produkts umgesetzt werden? Stehen repräsentative End-User bei der Entwicklung zur Verfügung?
			-	Welche kulturellen Aspekte prägen die Organisation? Unternehmen mit starren Strukturen tuen sich mit der Umsetzung agiler Methodiken deutlich schwerer.
		-	Ziel der Entwicklung ist unabhängig vom Vorgehen eine lauffähige Software. In jedem Fall sollte daher pragmatisch, mit der effektivsten Methode, gearbeitet werden.

### Agile methods for large systems
-	Agile Methodik muss weiterentwicklet werden für den Einsatz bei großen  Systemen. Die liegt im wesentlichen an der Komplexität dieser. Folgende Faktoren sorgen dafür, dass große Systeme eine höhere Komplexität haben, als kleine oder mittelgroße Systeme
	-	System of systems - bei großen Systemen handelt es sich häufig um viele verschachtelte Systeme. Für die Entwickler ist es häufig nicht möglichen, einen Gesamtüberblick über alle Systeme zu erhalten.
	-	Brownfield Systeme - große Systeme beinhalten in der Regel Bestandssysteme, mit welchen interagiert wird. Anforderungen, welche auf eine Änderung der Interaktion mit diesen Bestandssystemen abzielen, eignen sich weniger für flexible und inkrementelle Entwicklung. 
	-	Die Integration mehrerer Systeme zu einem Gesamtsystem erfordert viel Konfigurationsarbeit, welche sich nicht für inkrementelles Vorgehen eignet
	-	 Rechtliche Rahmenbedingungen und weitere extern regulierende Rahmenbedingungen sind bei großen Systemen häufiger zu finden. Die informelle Art des agilen Vorgehen ist nicht mit diesen Rahmenbedingungen vereinbar.
	-	Lange Beschaffungs- und Entwicklungszeiten machen es schwierig Teams zusammen zu halten
	-	Eine hohe Anzahl an Stakeholdern macht es schwierig, alle am Entwicklungsprozess zu beteiligen
-	Es wurden verschiedene Frameworks für die skalierung agiler Methodik entwickelt
	-	Scaled Agile Framework
	-	Agile Scaling Model (ASM)
		-	entwickelt von IBM
		-	Skalierung von agilem Vorgehen erfolgt in Stufen
			-	Übergang von beschriebenen agilen Praktiken zu einer disziplinierten Entwicklung unter Berücksichtigung das alle Phasen der Softwareentwicklung berücksichtigt werden müssen - wird dann als Disciplined Agile Delivery bezeichnet
			-	In der letzten Stufe werden die agilen Methodiken dann auch in großen, komplexen Projekten eingesetzt. Hierfür müssen die benannten Komplexitätsfaktoren anerkannt und berücksichtigt werden.
-	Es gibt kein allgemeingülties Modell zur Nutzung von agiler Methodik bei der Entwicklung großer Systeme. Gemeinsamkeiten der vorhandenen Modelle können jedoch gefunden werden:
	-	Die Anforderungsanalyse folgt keinem streng inkrementellen Ansatz. In der Regel können die groben Anforderungen vorab formuliert werden und anschließend mit inkrementellem Vorgehen verfeinert werden.
	-	Für verschiedene Produktbereiche werden jeweils Product Owner definiert, welche permanent im Austausch stehen.
	-	Ein kompletter Verzicht auf Dokumentation, Entwürfen und Beschreibungen ist nicht möglich.
	-	Entwicklung von Kommunikationsmechanismen, wie zum Beispiel Telefon/Videokonferenzen. Schaffung von asynchronen Kommunikationswegen wie E-Mail oder Instant Messaging.
	-	 Continuous integration über das gesamte Projekt ist meistens nicht möglich, trotzdem sollten regelmäßige Builds des Gesamtsystem erfolgen. Der Einsatz von Tools für das Konfigurationsmanagement ist unerlässlich.

-	Scrum wurde für den Einsatz bei der Entwicklung großer Softwaresysteme erweitert, hierfür wird das bekannte Scrum Model wie folgt erweitert:
	-	Jedes Team hat einen eigenen Scrum Master und Product Owner
	-	Jedes Team hat einen Produktarchitekten, welcher sich mit den Architekten der anderen Teams austauscht
	-	Abstimmung von Realeases 
	-	Scrum of Scrum - Vertreter aller Teams treffen sich um Fortschritte zu besprechen und Probleme frühzeitig zu identifizieren
	
### Agile methods across organizations
-	agile Methodik kann von kleinen Unternehmen und Organisationen deutlich leichter umgesetzt werden, weil es weniger bürokratische Hürden und gewachsene Unternehmenstrukturen gibt. 
-	Bei großen Unternehmen kann die Einführung agiler Methodik an folgenden Stellen Probleme bereiten
	-	Projektleitung ohne Erfahrung mit agiler Methodik
	-	Qualitätsverfahren und Standards, welche für alle Produkte gelten und sich nur schwer mit agilen Methoden vereinbaren lassen
	-	breites Spektrum an Fähigkeiten, agiles Vorgehen benötigen eher ein hohes Qualifikationsniveau 
	-	Widerstand aufgrund von gewachsenen Strukturen und konservativer Unternehmenskultur
	-	Änderungsmanagement kann problematisch sein, da ein formelles Genehmigungsverfahren für Änderungen konträr zu Refactoring steht.
	-	Prozesse, bei denen sich die Software externen Test stellen muss, sind nicht mit dem Ansatz test-first vereinbar
-	Die Einführung agiler Methoden in Unternehmen erfordert häufig einen Kulturwandel
