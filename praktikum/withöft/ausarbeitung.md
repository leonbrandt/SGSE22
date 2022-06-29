<style>
    table {
        display:table !important;
        width: 100%;
    }
</style>

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

Für die Implementierung von WebTransport im Frontend wird auf Grund der Neuheit der Technologie keine Library verwendet. Für die Implementierung im Backend wird auf einer vorhandenen Beispielimplementierung für WebTransport von Google in Python aufgebaut [[10]](#ref10). Auf die genaue Einbindung, Verwendung und Implementierung wird in der Sektion [Implementierung](#implementierung) eingegangen.

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

Das Frontend wurde mit dem Framework Angular und der Sprache Typescript geschrieben. Um nicht zwei Anwendungen schreiben zu müssen, wurden in der `package.json` des Projekts zwei Build-Skripte definiert. Einen zum Starten des Projekts mit dem WebSocket-Protokoll und eines zum Starten des Projekts mit WebTransport. Weil noch keine Vorerfahrung mit Angular vorhanden war, musste sich zuerst angeschaut werden, wie sich die in der package.json festgelegten Optionen im Code anwenden lassen. Dafür mussten in der `angular.json` zwei neue Konfigurationen erstellt werden. Im Folgenden ist ein Auszug einer solchen Konfiguration dargestellt. Wenn das Projekt nun mit dem Skript `ng serve --configuration=websocket --port=4201` gestartet wird, wird die `environment.ts` mit der `environment.websocket.ts` ersetzt. In den environment-Dateien befindet sich eine Flag, durch die unterschieden werden kann, ob WebTransport oder WebSockets genutzt werden sollen.

```json
"websocket": {
    [...]
    "fileReplacements": [{
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.websocket.ts"
	}]
}
```

#### CommunicationService

Von den im Projekt bestehenden Komponenten wird stets nur der `CommunicationService` genutzt und nicht die Services, der einzelnen Protokolle. Durch diese Schnittstelle nach außen, muss lediglich an einer Stelle unterschieden werden, welches Protokoll nun verwendet wird. Wie im unteren Beispiel dargestellt, wird hierfür die zuvor erläuterte Flag, in den Umgebungsvariablen genutzt. Der `protocolService` dient als generalisiertes Objekt und stellt den gerade verwendeten Service dar. Der `WebsocketService` und der `WebtransportService` müssen für diesen Zugriff also die gleichen Methoden implementieren, da nur nur bei Initialisierung das Protokoll festgelegt wird und anschließend das `protocolService`-Objekt genutzt wird.

```typescript
export class CommunicationService {
	private protocolService! : WebsocketService | WebtransportService;
	constructor(private injector: Injector) {
    	if (environment.websocket) {
			this.protocolService = <WebsocketService>this.injector.get(WebsocketService);
        } else {
			this.protocolService = <WebtransportService>this.injector.get(WebtransportService);
        }
    }
}
```

#### Komponenten

Die Komponente, mit der der Austausch großer Datenmengen gemessen wird, ist die `LargeFilesComponent`. Diese zeigt eine Liste, der im Backend verfügbaren Dateien zum Download an (siehe Abbildung 3). Durch das Doppelklicken auf eine Datei wird ein Messversuch für diese Datei gestartet, indem eine Aufforderung der Komponente an den `protocolService` erfolgt.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/largeFilesComponentVisual.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 3: Visuelle Darstellung der Dateien zum Herunterladen im Browser.</figcaption>
</figure>

Die andere Komponente ist die `TestComponent` mit der über das Klicken der jeweiligen Buttons (siehe Abbildung 4) der Ping Test oder der Multi-Client Test gestartet werden kann. Analog zur Komponente für den Download großer Dateien, erfolgt auch hier für die jeweilige Testart eine Anfrage an den `protocolService`, durch die der Test anschließend gestartet wird.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/pingTestMultiClientTestVisual.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 4: Buttons zum Starten von Ping und Multi-Client Test im Browser.</figcaption>
</figure>

Die Ergebnisse der Tests wurde auf Grund der häufigen Anpassung in der Konsole ausgegeben. Abbildung 5 zeigt, wie alle drei Versuchsarten nacheinander einmal ausgeführt wurden. Während für WebSocket externe Tools zur Messung in Erwägung gezogen wurden, wurde dieser Gedanke auf Grund der Vergleichbarkeit mit WebTransport - hier stehen noch keine Messtools zur Verfügung - verworfen.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/resultsBrowser.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 5: Buttons zum Starten von Ping und Multi-Client Test im Browser.</figcaption>
</figure>
#### WebTransport

Für WebTransport sollen Messungen durchgeführt werden, die ebenfalls für WebSocket implementiert werden. Die Messergebnisse können im Abschnitt [Messungen](#messungen) gefunden werden.

Um eine Verbindung zum Server mit WebTransport aufzubauen, muss eine Instanz der WebTransport-Klasse erzeugt werden. Die besondere Herausforderung bei dem Nutzen des Standards war, dass Typescript noch keine Typen-Unterstützung für WebTransport bietet. Der Standard ist allerdings in JavaScript verfügbar und nutzbar. Durch den Fakt, dass es keine Typen-Unterstützung gibt und Typescript bei unbekannten Typen einen Fehler ausgibt, muss die Variable bekannt gemacht werden `declare var WebTransport: any;`. Der Nachteil besteht darin, dass es nicht möglich ist, sich in der Entwicklungsumgebung zur Verfügung stehende Funktionen anzeigen zu lassen, sowie eventuelle Fehler in der Nutzung nicht angestrichen werden, weil die Variable als *any* gekennzeichnet werden musste.

Für die Nutzung von WebTransport wurden drei Methoden geschrieben, die allesamt von den drei verschiedenen Tests genutzt werden konnten. In der ersten Methode des Services wird eine Verbindung hergestellt. Der Aufbau einer Verbindung wird im folgenden Auszug dargestellt.

```typescript
async connect() {
    try {
      this.transport = new WebTransport(this.url);
      console.log('Initiating connection...');
    } catch (e) {[...]}
    try {
      await this.transport.ready;
      console.log('Connection ready.');
    } catch (e) {[...]}
    this.transport.closed
      .then(() => {console.log('Connection closed normally.');})
      .catch(() => {[...]});
  }
```

Die zweite Methode übernimmt das Senden einer Nachricht über die nun aufgebaute Verbindung, während die dritte Methode sich um das Empfangen von Nachrichten kümmert. Wie hier zu sehen, wird ein bidirektionaler Stream erzeugt, auf dem Nachrichten ausgetauscht werden können. Weil die Antworten vom Server sowohl als Text als auch als binäre Nachrichten versendet werden können, wird das Empfangen auf zwei Streams - je nach erwarteter Antwort - aufgeteilt. Diese beiden unterscheiden sich jedoch lediglich in der Verarbeitung der Antwort.

```typescript
async send(message: string, type: "string" | "binary") {
    let encoder = new TextEncoder();
    let data = encoder.encode(message);
    let stream = await this.transport.createBidirectionalStream(); 
    switch (type) {
      case "string":
        this.readFromIncomingStream(stream);
        break;
      case ("binary"):
        this.readFromIncomingBinaryStream(stream);
        break;
    } 
    let writer = stream.writable.getWriter();
    await writer.write(data);
    await writer.close();
  }
```

Das Empfangen wird hier exemplarisch an der Verarbeitung einer Antwort als Text dargestellt (siehe folgender Auszug). Noch bevor eine Nachricht versendet wird, wird auf der bidirektionalen Verbindung der Read-Stream solange durchlaufen, bis dieser vom Server geschlossen wird. Dabei wird die Antwort dekodiert und kann im Anschluss verarbeitet werden.

```typescript
async readFromIncomingStream(stream: any) {
    let decoder = new TextDecoder();
    let reader = stream.readable.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log('Stream #' + ' closed');
          return;
        }
        let data = decoder.decode(value);
        [...]
        console.log('Received data on stream #' + ': ' + data);
      }
    } catch (e) {[...]}
}
```

Das Nutzen der Methoden `send` und `readFromIncomingStream` wird von den Tests verwendet. Für den *Multi-Client-Test*, werden mit der Eröffnung mehrerer Verbindungen, eine verschiedene Anzahl an Client (sog. virtuelle Clients) simuliert. Der folgende Auszug stellt die elementaren Schritt zur Durchführung dieses Tests dar. Die Methode `multiClientTestAsync()` wird dabei so häufig aufgerufen, wie virtuelle Clients erzeugt werden sollen. Wenn alle Nachrichten ausgetauscht wurden, wird die Zeit gestoppt.

```typescript
public async startMultiClientTest(connections: number) {      
    console.time("downloadFile");
    this.max = connections;
    for (let i = 0; i < connections; i++) {
        this.multiClientTestAsync();
    }
}
async multiClientTestAsync() {
	let connection: any;
try { connection = new WebTransport(this.url); [...] console.timeEnd("downloadFile");}
```

Der nächste Auszug zeigt die wichtigsten Schritte, die durchgeführt werden müssen, um die RoundTripTime messen zu können. Analog zur Implementierung bei dem gleichnamigen WebSocket-Test, kann hier die Anzahl der zu übermittelnden Datenpakete (Nachrichten) angegeben werden. Wird nur ein Datenpaket übermittelt, kann man von dem tatsächlichen Ping sprechen. Bei mehreren Datenpaketen ist nicht mehr vom Ping die Rede, weil es sich dabei um die Zeit zwischen dem Versenden einer Nachricht und dem Erhalt einer Antwort landet. Dennoch soll auch die verstrichene Zeit bei mehrere gleich großen Paketen über einen Stream gemessen werden. Innerhalb der Klasse besteht ein Zähler, der die Anzahl der Pakete mitzählt. In der Methode `readFromIncomingStream` wird die Zeit gestoppt, sobald alle Pakete beim Client angelangt sind.

```typescript
public async startPingTest(i:number, max=this.max) {
    await this.transport.ready;
    console.time("pingTest")
    this.counterActive = true;
    for (let i = 0; i < max; i++) {
        this.send('message', 'string');
        this.counter = i;
    }
}
```

Für den letzten Test, der die Zeit beim Austausch von großen Datenmengen messen soll, wurde die Methode `downloadFile` implementiert. Diese erhält den Namen der Datei, die heruntergeladen werden soll und startet die Zeitmessung. In der Methode `readFromIncomingStream` wird die Zeit gestoppt, sobald die angefragte Datei heruntergeladen wurde.

```typescript
public async downloadFile(filename: string) {
    await this.transport.ready;
    console.time("downloadFile");    
    this.fileName = filename;
    this.send('download-file'+'$'+filename, 'binary');
}
```

#### WebSocket

Für WebSocket sollen die gleichen Tests durchgeführt werden, wie für WebTransport. Auch hierfür sind die Messergebnisse im Abschnitt [Messungen](#messungen) zu finden. Für die Verwendung von WebSockets wurde ein eigener Service `WebSocketService` implementiert, der das *socket-io*-Socket per *Dependency Injection* nutzt.

Beim ersten Test handelt es sich um den *Multi-Client-Test*. Hier soll die Geschwindigkeit, in Abhängigkeit von den verbundenen Clients getestet werden. Mit *socket-io* lassen sich mehrere virtuelle Clients simulieren, indem mehrere Sockets geöffnet werden. Der folgende Code-Auszug zeigt die dafür implementierte Methode. Je nach Test werden unterschiedlich viele Verbindungen aufgebaut und die der Startzeitpunkt wird erfasst. Wenn alle Verbindungen ihre Antwort, in Form einer 1MB großen Datei, erhalten haben, wird die Zeit gestoppt.

```typescript
public startMultiClientTest(connections: number) {
    const config: SocketIoConfig = { url: 'http://websocket.withoeft.nz:4444', options: {} };
    console.time("multiClientTest");
    let counter = 0;
    for (let i = 0; i < connections; i++) {
      let socket = new Socket(config);
      socket.emit('multi-client-test', "2_1MB.bin");
      socket.on('multi-client-test', (filename: string, file: Uint8Array) => {
        let blob = new Blob([file], { type: 'application/octet-stream' });
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url; a.download = filename; a.click();
        counter++;
        if (counter >= connections) console.timeEnd("multiClientTest");
      });
    }
  }
```

Beim zweiten Test soll der Ping (Round Trip Time) gemessen werden. Weil es beim Ping um die Zeit vom Versenden bis zum Erhalt einer Nachricht geht, wird hierbei keine Datei angefordert, sondern lediglich eine kleine Antwort als Text. Es soll jedoch zusätzlich zum Ping (Anfrage von nur einem Datenpaket) auch gemessen werden, wie lange mehrere kleine Datenpakete auf einer Verbindung für die Übertragung benötigen. Der folgende Code-Auszug zeigt die implementierte Methode für diesen Test. Dabei kann vorgegeben werden, wie viele Pakete (Nachrichten) für diesen Test übertragen werden sollen. Sind alle Pakete übertragen, wird die Zeit gestoppt.

```typescript
public startPingTest(i:number, max=1) {
    console.time("pingTest");
    let that = this;
    this.socket.on('ping', function(data: string){
      if (i >= max) {
        console.timeEnd("pingTest");
        that.socket.removeListener('ping')
        return;
      }
      that.socket.emit('ping', i+=1);
    })
    this.socket.emit('ping', i)
  }
```

Der letzte Test besteht in der Messung der Downloadzeit von Dateien verschiedener Größe (siehe folgenden Code-Auszug). Wie bereits beschrieben, werden im Browser die für den Download zur Verfügung stehenden Dateien angezeigt. Durch einen Doppelklick auf diese wird ein Testdurchlauf gestartet. Für den Start des Tests wird ein `downloadCounter` gesetzt, der festlegt, wie oft die Datei heruntergeladen werden soll (100 + 1 Mal). Für jede Datei wird die Zeit gemessen, sodass hinterher ein Durchschnitt gebildet werden kann. Ist eine Datei heruntergeladen worden, wird automatisch der Download der nächsten Datei gestartet, bis die maximale Anzahl an festgelegten Downloads erreicht worden ist.

```typescript
this.socket.on('download-file', (filename: string, file: Uint8Array) => {
    let blob = new Blob([file], { type: 'application/octet-stream' });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    console.timeEnd("downloadFile"); 
    if (this.testDownloadSpeed && this.downloadCounter < 100) {
        this.downloadCounter++;
        this.downloadFile(filename);
    }
});
```

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

Für die Implementierung von WebTransport wurde die aktuellste Definition des Protokolls *Draft 02* verwendet. Der Server wurde hierbei nach einer Beispielimplementierung von Google [[10]](#ref10) für den Anwendungszweck angepasst. Die Implementierung für WebTransport stellte auf Grund der geringen Verfügbarkeit von Dokumentationen eine deutlich größere Herausforderung, als die WebSocket Implementierung dar. Weil WebTransport nur über HTTPS funktioniert, wurden bereits im Vorfeld Zertifikate generiert, die von dem Server genutzt werden. Weitere Informationen hierzu lassen sich in der [Begründung für die Wahl der Programmiersprache im Backend](praktikum/withöft/backendProgrammiersprache) finden.

Der unten aufgeführte Quellcodeauszug zeigt die wesentlichen Aspekte der `run_webtransport_server`-Funktion. Zuerst wird die Konfiguration für das unter HTTP/3 liegende QUIC-Protokoll vorgenommen und im Anschluss die generierten Zertifikate der Konfiguration hinzugefügt. Abschließend wird der Event-Loop erzeugt. Für das Ausführen des Servers wird weiterhin die Bibliothek *asyncio* verwendet. Nach der Festlegung der Adresse und des Ports wird der Server in einer Endlosschleife gestartet.

```python
configuration = QuicConfiguration(
        alpn_protocols=H3_ALPN,
        is_client=False,
        max_datagram_frame_size=6553600,
        max_stream_data=104857600,
        max_data=104857600
    )
    configuration.load_cert_chain("/etc/letsencrypt/live/webtransport.withoeft.nz/cert.pem",
                                  "/etc/letsencrypt/live/webtransport.withoeft.nz/privkey.pem")
    loop = asyncio.get_event_loop()
    loop.run_until_complete(
        serve(
            'webtransport.withoeft.nz',
            4433,
            configuration=configuration,
            create_protocol=WebTransportProtocol,
        ))
    loop.run_forever()
```

Die essentielle Klasse, die die Kommunikation über WebTransport ermöglicht ist die Klasse `WebTransportProtocol`, die von der *asyncio* `QuickCOnnectionProtocol`-Klasse erbt und diese wiederum für WebTransport anpasst. Bei der *H3Connection* handelt es sich um eine Verbindung über HTTP/3. Hier wird auch die noch zu implementierende Klasse `ConnectionHandler` bekannt gemacht, in der die ausgetauschten Daten verarbeitet werden. Kommt eine Verbindung über HTTP/3 an den Server, wird ausgewertet, ob es sich um eine WebTransport-Verbindung handelt und ein Handshake durchgeführt. Dabei wird in den Header von der Antwort des Servers geschrieben, dass es sich nun um eine Kommunikation mit dem WebTransport-Protokoll handelt und dabei die aktuelle Version *Draft 02* verwendet wird.

```python
class WebTransportProtocol(QuicConnectionProtocol):
    def __init__(self, *args, **kwargs) -> None:
        self._http: Optional[H3Connection] = None
        self._handler: Optional[ConnectionHandler] = None
    def _h3_event_received(self, event: H3Event) -> None:
        [...]
        if (headers.get(b":method") == b"CONNECT" and
            headers.get(b":protocol") == b"webtransport"):
            self._handshake_webtransport(event.stream_id, headers)
     def _handshake_webtransport(self, stream_id: int, request_headers: Dict[bytes, bytes]) -> None:
        [...]
        authority = request_headers.get(b":authority")
        path = request_headers.get(b":path")
            self._send_response(stream_id, 200)
            return
	def _send_response(self, stream_id: int, status_code: int, end_stream=False) -> None:
		headers = [(b":status", str(status_code).encode())]
		if status_code == 200:
            headers.append((b"sec-webtransport-http3-draft", b"draft02"))
            self._http.send_headers(stream_id=stream_id, headers=headers, end_stream=end_stream)
```

Die Klasse `ConnectionHandler` wie sie in dieser Form existiert, musste komplett selbst geschrieben werden, sodass sie mit dem Frontend zusammenarbeiten kann und den Anwendungszweck erfüllt. Bekommt der Server einen Request vom Client, so wird dieser in der Methode `h3_event_received` bearbeitet. Dieser Request kann entweder die Kommunikation beenden, worauf der Stream geschlossen wird. Oder aber es handelt sich um eine Nachricht auf dem Stream, dann wird dieser Request in der Methode `handleRequest` bearbeitet und die Antwort hinterher in Chunks zurück gesendet. Weil es bei WebTransport bei unidirektionalen und bidirektionale Streams eine maximale Datengröße gibt, wird die Übertragung größerer Daten in Chunks (also in Teilen) vorgenommen und im Frontend wieder "zusammengebaut". Wie bereits in den Grundlagen erläutert, müssen auf Grund der Protokolldefinition bei der Verwendung unidirektionaler und bidirektionaler Streams keine Verluste befürchtet werden.

In der Methode `handleRequest` werden entweder die verfügbaren Dateinamen zurückgeschickt, eine angeforderte Datei übertragen oder eine einfache Nachricht *(Empty response)* übermittelt. Dadurch stellt diese Methode die Anlegung von Endpunkten, analog zur der Implementierung solcher für WebSocket, dar. Nach der Implementierung dieser Methode kann der WebTransport-Server die  Aufgaben für die benötigten Messungen bewältigen.

```python
class ConnectionHandler:
    def h3_event_received(self, event: H3Event) -> None:
        [...]
        if event.stream_ended:
            payload = str(self._counters[event.stream_id]).encode('ascii')
            self._http._quic.send_stream_data(response_id, payload, end_stream=True)
            self.stream_closed(event.stream_id)
        else:
            for chunk in self.handleRequest(event.data):
                self._http._quic.send_stream_data(
                    event.stream_id, chunk, end_stream=False)
    def handleRequest(self, data):
        if (data == b'download-files-list'):
            jsonString = str(data.decode("UTF-8")) + "$" + json.dumps(Data.get_file_names())
            yield bytearray(jsonString, 'utf-8')
        elif (data.decode("UTF-8").split("$")[0] == "download-file"):
            filename = data.decode("UTF-8").split("$")[1]
            for chunk in Data.read_file_chunks(filename):
                yield chunk
        else:
            yield b'Empty response'
```

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

### Zwischenfazit

An dieser Stelle kann ein kleines Zwischenfazit zur Implementierung gezogen werden. Dieses soll Bezug auf die zu Beginn gestellte Forschungsfrage **Unterschiede in der Implementierung** nehmen. Während sich die Implementierung der Verbindungen mit WebSocket als keine große Herausforderung herausstellte, war die Nutzung der WebTransport-Protokolls deutlich aufwändiger. Dies gilt sowohl für die Verwendung im Frontend als auch für die Nutzung im Backend.

Dies lag zum Einen daran, dass für die Nutzung von WebSockets, die seit langem bestehende Bibliothek *socket-io* verwendet werden konnte. Hier musste lediglich das npm-Paket bzw. die Python-Library installiert werden und zusätzlich das `@types/socket.io` für die Nutzung mit Typescript nachgerüstet werden.

Für die Verwendung von WebTransport gibt es solche Bibliotheken aktuell noch nicht. Wie beschrieben, gibt es für Python eine bereits implementierte Nutzung des Protokolls. Diese musste aber stark auf den benötigten Anwendungszweck angepasst werden und stellt noch keine eigenständige Bibliothek dar. Auch die Initialisierung und der Aufbau einer Verbindung ist aktuell noch deutlich aufwändiger, wodurch deutlich mehr Schritte in der Implementierung berücksichtigt werden müssen. Hinzu kommt das aktuelle Fehlen der Typen in Typescript. So muss jede neue Variable selbst bekannt gemacht werden, da keine `@types/webtransport` zur Verfügung stehen. Der große Nachteil ist dabei auch das Fehlen von Fehlermeldungen in der Entwicklungsumgebung, durch die Bugs und Schwachstellen direkt vermieden werden können und normalerweise eine der großen Stärken von Typescript gegenüber Javascript ist.

Ohne hierbei bereits auf die Messergebnisse einzugehen zu wollen, kann festgehalten werden, dass es rein aus der Perspektive der Implementierung leichter ist und viel Zeit spart, WebSocket zu verwenden. Auf die Unterschiede in der Performanz wird im Folgenden noch eingegangen.

## Messungen

Die Messungen/Tests für beide Protokolle wurden jeweils für eine bessere Vergleichbarkeit selbst implementiert. Während es für WebSockets/Socket.IO schon diverse Testtools gibt, sind nach aktuellem Stand für WebTransport noch keine verfügbar. Aus diesem Grund hat man sich für eine Implementierung der Tests für beide Protokolle entschieden, auch unter dem Aspekt, dass die Tests jeweils nur für das jeweils andere Protokoll angepasst werden und nicht komplett neu implementiert werden mussten.

### Messung der Geschwindigkeit in Abhängigkeit verbundener Clients

Für diesen Test verbinden sich mehrere virtuelle Clients mit dem Server. Dabei wird von jedem Client eine 1MB große Datei angefordert. Dieser Test soll die Geschwindigkeit der beiden Protokolle in Abhängigkeit der verbundenen Clients untersuchen. Die erste Spalte gibt an, wie viele Clients sich für den Testdurchlauf mit dem Server verbunden haben. Die zweite Spalte stellt in Millisekunden dar, wie lange es gedauert hat, um über WebTransport die angeforderte Datei an jeden Client zu senden. Die dritte Spalte zeigt die Werte für WebSockets an. Wie bei allen durchgeführten Tests, wurden die Durchläufe für jede Zeile mehrmals wiederholt, um verlässlichere Werte zu erhalten.

|                  | WebTransport | WebSocket |
| ---------------- | ------------ | --------- |
| 1 Verbindung     | 514          | 449       |
| 10 Verbindungen  | 4733         | 1314      |
| 64 Verbindungen  | 29636        | 6842      |
| 100 Verbindungen | -            | 10562     |
| 250 Verbindungen | -            | 25551     |
| 500 Verbindungen | -            | -         |

Sowohl bei WebTransport als auch bei WebSocket kommt es ab einer bestimmten Anzahl gleichzeitiger virtueller Verbindungen auf Clientseite zu Fehlern. *Abbildung 6* zeigt die aufgetretene Fehlermeldung für WebTransport, die beschreibt, dass nicht mehr als 64 gleichzeitige Verbindungen möglich sind.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/webtransportMaxConnections.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 6: Fehler bei mehr als 64 gleichzeitiger Verbindungen mit WebTransport.</figcaption>
</figure>

*Abbildung 7* zeigt die aufgetretene Fehlermeldung für WebSocket. Diese trat auf, wenn mehr als 250 gleichzeitige Verbindungen aufgebaut werden sollten.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/websocketInsufficientRessources.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 7: Fehler bei mehr als 250 gleichzeitiger Verbindungen mit WebSocket.</figcaption>
</figure>


Für beide Protokolle muss an dieser Stelle erwähnt werden, dass diese Probleme lediglich auf Clientseite (auch beim Test mit verschiedenen Browsern) aufgetreten sind.

### Messung der Round Trip Time

Für diesen Test wurde bei jedem Testdurchlauf immer nur **ein** Client verbunden, um Übertragung von kleinen Nachrichten. Dabei wurde eine Nachricht an den Server geschickt und gewartet, bis der Client eine Antwort erhielt. Der ersten Zeile der Ergebnisse kann entnommen werden, dass hier ein Datenpaket an den Server geschickt wurde und auch nur für dieses Paket auf die Antwort gewartet wurde. Daher kann man für diese Zeile von der tatsächlichen Latenz (Round Trip Time) sprechen. Das Prinzip 100 mal wiederholt, um verlässliche Ergebnisse zu erhalten.

In den darauffolgenden Zeilen wurde gemessen, wie lange es dauert *X* Datenpakete zu versenden und für jedes eine Antwort zu erhalten. Auch hier wurde das Prinzip wurde jede Zeile 100 mal wiederholt. Die Ergebnisse sind in Millisekunden.

|                    | WebTransport | WebSocket |
| ------------------ | ------------ | --------- |
| 1 Datenpaket       | 11           | 12        |
| 10 Datenpakete     | 31           | 117       |
| 100 Datenpakete    | 115          | 1094      |
| 1.000 Datenpakete  | 487          | 11341     |
| 10.000 Datenpakete | 2280         | 114392    |

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

Dateien, die größer sind als 1GB können nicht mehr standardmäßig über WebSocket transportiert werden. Hier ist die Zunahme eines Streams erforderlich, sodass die Datei aufgeteilt werden kann und nicht komplett im Arbeitsspeicher liegen muss. Eine komplette Übertragung führt meist auf Client-Seite zu Fehlern *(Out-Of-Memory)*.

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