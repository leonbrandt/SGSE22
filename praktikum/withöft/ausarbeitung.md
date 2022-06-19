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

Innerhalb dieser Ausarbeitung sollen WebSockets und WebTransport miteinander verglichen werden. Dazu sollen folgende Fragen untersucht und die beiden Protokolle im Hinblick verschiedener Aspekte einander gegenübergestellt werden.

- Hat WebTransport das Potential WebSockets abzulösen oder haben die Protokolle unterschiedliche Anwendungsbereiche, sodass sie sich gegenseitig ergänzen?
- Wie unterscheiden sich WebTransport und WebSockets von einander? Die Unterschiede in den festgelegten Standards wurden bereits in den Grundlagen erläutert. Hier soll es mehr um die Unterschiede in der Implementierung und bei den Messergebnissen gehen.
- Welche Schnittstelle ist unter welchen Bedingungen performanter?

Um letztere Frage vernünftig untersuchen zu können sollen gewisse Messungen durchgeführt werden. Dabei sollen die Tests die Verbindungseigenschaften der beiden Technologien messen, anhand derer ein Vergleich stattfinden kann. Hierbei sollen folgende Messungen durchgeführt werden:

- Messung der Geschwindigkeit, in Abhängigkeit von verbundenen Clients
- Messung der maximalen Austauschs von Nachrichten pro Sekunden
- Messung der Performanz bzw. der Übertragungsrate /-dauer beim Austausch von großen Datenmengen

Um die genannten Messungen durchführen zu können, soll sowohl eine kleine Frontend- als auch eine schmale Backend-Applikation implementiert werden. Hier sollen jeweils beide Protokolle für jeweils die drei Messbereiche verwendet werden. Im Zuge der Evaluation werden die Messergebnisse einander gegenüber gestellt, sodass abschließend ein Entscheidungsdiagramm entwickelt wurde, sodass Entwickler das passende Protokoll für ihren Anwendungszweck auswählen können.

## Implementierung

### Frontend



### Backend

Das Backend wurde in der Programmiersprache Python implementiert. Weil es sich bei WebTransport um ein sehr neues Protokoll handelt, hält sich die Auswahl der möglichen Programmiersprachen aktuell noch in Grenzen. Um eventuelle Unterschiede bei den Messungen nicht auf die Performanz der Programmiersprache zurückführen zu können, wurde die Schnittstelle für WebSocket ebenfalls in Python implementiert. Der folgende Quellcode zeigt hier, dass der Server mit dem *--protocol*-Argument aufgerufen werden kann, um entweder den WebTransport Server zu starten oder den WebSocket Server. Wird dieses Argument nicht angegeben, wird der WebTransport Server gestartet.

```python
parser = argparse.ArgumentParser(description='Run a websocket or webtransport server.')
    parser.add_argument('--protocol', type=str, default='webtransport', help='The protocol to run the server on. Default webtransport.', choices=['webtransport', 'websocket'])
    args = parser.parse_args()
    if args.protocol == 'webtransport':
        run_webtransport_server()
    elif args.protocol == 'websocket':
        run_websocket_server()
```

Für die Bereitstellung von Daten wurde eine simple Data-Klasse implementiert, die auf das Dateisystem zugreift und die Daten an aufrufende Methoden übergibt. Ursprünglich war auch ein Zugriff auf externe Schnittstellen, wie Börsendaten oder Wetterdaten geplant. Auf Grund der begrenzten erlaubten Abfragen dieser Schnittstellen und die damit einhergehende Problematik der geringen Aktualität, wurde diese Idee jedoch verworfen. Weil es in dieser Ausarbeitung um die Erforschung der genannten Protokolle geht, stellt das Weglassen der Zugriffe auf externe APIs kein Problem dar, weil die verfügbaren Testdateien unterschiedlicher Größe auf dem Dateisystem ausreichen. Auf dem Dateisystem des Servers befinden sich binäre Testdateien in folgenden Größen, die für die späteren Messungen verwendet werden:

- 1 Kilobyte
- 1 Megabyte
- 10 Megabyte
- 100 Megabyte
- 1 Gigabyte

```python
class Data:
    @staticmethod
    def get_file_names():
        files = [f for f in os.listdir("/home/moritz/downloadFiles") if not f.startswith('.')]
        return files
    @staticmethod
    def get_file(filename):
        with open("/home/moritz/downloadFiles/" + filename, "rb") as f:
            return f.read()
```

Der oben dargestellte Quellcodeauszug stellt zum einen die Methode dar, die die Dateinamen der vorhandenen Dateien ermittelt und zurückgibt. Die andere Methode liest auf Anfrage die spezifizierte Datei ein, sodass diese von den Protokoll-Servern übertragen werden kann.

#### WebTransport



#### WebSocket

Die Implementierung von WebSockets wurde analog zum Frontend mit Hilfe eines Socket.IO-Servers durchgeführt. Hierfür wurde die Bibliothek python-socketio [[5]](#ref5) verwendet. Die Implementierung stellte hierbei keine große Herausforderung dar, da die Anweisungen der Dokumentation einfach befolgt werden konnten. Wichtig war das Erlauben aller Zugriffpunkte in den CORS-Einstellungen, weil der Server auf einer Domain gehostet wird, jedoch das Frontend lokal zum Testen ausgeführt wird. Der untere Quellcode zeigt die einfache Initialisierung des Servers sowie das Starten durch den Aufruf der `run_websocket_server`-Funktion.

```python
io = socketio.AsyncServer(async_mode='aiohttp', cors_allowed_origins='*')
app = web.Application()
sio.attach(app)
def run_websocket_server():
    web.run_app(app, host='websocket.withoeft.nz', port=4444)
```

Um jetzt per Client auf den WebSocket-Server zugreifen zu können, müssen lediglich die Zugriffspunkte (sog. Channels) definiert werden. Im unteren Codeauszug werden alle benötigten Zugriffspunkte für das spätere Testen aufgeführt, wobei die Endpunkte *connect* und *disconnect* vor allem zum Debuggen dienen. Der *ping*-Channel wird vom Frontend für die Ermittlung des Pings verwendet. Hier wird lediglich eine einfache Nachricht zurück an den Client gesendet. Der Endpunkt *download-files-list* dient der Übermittlung der zur Verfügung stehenden Dateien an den Client. *download-file* schickt eine angeforderte Datei zurück an das Frontend. *multi-client-test* schickt ebenfalls eine angeforderte Datei zurück an das Frontend, achtet aber darauf, dass nur der fordernde Client die Datei zugeschickt bekommt. Es wird auf Grund von verschiedenen Testarten im Frontend zwischen *download-file* und *multi-client-test* unterschieden. Sind diese Endpunkte definiert ist die Implementierung des WebSocket-Servers für diesen Anwendungsfall bereits abgeschlossen.

```python
@sio.event
def connect(sid, environ, auth):
    print('connect ', sid)
@sio.event
def disconnect(sid):
    print('disconnect ', sid)
@sio.on('ping')
async def ping_event(sid, data):
    print('custom event triggered with data: ' + str(data))
    await sio.emit('ping', "Danke für die Nachricht")
@sio.on('download-files-list')
async def download_files_event(sid):
    await sio.emit('download-files-list', Data.get_file_names())
@sio.on('download-file')
async def download_file_event(sid, filename):
    await sio.emit('download-file', (filename, Data.get_file(filename)))
@sio.on('multi-client-test')
async def download_file_event(sid, filename):
    await sio.emit('multi-client-test', (filename, Data.get_file(filename)), room=sid)
```

## Messungen

### Messung der Geschwindigkeit in Abhängigkeit verbundener Clients

Für diesen Test verbinden sich mehrere virtuelle Clients mit dem Server. Dabei wird von jedem Client eine 1MB große Datei angefordert. Dieser Test soll die Geschwindigkeit der beiden Protokolle in Abhängigkeit der verbundenen Clients untersuchen. Die erste Spalte gibt an, wie viele Clients sich für den Testdurchlauf mit dem Server verbunden haben. Die zweite Spalte stellt in Millisekunden dar, wie lange es gedauert hat, um über WebTransport die angeforderte Datei an jeden Client zu senden. Die dritte Spalte zeigt die Werte für WebSockets an. Wie bei allen durchgeführten Tests, wurden die Durchläufe für jede Zeile mehrmals wiederholt, um verlässlichere Werte zu erhalten.

|      | WebTransport | WebSocket |
| ---- | ------------ | --------- |
| 1    | 514          | 449       |
| 10   | 4733         | 1314      |
| 64   | 29636        | 6842      |
| 100  | -            | 10562     |
| 250  | -            | 25551     |
| 500  | -            | -         |



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

### Austausch großer Datenmengen

Für diesen Test wurde bei jedem Testdurchlauf immer nur **ein** Client mit dem Server verbunden, um die Zeit für den Download zu messen. Für jede Datengröße und jedes Protokoll wurde die Datei 101 mal heruntergeladen und die Durchschnittszeit in Millisekunden berechnet.

|        | WebTransport | WebSocket |
| ------ | ------------ | --------- |
| 1 KB   | 12           | 12        |
| 1 MB   | 104          | 124       |
| 10 MB  | 905          | 1115      |
| 100 MB | 9420         | 1537      |
| 1 GB   | 95299        | 10264     |

Dateien, die größer sind als 1GB können nicht mehr Standardmäßig über WebSocket transportiert werden. Hier ist die Zunahme eines Streams erforderlich, sodass die Datei aufgeteilt werden kann und nicht komplett im Arbeitsspeicher liegen muss. Eine komplette Übertragung führt meist auf Client-Seite zu Fehlern *(Out-Of-Memory)*.

<img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/websocketOutOfMemory.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />

## Auswertung





## Fazit



## Referenzen

<span id="ref1">[1]: *["The WebSocket API (WebSockets)"](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (Mozilla Dev Artikel). Zugriff: 2.6.2022.*</span>

<span id="ref2">[2]: *["The WebSocket Protocol"](https://datatracker.ietf.org/doc/html/rfc6455) (Internet Engineering Task Force Artikel). Zugriff: 21.5.2022.*</span>

<span id="ref3">[3]: *["File:Websocket connection.png"](https://en.wikipedia.org/wiki/File:Websocket_connection.png) (Wikimedia Common File). Zugriff: 21.5.2022.*</span>

<span id="ref4">[4]: *["Socket.IO"](https://socket.io/) (Library Documentation). Zugriff: 21.5.2022.*</span>

<span id="ref5">[5]: *["python-socketio"](https://python-socketio.readthedocs.io/en/latest/) (Library Documentation). Zugriff: 21.5.2022.*</span>

<span id="ref6">[6]: *["Using WebTransport"](https://web.dev/webtransport/#:~:text=WebTransport%20is%20a%20web%20API,reliably%20via%20its%20streams%20APIs.) (WebDev Artikel). Zugriff: 21.5.2022.*</span>

<span id="ref7">[7]: *["WebTransport"](https://www.w3.org/TR/webtransport/#introduction) (W3C Working Draft). Zugriff: 21.5.2022.*</span>

<span id="ref8">[8]: *["HTTP/3: From root to tip"](https://blog.cloudflare.com/http-3-from-root-to-tip/) (Blogeintrag). Zugriff: 21.5.2022.*</span>

<span id="ref9">[9]: *["W3C WebTransport Working Group Updates - October 2021"](https://www.youtube.com/watch?v=2yQIBZbKhdU) (Bildauszug aus W3C WebTransport Vortrag). Zugriff: 21.5.2022.*</span>

<span id="ref10">[10]: *["An example WebTransport over HTTP/3 server based on the aioquic library"](https://github.com/GoogleChrome/samples/blob/gh-pages/webtransport/webtransport_server.py) (GitHub File). Zugriff: 21.5.2022.*</span>