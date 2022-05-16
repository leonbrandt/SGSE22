# Implementierung und Vergleich von WebSockets und WebTransport im Hinblick auf Geschwindigkeit, Stabilität und Performanz unter Last

## Grundlagen

### WebTransport

### WebSocket

## Implementierung

### Frontend

### Backend

## Evaluation

### Messung der Geschwindigkeit

### Maximaler Austausch von Nachrichten pro Sekunde

### Austausch großer Datenmengen

Für diesen Test wurde bei jedem Testdurchlauf immer nur **ein** Client mit dem Server verbunden, um die Zeit für den Download zu messen. Für jede Datengröße und jedes Protokoll wurde die Datei 101 mal heruntergeladen und die Durchschnittszeit in Millisekunden berechnet.

|        | WebTransport | WebSocket           |
| ------ | ------------ | ------------------- |
| 1 KB   |              | **11.572652382426** |
| 1 MB   |              | **124.32311649134** |
| 10 MB  |              | **1114.5141601562** |
| 100 MB |              | **1537.4056940362** |
| 1 GB   |              | **10263.622625376** |

Dateien, die größer sind als 1GB können nicht mehr Standardmäßig über WebSocket transportiert werden. Hier ist die Zunahme eines Streams erforderlich, sodass die Datei aufgeteilt werden kann und nicht komplett im Arbeitsspeicher liegen muss. Eine komplette Übertragung führt meist auf Client-Seite zu Fehlern *(Out-Of-Memory)*.

<img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/websocketOutOfMemory.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />