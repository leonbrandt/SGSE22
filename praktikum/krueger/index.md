# Benjamin Krüger

# Thema: Konzeptionierung und Implementierung von frameworkunabhängigen Softwaretests für Webapplikationen

## Hintergrund:
Im Unternehmen nehmen Webapplikationen eine zunehmenden Anteil der Applikationen dar.
Derzeit sind Softwaretests wenn überhaupt, nur nebenläufig umgesetzt, wodurch nur geringe Kenntnisse vorhanden sind.
Daher besteht die Motivation, weitere Kenntnisse hinsichtlich dem Testen von Webapplikationen zu gewinnen.

Es gilt, anhand eines aktuell entwickelten Projekts weit verbreitete Testframeworks (Cypress, Protractor, Jest, Playwright, Puppeteer, Silenium?) zu vergleichen und erste Tests zu entwickeln.
Hierbei steht im Fokus, die Tests derart zu konzeptionieren, sodass Komponenten unabhängig vom verwendeten
Testframework wiederverwendet werden können und im Falle eines Frameworkwechsels lediglich die Schnittstelle zum jeweiligen Framework neu implementiert werden muss. Somit könnte flexibler auf Anforderungsänderungen reagiert werden.

## Inhalte/Fragestellung:
- Wie und in welchem Umfang (Schnittmenge der Möglichkeiten der gängigen Frameworks) können frameworkunabhängige Testkomponenten umgesetzt werden?
    - Vergleich (Vorteile/Nachteile) von unterschiedlichen Lösungsansätzen (Adapter-Pattern, Dependency-Injection, ...?)
- Konzeptionierung unabhängiger Testkomponenten (unterschiedliche Testkategorien, End-To-End, GUI, UNIT)
- Workflows in Bezug auf Teststruktur analyisieren (TDD, BDD (Cucumber), ATDD). Vielleicht in manchen Frameworks integriert?
- Wie unterscheiden sich die Frameworks im Allgemeinen (
    Aufbau/Anwendung,
    Möglichkeiten,
    Reporting/Output (Form->HTML o.ä., Code-Coverage),
    Unterschiedliche Konzepte (Property-Based-, Mutation-Testing),
    Möglichkeit für Mocking, Stubs, Spies)?
- Konkrete Umsetzung erster Softwaretests durch Verwendung und Adaptierung der Testframeworks
    - Performance
    - ! Über weitere Unterschiede Nachdenken !
- Validierung

## Zeitplan
| Termin     |     Meilenstein                      |
|:----------:|:------------------------------------:|
| 05.05.2022 | Finalisierung der Aufgabenstellung   |
| 12.05.2022 | (Ausarbeitung Buch / Präsentation)  |
| 19.05.2022 | Vergleich von Lösungsansätzen zur Umsetzung von frameworkunabhängigen Softwaretests + Auswahl      |
| 26.05.2022 | Konzeptionierung Testsystem          |
| 02.06.2022 | Umsetzung erster Tests mit Frameworks         |
| 09.06.2022 | Umsetzung erster Tests mit Frameworks                      |
| 16.06.2022 | Validierung                          |
| 23.06.2022 |                                      |
| 30.06.2022 | Abgabe                               |