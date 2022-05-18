# Maxim Fründt

# Untersuchung der Vorteile des Entity-Component-System und des Data Oriented Designs

Im Folgenden wird ein kurzer Überblick über die Praktikumsausarbeitung aus dem Modul Spezielle Gebiete zum Software Engineering gegeben.

## Hintergrund

Die Videospielindustrie wächst stetig. Immer schneller und besser sollen Videospiele entwickeln werden. Der Erfolg eines Videospiels beginnt dabei schon bei der Planung. Neben der Entwicklung eines Spielekonzepts müssen auch Entscheidungen über den Aufbau der Architektur getroffen werden.

Immer häufiger wird dafür das Entity-Component-System (ECS) verwendet, oft in Verbindung mit einem Data Oriented Design (DOD). Im Rahmen des Praktikums sollen die Vorteile dieser Herangehensweisen beleuchtet werden mit Fokus auf Performance.

## Forschungsfragen
- Wie ist das ECS aufgebaut?
- Welche Vor- und Nachteile bringt das ECS-Pattern?
- Wie groß ist der Einfluss auf die Performance, wenn man das ECS-Pattern verwendet?
- Wie wendet man DOD an?
- Welche Vor- und Nachteile bringt DOD?
- Wie groß ist der Einfluss auf die Performance, wenn man DOD verwendet?

## Evaluierung
- Implementierung des ECS in bestehendes Spielprojekt (PM-Dungeon), bzw neues Spielprojekt mit anschließendem Performancevergleich der Versionen
- Umsetzung des DOD als nächsten Schritt, wieder mit Vergleich der Performance

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
Zunächst soll anhand des Projekts PM-Dungeon dieser Umbau erfolgen, dafür wird im Folgenden auf die Details des Umbaus eingegangen.

### Erstellen der Komponenten und Systeme

In Abbildung 1 ist das Klassendiagramm des PM-Dungeon dargestellt. Um die Klassen in das ECS-Pattern zu überführen müssen markante Variablen, wie beispielsweise
die Gesundheit, in Komponenten überführt werden. Die Komponenten sollten neben den Daten jedoch keine Logik enthalten. Sämtliche Logik muss in Systeme
überführt werden. Für das Beispiel der Gesundheit wird ein System angelegt, welches für jedes Entity mit einer Gesundheitskomponente prüft, ob dessen
Gesundheitswert größer 0 ist. Ist das nicht der Fall, wird das Entity gelöscht.

|*Bild folgt*|
|:--:| 
| *Abbildung 1: Klassendiagramm des PM-Dungeon* |

Untenstehend sind die erstellten Komponenten und Systeme aufgelistet. Um mithilfe der Komponenten das ursprüngliche Verhalten von Charakteren und Items
zu erhalten, müssen Entities erstellt werden und die passenden Komponenten zugewiesen werden. Dafür bietet sich das Factory-Method-Pattern an,
welches ein Entity als beispielsweise Monster erstellt, indem es ein neues Entitiy erstellt und die benötigten Komponenten zuweist.

|*Komponententabelle folgt*|
|:--:| 
|  |

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

Die Modularität kommt jedoch mit dem Nachteil, dass die statische Prüfung des Codes nicht mehr darstellt, ob ein Entity mit seiner Kombination aus
Komponenten von einem ausgewählten System bearbeitet werden kann. Wenn beispielsweise ein System erstellt wird, welches nur Entities mit Komponente A
und Komponente B bearbeiten soll, muss der Entwickler selbst darauf achten, dass die Entities diese Komponenten aufweisen, wenn das System diese bearbeiten soll. 

### Zusammenfassung

Schließlich sollen die Vor- und Nachteile des ECS-Patterns kurz aufgelistet werden.

Vorteile:
- Neue Spielobjekte und Spielmechaniken sind einfach und schnell erstellbar
- Sonderfunktionen sind einfacher umzusetzen
- Einfach erweiterbar für Außenstehende, da nicht jedes System gleichzeitig betrachtet werden muss
- Tests sind einfacher aufzusetzen und es werden weniger Tests benötigt

Nachteile:
- Das ECS-Pattern erfordert ein Umdenken gegenüber klassischer objektorientierter Programmierung
- Das Einteilen, welche Daten eine eigene Komponente und welche Logiken ein eigenes System benötigen kann schwer sein
- Statische Codeprüfung kann nicht sicherstellen, dass Entities die richtigen Komponenten haben um von einem System ausgeführt zu werden