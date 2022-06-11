# Implementierung und Vergleich von WebSockets und WebTransport im Hinblick auf Geschwindigkeit, Stabilität und Performanz unter Last

## Grundlagen

### WebSocket

Bei WebSockets handelt es sich um eine API, die eine bidirektionale Kommunikation zwischen Client und Server ermöglicht [[1]](#ref1). Durch das eventbasierte Verhalten ist es nicht erforderlich, Daten in regelmäßigen Abständen per Polling vom Server zu beziehen. Es besteht eine offene Verbindung auf der sowohl der Client Daten an der Server senden kann als auch der Server an den Client. Dabei wird zu Beginn ein sogenannter Handshake ausgeführt *(HTTP Upgrade)*, anhand dessen sich Client und Server auf eine Kommunikation mit WebSocket einigen [[2]](#ref2). Nachrichten werden für die Übertragung in einen Rahmen verpackt, sodass diese aufbauend auf dem TCP-Protokoll versendet werden können.

Der Ablauf der Client-Server-Kommunikation ist in *Abbildung 1* dargestellt. Hier wird deutlich, dass der Client eine WebSocket-Anfrage an den Server schickt und diese vom Server beantwortet wird. Wenn eine WebSocket-Verbindung aufgebaut werden kann, antwortet der Server mit der Antwort Upgrade der Verbindung. Fortan herrscht eine persistente und offene Verbindung, auf der Daten ausgetauscht werden können. Schließt eine der beiden Seiten den Kommunikationskanal, wird die Verbindung für beide Seiten getrennt.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/websocket_connection.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 1: Client-Server-Kommunikation bei WebSockets <a href="#/praktikum/with%C3%B6ft/ausarbeitung?id=ref3">[3]</a>.</figcaption>
</figure>

Für die Implementierung von WebSockets im Frontend wird Socket.IO [[4]](#ref4) verwendet und für die Implementierung im Backend wird python-socketio [[5]](#ref5) verwendet. Auf die genaue Einbindung, Verwendung und Implementierung wird in der Sektion [Implementierung](#implementierung) eingegangen.

### WebTransport

Bei WebTransport handelt es sich ebenfalls um eine API, die das HTTP/3 Protokoll verwendet, um Daten zu einem Server zu senden und von einem Server zu empfangen [[6]](#ref6). Es unterstützt das unzuverlässige Senden von Datagrams und das zuverlässige Senden von Daten über Streams. Sowohl die Spezifikation als auch die zur Verfügung stehende API sind aktuell als *work-in-progress* deklariert und können sich deshalb jeder Zeit ändern [[7]](#ref7). Wie bei WebSockets auch wird eine bidirektionale Verbindung aufgebaut, auf der Daten ausgetauscht werden können.

Datagrams sind für das Senden und Empfangen solcher Daten gedacht, die nicht zwingend zugestellt werden müssen. Daher erinnert das nutzen der Datagrams auch an die Verwendung des UDP-Protokolls, welches über keine Verbindungskontrolle und Zustellungsgarantie verfügt. Laut Angaben der Entwickler, hat hier WebTransport jedoch den Vorteil, dass diese Nachrichten auf Grund der Verwendung von HTTP/3 verschlüsselt sind und ebenfalls eine Überlastungskontrolle besteht. HTTP/3 setzt auf das QUIC-Protokoll auf und die Kommunikation über HTTP/3 muss zwingend über HTTPS (SSL/TLS) erfolgen, eine Kommunikation über das unverschlüsselte HTTP wird nicht unterstützt [[8]](#ref8). Die Größe der Datagrams ist durch *maximum transmission unit (MTU)* des unterliegenden Protokolls limitiert.

Die Streams sollen einen sicheren und geordneten Datentransfer sicherstellen. Das Öffnen mehrerer Streams wird mit dem Aufbau mehrerer TCP-Verbindungen verglichen. Weil WebTransport jedoch HTTP/3 und das darunterliegende QUIC-Protokoll verwendet, können diese Streams mit vergleichsweise weniger Overhead geöffnet und geschlossen werden.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/webtransport_connection.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 2: Client-Server-Kommunikation bei WebTransport <a href="#/praktikum/with%C3%B6ft/ausarbeitung?id=ref9">[9]</a>.</figcaption>
</figure>

*Abbildung 2* stellt die verschiedenen Transfermöglichkeiten mit WebTransport dar. Datagrams sind ungeordnet und unzuverlässig. Streams hingegen stellen die Ordnung und die Zuverlässigkeit bei dem Transport der Daten sicher. Werden für eine Verbindung parallele Streams verwendet, so ist auch hier die Ordnung und Zustellgarantie innerhalb der einzelnen Streams gegeben. Es kann aber vorkommen, dass Daten nach der Übertragung durch parallele Streams sortiert werden müssen, weil zwischen den verschiedenen Streams keine Ordnung eingehalten wird.

Für die Implementierung von WebTransport im Frontend wird auf Grund der Neuheit der Technologie keine Library verwendet. Für die Implementierung im Backend wird auf einer vorhandenen Beispielimplementierung für WebTransport von Google in Python aufgebaut [[10]](#ref10). Es wird ebenfalls auf die genaue Einbindung, Verwendung und Implementierung wird in der Sektion [Implementierung](#implementierung) eingegangen.

## Forschungserklärung

### 

## Implementierung

### Frontend

### Backend

## Evaluation

### Messung der Geschwindigkeit

### Messung der Round Trip Time

Für diesen Test wurde bei jedem Testdurchlauf immer nur **ein** Client verbunden, um Übertragung von kleinen Nachrichten. Dabei wurde eine Nachricht an den Server geschickt und gewartet, bis der Client eine Antwort erhielt. Der ersten Zeile der Ergebnisse kann entnommen werden, dass hier ein Datenpaket an den Server geschickt wurde und auch nur für dieses Paket auf die Antwort gewartet wurde. Daher kann man für diese Zeile von der tatsächlichen Latenz (Round Trip Time) sprechen. Das Prinzip 100 mal wiederholt, um verlässliche Ergebnisse zu erhalten.

In den darauffolgenden Zeilen wurde gemessen, wie lange es dauert *X* Datenpakete zu versenden und für jedes eine Antwort zu erhalten. Auch hier wurde das Prinzip wurde jede Zeile 100 mal wiederholt. Die Ergebnisse sind in Millisekunden.

|        | WebTransport | WebSocket |
| ------ | ------------ | --------- |
| 1      | 11           | 12        |
| 10     | 31           | 117       |
| 100    | 115          | 1094      |
| 1.000  | 487          | 11341     |
| 10.000 | 2280         | 114392    |

WebTransport kann hier auf Client-Seite einfach parallele Aufrufe starten, während das bei WebSockets nicht ohne weiteres so auf dem selben Channel möglich ist. Deswegen sieht man bei WebSockets als Ergebnis immer nahezu die Anzahl der Datenpakete mit der ursprünglichen Latenz multipliziert. Bei WebTransport kann festgestellt werden, dass dieses Protokoll auch bei vielen gleichzeitigen Anfragen langsamer wird, auf Grund der parallelen Abfragen zeitlich deutlich vor den WebSockets liegt.

### Maximaler Austausch von Nachrichten pro Sekunde

### Austausch großer Datenmengen

Für diesen Test wurde bei jedem Testdurchlauf immer nur **ein** Client mit dem Server verbunden, um die Zeit für den Download zu messen. Für jede Datengröße und jedes Protokoll wurde die Datei 101 mal heruntergeladen und die Durchschnittszeit in Millisekunden berechnet.

|        | WebTransport        | WebSocket           |
| ------ | ------------------- | ------------------- |
| 1 KB   | **12.484993811881** | **11.572652382426** |
| 1 MB   | **104.33856019879** | **124.32311649134** |
| 10 MB  | **904.5404451578**  | **1114.5141601562** |
| 100 MB | **9420.1602935734** | **1537.4056940362** |
| 1 GB   | **95298.762860362** | **10263.622625376** |

Dateien, die größer sind als 1GB können nicht mehr Standardmäßig über WebSocket transportiert werden. Hier ist die Zunahme eines Streams erforderlich, sodass die Datei aufgeteilt werden kann und nicht komplett im Arbeitsspeicher liegen muss. Eine komplette Übertragung führt meist auf Client-Seite zu Fehlern *(Out-Of-Memory)*.

<img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/websocketOutOfMemory.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />



## Referenzen

<span id="ref1">[1]: *["The WebSocket API (WebSockets)"](https://web.dev/webtransport/#:~:text=WebTransport%20is%20a%20web%20API,reliably%20via%20its%20streams%20APIs.) (Mozilla Dev Artikel). Zugriff: 21.5.2021.*</span>

<span id="ref2">[2]: *["The WebSocket Protocol"](https://datatracker.ietf.org/doc/html/rfc6455) (Internet Engineering Task Force Artikel). Zugriff: 21.5.2021.*</span>

<span id="ref3">[3]: *["File:Websocket connection.png"](https://en.wikipedia.org/wiki/File:Websocket_connection.png) (Wikimedia Common File). Zugriff: 21.5.2021.*</span>

<span id="ref4">[4]: *["Socket.IO"](https://socket.io/) (Library Documentation). Zugriff: 21.5.2021.*</span>

<span id="ref5">[5]: *["python-socketio"](https://python-socketio.readthedocs.io/en/latest/) (Library Documentation). Zugriff: 21.5.2021.*</span>

<span id="ref6">[6]: *["Using WebTransport"](https://web.dev/webtransport/#:~:text=WebTransport%20is%20a%20web%20API,reliably%20via%20its%20streams%20APIs.) (WebDev Artikel). Zugriff: 21.5.2021.*</span>

<span id="ref7">[7]: *["WebTransport"](https://www.w3.org/TR/webtransport/#introduction) (W3C Working Draft). Zugriff: 21.5.2021.*</span>

<span id="ref8">[8]: *["HTTP/3: From root to tip"](https://blog.cloudflare.com/http-3-from-root-to-tip/) (Blogeintrag). Zugriff: 21.5.2021.*</span>

<span id="ref9">[9]: *["W3C WebTransport Working Group Updates - October 2021"](https://www.youtube.com/watch?v=2yQIBZbKhdU) (Bildauszug aus W3C WebTransport Vortrag). Zugriff: 21.5.2021.*</span>

<span id="ref10">[10]: *["An example WebTransport over HTTP/3 server based on the aioquic library"](https://github.com/GoogleChrome/samples/blob/gh-pages/webtransport/webtransport_server.py) (GitHub File). Zugriff: 21.5.2021.*</span>