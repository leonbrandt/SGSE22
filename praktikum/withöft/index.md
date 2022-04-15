# Moritz Withöft

Als Bestandteil des Praktikums im Modul Spezielle Gebiete zum Software Engineering soll ein Praktikum mit wissenschaftlicher Arbeitsweise durchgeführt werden. Dafür werden im Folgenden sowohl Titel der Arbeit als auch Anforderungen und Forschungsfragen formuliert.

## Hintergrund 

WebSockets sind ein beliebtes Protokoll, wenn es darum geht eine persistente Client-Server-Kommunikation zu ermöglichen. Dabei wird die Verbindung offengehalten und auf diesem Stream können Daten ausgetauscht werden.

Seit kurzer Zeit gibt es nun auch WebTransport, das HTTP/3 für den bidirektionalen Transport von Daten zwischen Client und Server verwendet. Dabei wird von den Entwicklern angegeben, dass WebTransport eine äußerst geringe Latenz aufweist und mehrere Streams gleichzeitig zur Verfügung stellen kann.

Die genauen Unterschiede, aber auch die Gemeinsamkeiten sollen untersucht werden.

## Forschungsfragen

Zu Beginn der Einführung von WebAssembly stellte man sich die Frage, ob es in Zukunft JavaScript weitergehend ablösen könnte. Nach einiger Erfahrung mit WebAssembly stellte sich heraus, dass WebAssembly eher als eine Ergänzung im binären Format darstellt, mit dem gewisse Aufgaben effizienter gelöst werden können. WebTransport ist eine neue Technologie, bei der die zukünftigen Anwendungsgebiete noch nicht abschließend geklärt sind. Daher sollen folgende Frage nuntersucht werden:

- Hat WebTransport das Potential WebSockets abzulösen oder haben die Protokolle unterschiedliche Anwendungsbereiche (wie z.B. WASM, JS)?
- Wie unterscheiden sich WebTransport und WebSockets von einander?
- Welche Schnittstelle ist unter welchen Bedingungen performanter?

## Implementierung und Evaluation

Um die bestehenden Forschungsfragen zu untersuchen, soll eine kleinere Anwendung implementiert werden, die jedoch umfangreich genug ist, Tests auf Grundlage dieser Forschungsfragen durchzuführen. Dafür wird im Frontend eine Applikation mit Angular implementiert. Für das Backend soll ein NodeJS-Server verwendet werden. Um Live-Daten an das Frontend liefern zu können, soll sich das Backend öffentlicher APIs bedienen, wie denen die für Wetter oder Börse existieren. Das Frontend greift dann per WebTransport bzw. WebSocket auf das Backend zu, sodass ein regelmäßiger und schneller Austausch von Daten erfolgen kann.

Ist die Kommunikation implementiert, sollen gewisse Tests für die Evaluierung integriert werden. Diese Tests sollen gewisse Verbindungseigenschaften der beiden Technologien messen, anhand derer ein Vergleich stattfinden kann:

- Messung von Geschwindigkeit, in Abhängigkeit von verbundenen Clients
- Messung des maximalen Austauschs von Nachrichten pro Sekunde
- Messung der Performanz beim Austausch großer Datenmengen

## Titel der Arbeit

Die bereits genannten Fragen sollen unter folgendem Arbeitstitel untersucht werden:

**Implementierung und Vergleich von WebSockets und WebTransport im Hinblick auf Geschwindigkeit, Stabilität und Performanz unter Last**

Der aktuelle Implementierungsfortschritt kann [HIER](https://github.com/mwithoeft/Spezielle-Gebiete-zum-Softwareengineering) eingesehen werden.

