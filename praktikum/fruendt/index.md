# Maxim Fründt

# Untersuchung der Vorteile des Entity Component System und des Data-Oriented Designs

Im Folgenden wird ein kurzer Überblick über die Praktikumsausarbeitung aus dem Modul Spezielle Gebiete zum Software Engineering gegeben.

## Hintergrund

Die Videospielindustrie wächst stetig. Immer schneller und besser sollen Videospiele entwickeln werden. Der Erfolg eines Videospiels beginnt dabei schon bei der Planung. Neben der Entwicklung eines Spielekonzepts müssen auch Entscheidungen über den Aufbau der Architektur getroffen werden.

Immer häufiger wird dafür das Entity-Component-System (ECS) verwendet, oft in Verbindung mit einem Data Oriented Design (DOD). Im Rahmen des Praktikums sollen die Vorteile dieser Herangehensweisen beleuchtet werden mit Fokus auf Performance.

Das ECS-Pattern und das DOD wird neben Videospielen auch in anderen datenintensiven Anwendungen, wie beispielsweise Simulationsprogrammen verwendet.

Auf die Grundlegenden Eigenschaften und den Aufbau des ECS-Patterns und des DOD wird im Rahmen der Ausarbeitung nur beiläufig eingegangen. Für einen genaueren Überblick empfehlen sich externe Ressourcen wie beispielseweise das ECS-FAQ von Sander Mertens[1].

## Forschungsfragen
- Wie ist das ECS aufgebaut?
- Welche Vor- und Nachteile bringt das ECS-Pattern?
- Wie groß ist der Einfluss auf die Performance, wenn man das ECS-Pattern verwendet?
- Wie wendet man DOD an?
- Welche Vor- und Nachteile bringt DOD?
- Wie groß ist der Einfluss auf die Performance, wenn man DOD verwendet?

## Evaluierung
- Das ECS-Pattern wird in dem bestehenden Spielprojekt PM-Dungeon eingesetzt, von welchem Sourcecode in Java existiert, der nach OOP-Ansatz geschrieben wurde.
- Zusätzlich soll in C++ ein Projekt erstellt werden. Zunächst nach OOP-Ansatz, anschließend mit ECS-Pattern.
- Anschließend Performancevergleich zwischen den ECS- und OOP-Ansätzen.
- Das C++ Projekt mit ECS-Ansatz wird schließlich gemäß DOD abgeändert.
- Performancevergleich zwischen ECS- und DOD-Ansatz

## Zeitplan
| Termin     |     Meilenstein                      |
|:----------:|:------------------------------------:|
| 28.04.2022 | Finalisierung der Fragestellungen    |
| 05.05.2022 | Analyse des ECS und DOD              |
| 12.05.2022 | Umsetzung eines Projekts mit ECS     |
| 19.05.2022 | Umsetzung eines Projekts mit ECS     |
| 26.05.2022 | Anwenden des DOD                     |
| 02.06.2022 | Anwenden des DOD                     |
| 09.06.2022 | Performancevegleich der Projekte     |
| 16.06.2022 | Aufbereiten der Ergebnisse           |
| 23.06.2022 |                                      |
| 30.06.2022 | Abgabe                               |

## Aufbau des Entity Component System-Patterns

Um ein Projekt vom Objektorientierten Programmierstil in das ECS-Pattern zu überführen, muss die gesamte Struktur des Projekts verändert werden.
Zunächst soll anhand des Projekts PM-Dungeon dieser Umbau erfolgen, dafür wird im Folgenden auf die Details des Umbaus eingegangen. Anschließend wird das
neuerstellte Projekt in C++ im gleichen Stil umgebaut.

### Erstellen der Komponenten und Systeme aus einem bestehendem OOP-Projekt

Das Projekt PM-Dungeon ist im Rahmen des Moduls Programmiermethoden erstellt worden und verwendet eine gestellte Bibliothek, welche libGDX verwendet um Aufgaben wie die Verwaltung und Generierung der Spielwelt zu übernehmen.

In Abbildung 1 ist das Klassendiagramm des PM-Dungeon vereinfacht dargestellt. Exemplarisch sind die nötigen Klassen für Charaktere und Items abgebildet.
OOP-typisch gibt es jeweils eine abstrakte Basisklasse für Items und Charaktere, welche geerbt und erweitert wird. 

|![](assets/PMDKlassen.png)|
|:--:| 
| *Abbildung 1: Klassendiagramm des PM-Dungeon für Charaktere und Items* |

Um die Klassen in das ECS-Pattern zu überführen müssen markante Variablen der Klassen, wie beispielsweise die Gesundheit, in Komponenten überführt werden. Die Komponenten sollten neben den Daten jedoch keine Logik enthalten. Sämtliche Logik muss in Systeme überführt werden. Für das Beispiel der Gesundheit wird ein System angelegt, welches für jedes Entity mit einer Gesundheitskomponente prüft, ob dessen
Gesundheitswert größer 0 ist. Ist das nicht der Fall, wird das Entity gelöscht.

|![](assets/PMDECS.png)|
|:--:| 
| *Abbildung 2: Entity-Component-Zusammensetzung für Charaktere und Items* |

In Abbildung 2 ist die Zusammensetzung der Komponenten dargestellt, welche die Daten der in Abbildung 1 dargestellten Klassen übernehmen. Für die Komponenten gibt es entsprechende Systeme, die die Komponenten verwerten. Durch die Komponenten wird das erstellen eines Entities wie ein Baukastensystem.

Untenstehend sind alle erstellten Komponenten und Systeme aufgelistet. Um mithilfe der Komponenten das ursprüngliche Verhalten von Charakteren und Items
zu erhalten, müssen Entities erstellt werden und die passenden Komponenten zugewiesen werden. Dafür bietet sich das Factory-Method-Pattern an,
welches ein Entity als beispielsweise Monster erstellt, indem es ein neues Entitiy erstellt und die benötigten Komponenten parametrisiert zuweist.

| Komponente                | Daten|
|:--:|:--:|
| Animation             | Enthält die Sprites die die Animation des Entities ausmachen |
| Experience            | Erfahrungspunkte des Entities |
| Health                | Gesundheit des Entities |
| Inventory             | Inventar des Entities |
| MeleeCombatStats      | Angriffsattribute für den Nahkampf |
| PlayerControl         | Steuerung für Spielercharaktere |
| Position              | Position des Entities |
| RangedCombatStats     | Angriffsattribute für den Fernkampf |
| Sprite                | Enthält das Sprite des Entities |
| Velocity              | Geschwindigkeit des Entities |
| HealingPotionStats    | Attribute für Heilungsitems |
| MeleeWeaponStats      | Attribute für Nahkampfwaffen |
| RangedWeaponStats     | Attribute für Fernkampfwaffen |
| Shieldstats           | Attribute für Verteidiungsitems |
| DropRequest           | Event für das Fallenlassen von Items |
| ItemDestroyRequest    | Event für das zerstören von Items |
| Knockback             | Event für das Erleiden von Rückschlag |
| MeleeAttack           | Event für eine Nahkampfattacke |
| PickupRequest         | Event für den Versuch ein Item aufzuheben |
| RangedAttack          | Event für eine Fernkampfattacke |
| UseRequest            | Event für das Benutzen eines Items |

| System                | Funktion|
|:--:|:--:|
| CameraSystem          | Bewegt die Kamera zur Spielerposition |
| DamageSystem          | Prüft ob ein erstelltes Attack-Entity ein tötbares Entity trifft und fügt Schaden zu, falls dem so ist |
| GuiSystem             | Aktualisiert die GUI des Spielers |
| HealthSystem          | Löscht Entities, die keine Leben mehr haben |
| ItemSystem            | Nimmt Item-Event-Entities an und führt entsprechende Aktion aus |
| KiSystem              | Steuert die nicht-Spieler-Charaktere entsprechend ihrer unterschiedlichen Logik |
| KnockbackSystem       | Berechnet die Flugbahn des Knockback von Entities |
| MovementSystem        | Ändert die Position der Entities, entsprechend ihrer Geschwindigkeit |
| PlayerControlSystem   | Nimmt Eingaben für den Spielercharakter an |
| SpriteSystem          | Stellt die Sprites aller Objekte im Dungeon dar |


### Implementierung des ECS-Ansatzes im PM-Dungeon

Als ECS-Framework wird für das PM-Dungeon Ashley[2] eingesetzt, da es eine gute Dokumentation und Performance aufweist. Die erstellten Komponenten und Systeme werden den Vorgaben des Frameworks entsprechend umgesetzt. Für den Spieler, die Monster und die Items werden Entities mit entsprechenden Komponentenzusammensetzungen erstellt.

## Vor- und Nachteile des Entity Component System-Patterns

Durch den Einsatz des ECS-Patterns wird die Denkweise, wie man Probleme in der Spielentwicklung lösen möchte, verändert. Im Folgenden wird ein Beispiel für die
Erweiterung eines bestehenden Projekts vorgestellt und anhand dessen auf Vor- und Nachteile eingegangen.

**Beispiel A**:
Das Spiel besitzt bereits Gegenspieler, es soll jedoch ein neuer Typ hingzugefügt werden. Dieser weist kein neues Verhalten auf, sondern hat lediglich andere Werte.

**Beispiel B**:
Der neuhinzugefügte Gegenspieler soll ein komplett neues Verhalten aufweisen. Bisher war das Spiel nahkampffokusiert, der neue Gegenspieler soll jedoch Bälle auf
den Spieler werfen, wenn dieser außer Reichweite ist.

Im OOP-Ansatz würde ein Lösungsansatz so aussehen:
- **Beispiel A**: Es existiert eine Basisklasse mit Attributen wie `Position` und `Health` und Methoden wie `move()` und `takeDamage()`. Für den neuen Gegenspieler
wird eine neue Klasse angelegt, welche die Basisklasse erbt und den Attributen Werte zuweist.
- **Beispiel B**: Es muss eine neue Klasse für das Geschossen angelegt und mit Logik gefüllt werden. Der Gegenspieler muss neue Methoden erhalten, die entscheiden
wann und wie das Geschoss abgefeuert wird. Geschosse müssen in die bestehende Infrastruktur eingebaut werden (Sprite muss gezeichnet werden, Geschoss muss bewegt werden,
Geschoss muss bei Kontakt mit dem Spieler schaden anrichten).

Im Folgenden wird der Lösungansatz im ECS-Ansatz vorgestellt:
- **Beispiel A**: Es existieren Komponenten wie `Position` und `Health` und entsprechende Systeme `MovementSystem` und `HealthSystem`. Für den neuen Gegenspieler
muss eine neue Kombination aus Komponenten erstellt werden (möglich über das Factory-Pattern).
- **Beispiel B**: Für das Geschoss muss eine neue Kombination aus Komponenten erstellt werden (bestehende Komponenten wie Position, Sprite etc. können dafür verwendet werden).
Das Kampfsystem muss erweitert werden, sodass das Geschoss-Entitiy erstellt wird, sobald die Bedingungen zum werfen erfüllt sind. 

### Erweiterbarkeit

Im Beispiel A ist der Unterschied zwischen den Ansätzen noch gering. Im OOP-Ansatz muss durch die Vererbung wenig zu der neuen Klasse hinzugefügt werden. Lediglich
ein Konstruktor muss angelegt und mit den Parametern des neuen Gegenspielers gefüllt werden. Im ECS-Ansatz hingegen wird ein neues Entity erstellt und mit
bestehenden Komponenten gefüllt, welche ebenfalls die Parameter des neuen Gegenspielers erhalten. In diesem einfachen Beispiel konnte durch das ECS-Patterns
jedoch schon die Notwendigkeit einer weiteren Klasse eingesparrt werden, wodurch die Komplexität des Projekts verringert wird.

Im Beispiel B hingegen wird der Unterschied der Ansätze deutlicher. Jetzt benötigt der OOP-Ansatz neue und überladene Methoden in der neuen Klasse. Zudem muss
neue Infrastruktur für das Geschosse geschaffen und alte Infrastruktur angepasst werden. Im ECS-Ansatz muss auch bestehende Infrastuktur angepasst werden, an dem
Punkt wo das Geschoss erzeugt werden soll. Durch die Modularität, welche die Komponenten dem Entwickler geben können jedoch die bestehenden Systeme zum Bewegen,
Animieren und der Erkennung einer Kolission ohne weitere Änderungen verwendet werden.

Durch die Weiterverwendung von bestehenden Systemen ist es unter Umständen nicht einmal nötig, Kentnisse über diese zu haben, um neue Funktionalitäten in das Projekt einzubauen.
Es ist also für Außenstehende einfacher ohne große Einarbeitung am Projekt mitzuwirken.

Ein weiterer Vorteil des ECS-Patterns ist, dass besondere Verhaltensweisen von Objekten durch die Komponenten einfacher erzielt werden können. Angenommen man
möchte für Testzwecke den Spieler Unsterblichkeit geben. Im OOP-Ansatz könnte eine Lösung dazu sein, eine Flag einzubauen. Wenn diese Flag gesetzt wird, wird
die Funktion, welche die Gesundheit des Spielers herabsetzen soll, nicht weiter ausgeführt. Im ECS-Ansatz würde man für dieses Verhalten lediglich die
`Health`-Komponente des Spielers entfernen. Durch den ECS-Ansatz wird zudem die Gefahr verringert, unabsichtlich Fehler in bestehende Code-Teile einzuschleusen.

Als Nachteil kann sich jedoch der Aufwand des Designens von neuen Funktionen ergeben. Nicht immer ist komplett klar, welche Daten eine eigene Komponente darstellen
und welche Daten besser Teil einer anderen wären. Dasselbe ergibt sich für die Systeme.

### Wartbarkeit

Wie in den Beispielen erkennbar, kann der OOP-Ansatz schnell zu einer komplexen Vererbungshierachie auswachsen, wenn das Projekt größer wird. Dadurch
wird die Wartbarkeit erschwert. Wenn im ECS-Ansatz ein Fehler auftritt, muss in der Regel nur ein System betrachtet werden, welches eine Logik ausführt.
Dadurch, dass ein System für eine Logik entwickelt wird, können zudem Seiteneffekte auf Logiken, welche nicht hier stattfinden sollen, vermeiden.

### Tests

Durch die Kapselung der Logik in Komponenten und Systemen wird das Testen stark vereinfacht. Es werden weniger Tests benötigt, da die Systeme mit ihren
zugehörigen Komponenten separat getestet werden können. Zudem sinkt die Komplexität der Tests im Setup. Im Beispiel B wird dies deutlich. Im OOP-Ansatz
muss die Klasse für das Geschoss als ganzes evaluiert werden, wodurch einige neue Tests entstehen. Im ECS-Ansatz müssen lediglich ein paar weitere Tests
zum Kampfsystem hinzugefügt werden.

Zudem kann im ECS-Ansatz oft auf Mockups verzichtet werden, die Objekte oft benötigen. Der Kerngedanke von Systemen ist es Daten zu erhalten, zu transformieren und auszugeben.
Wenn so ein System getestet werden soll, müssen also lediglich Testdaten eingegeben und anschließend evaluiert werden.

Die Modularität kommt jedoch mit dem Nachteil, dass die statische Prüfung des Codes nicht mehr darstellt, ob ein Entity mit seiner Kombination aus
Komponenten von einem ausgewählten System bearbeitet werden kann. Wenn beispielsweise ein System erstellt wird, welches nur Entities mit Komponente A
und Komponente B bearbeiten soll, muss der Entwickler selbst darauf achten, dass die Entities diese Komponenten aufweisen, wenn das System diese bearbeiten soll. 

### Performance

Systeme werden ausgelegt, ohne dass die Bearbeitungsreihenfolge der Systeme eine Rolle spielt, da diese nicht klar definiert sein muss. Dadurch, dass die Bearbeitungsreihenfolge keine Rolle spielt, können die verschiedenen Systeme einfach Multithreaded ausgeführt werden. Da zudem nur eine kleine Einheit an Daten in einem System, über viele Entities bearbeitet werden kann, bietet es sich an diese im Speicher nebeneinander zu lagern. Dadurch kann der CPU-Cache besser ausgenutzt werden. Mehr dazu im Kapitel über DOD.

### Zusammenfassung

Schließlich sollen die Vor- und Nachteile des ECS-Patterns kurz aufgelistet werden.

Vorteile:
- Neue Spielobjekte und Spielmechaniken sind einfach und schnell erstellbar
- Sonderfunktionen sind einfacher umzusetzen
- Einfach erweiterbar für Außenstehende, da nicht jedes System gleichzeitig betrachtet werden muss
- Tests sind einfacher aufzusetzen und es werden weniger Tests benötigt
- Multithreading und DOD einfach implementierbar

Nachteile:
- Das ECS-Pattern erfordert ein Umdenken gegenüber klassischer objektorientierter Programmierung
- Das Einteilen, welche Daten eine eigene Komponente und welche Logiken ein eigenes System benötigen kann schwer sein
- Statische Codeprüfung kann nicht sicherstellen, dass Entities die richtigen Komponenten haben um von einem System ausgeführt zu werden

## Performancevergleich zwischen OOP- und ECS-Ansatz

TBD

## Anwenden des Data-Oriented-Designs

Beim Data-Oriented-Design geht es darum, dass die Daten des Programms im Vordergrund stehen. Das Programm wird also so geschrieben, dass Funktionen auf die gekapselten Daten zugreifen und diese Transformieren, ohne Dabei viel Abstraktion aufzuweisen. Bei der Entwicklung der Transformationsroutinen sollte der Entwickler sich zudem Gedanken machen, wie die Transformation tatsächlich auf dem CPU ausgeführt wird, um diese performant gestalten zu können.
Das DOD verfolgt in erster Linie das Ziel, Daten zu kapseln und so anzuordnen, dass der CPU-Cache am effektivsten verwendet wird. Als Beispiel wird ein Gesundheitssystem angenommen, welches die Gesundheit jedes Entities prüft, um dieses als tot zu markieren. Für die Abfrage der Gesundheit wird die Gesundheitskomponente des Entities in den Cache geladen, bearbeitet und wieder entladen. Wenn die Gesundheitskomponenten nun im Speicher nebeneinander liegen können mit dem Füllen einer Cache-Zeile mehrere Gesundheitskomponenten geprüft werden, wodurch Ladezeit eingesparrt werden kann. Als Vergleich wird im klassischen OOP-Ansatz das gesamte Entity geladen, um dessen Gesundheit zu prüfen. Durch den größeren Overhead den das Objekt mit sich bringt, werden mehr ungenutzte Daten in den Cache geladen.

TBD

## Vor- und Nachteile des Data-Oriented-Designs

Obwohl das ECS-Pattern nicht zwingend dem DOD folgt, weisen beide Ansätze Schnittmengen auf und können dementsprechend einfach zusammenverwendet werden. Aus diesem Grunde wird auf die Vor- und Nachteile in diesem Kapitel weniger stark eingegangen und auf das vorangegangene Kapitel verwiesen.

Vorteile:
- Dadurch, dass zusammengehörige Daten im Speicher nebeneinander liegen, können die CPU-Misses minimiert werden (Vereinfachtgesagt die Anzahl an Daten die unnötig in den CPU-Cache geladen werden).
- Durch die Kappselung der Daten bietet sich zudem eine parallele Ausführung über die Daten an, indem auf zusammenhängende Daten nur an einer Stelle zugegriffen wird, wie das beispielsweise beim ECS-Pattern der Fall ist.
- Unit-Tests können einfacher erstellt werden, da lediglich Eingabedaten benötigt werden, welche transformiert und anschließend evaluiert werden müssen.
- Einfach erweiterbar und zu verstehen

Nachteile:
- Erfordert umdenken gegenüber klassischem OOP-Ansatz
- Es kann schwer sein DOD mit bestehenden Systemen zu koppeln, welche nicht DOD befolgen

## Performancevergleich zwischen ECS- und DOD-Ansatz

TBD

## Zusammenfassung

TBD

[1]: Sander Mertens. https://github.com/SanderMertens/ecs-faq.
[2]: libGDX. https://github.com/libgdx/ashley.