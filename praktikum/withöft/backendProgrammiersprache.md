# Programmiersprache im Backend

Wie in der Sektion Implementierung zu lesen, sollte für im Backend ein NodeJS-Server verwendet werden. Nach erweiterter Recherche, stellte sich allerdings heraus, dass weder Quic noch HTTP/3 in NodeJS nicht unterstützt wird [[1]](#ref1).

Eine Alternative bestand hierbei nun in der Verwendung einer älteren Node-Version, in der Quic bereits zuvor unterstützt wurde. Weil von WebTransport allerdings der zweite Entwurf mit einem abgeänderten Standard veröffentlicht wurde, dem nun HTTP/3 zu Grunde liegt und nicht mehr direkt Quic, ließ sich diese Alternative ebenfalls nicht umsetzen.

> Many of the concepts in this proposal were previously experimented with as part of the earlier QuicTransport origin trial, which did not end up being released as part of Chrome. WebTransport helps with similar use cases as QuicTransport, with the primary difference being that HTTP/3 instead of Quic is the underlying transport protocol [[2]](#ref2).

Recherchiert man an dieser Stelle weiter, findet man eine Implementierung eines WebTransport-Servers in der Programmiersprache Go. Weil es zu dieser Implementierung eine Fülle an Informationen gibt, wurde eine Umsetzung mit Hilfe der Bibliothek *webtransport-go* versucht [[3]](#ref3). Der entsprechende Code Ausschnitt sieht dabei wie folgt aus:

```go
package main
import (
	"log"
	"net/http"
	"github.com/lucas-clemente/quic-go/http3"
	"github.com/marten-seemann/webtransport-go"
)
func main() {
	s := webtransport.Server{
		H3: http3.Server{
			Server: &http.Server{Addr: ":4433"},
		},
	}
	http.HandleFunc("/webtransport", func(w http.ResponseWriter, r *http.Request) {
		conn, err := s.Upgrade(w, r)
		if err != nil {
			log.Printf("upgrading failed: %s", err)
			w.WriteHeader(500)
			return
		}
	})
	s.ListenAndServeTLS("cert.pem", "privkey.pem")
}
```

An dieser Stelle fällt auf, dass der Server Zertifikate für die sichere Verbindung über HTTPS verlangt. Eine Verbindung ohne TLS wird wird in HTTP/3 nicht unterstützt [[4]](#ref4). Für eine sichere Verbindung müssen also Zertifikate ausgestellt werden, damit eine Verbindung mit dem WebTransport-Server möglich ist. Zuerst wurde versucht mit OpenSSL selbst signierte Zertifikate zu verwenden. Dafür muss Chrome (aktuell der einzige WebTransport unterstützende Browser) mit zusätzlichen Chromium-Flags gestartet werden.

```bash
chrome.exe --user-data-dir=G:\tmp --ignore-certificate-errors --allow-insecure-localhost --ignore-certificate-errors-spki-list=XeMRFXvHKN9KjA5LFlg4HD3EA8Bq1YZI0psRTxKhmSg=
```

Doch weil diese Art Chrome zu starten trotzdem nicht funktionierte ``Certificate Unknown (46)``, habe ich mir für das weitere Vorgehen für die Verwendung meines eigenen, extern betriebenem RootServer (Ubuntu) entschieden. Dieser ist mit meiner Domain ``withoeft.nz`` verknüpft ist, sodass sich nach dem Anlegen eines A-Records für die Subdomain ``webtransport.withoeft.nz`` gültige Zertifikate über *Let's Encrypt* beziehen lassen. Der Code wurde dementsprechend angepasst:

```go
Server: &http.Server{Addr: "webtransport.withoeft.nz:4433"},
	...
s.ListenAndServeTLS("/etc/letsencrypt/live/webtransport.withoeft.nz/cert.pem", "/etc/letsencrypt/live/webtransport.withoeft.nz/privkey.pem")
```

Der Server wurde nun erfolgreich gestartet und auch Probleme mit den Zertifikaten gab es an dieser Stelle nicht mehr. Doch nun gab es das Problem, dass die *Methode* nicht unterstützt wurde. Auch nach zahlreichen Recherchen und ausprobierten Konfigurationen, konnte hierfür keine Lösung gefunden werden.

<img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/methodNotSupported.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />

<img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/connectionFailed.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />

Eine weitere Implementierung eines WebTransport-Servers wurde bereits mit Python durchgeführt, sodass diese Implementierung im weiteren am vielversprechendsten war. Zum Testen wurde an dieser Stelle die Beispielsimplementierung die Beispielimplementierung verwendet, um das Herstellen einer Verbindung ausprobieren zu können [[5]](#ref5). Dabei wird über WebTransport eine Verbindung hergestellt, bei der die vom Server empfangenen Daten einfach zurückgeschickt werden. Dieser Versuch verlief erfolgreich, sodass für die weitere Implementierung an die aktuelle Version in Python angeknüpft wird.

<img src="https://github.com/mwithoeft/SGSE22/blob/main/praktikum/with%C3%B6ft/assets/connectionSuccessful.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />

Bei der Implementierung von Websockets ist nicht von einer solchen Problematik auszugehen. Dieser Mechanismus existiert bereits eine ganze Zeit und ließ sich unproblematisch bereits in NodeJS umsetzen. Um beide Protokolle miteinander vergleichen zu können, muss die Implementierung des Websockets-Servers nun auch in Python erneut durchgeführt werden, damit eventuelle Unterschiede bei den Messungen nicht auf die verwendete Programmiersprache zurückzuführen sind.

## Referenzen

<span id="ref1">[1]: *["HTTP/3 support"](https://github.com/nodejs/node/issues/38478) (GitHub Issue). Zugriff: 30.4.2021.*</span>

<span id="ref2">[2]: *["Using WebTransport"](https://web.dev/webtransport/) (Developer Page). Zugriff: 30.4.2021.*</span>

<span id="ref3">[3]: *["webtransport-go"](https://github.com/marten-seemann/webtransport-go) (GitHub Page). Zugriff: 30.4.2021.*</span>

<span id="ref4">[4]: *["HTTP/3: the next Hypertext Transfer Protocol explained simply"](https://www.ionos.com/digitalguide/hosting/technical-matters/http3-explained/) (Ionos Artikel). Zugriff: 30.4.2021.*</span>

<span id="ref5">[5]: *["HTTP3 WebTransport Python"](https://github.com/GoogleChrome/samples/blob/gh-pages/webtransport/webtransport_server.py) (GitHub File). Zugriff: 30.4.2021.*</span>