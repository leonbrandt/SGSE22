# Moritz Withöft

## Titel der Arbeit

**Implementierung und Vergleich von WebSockets und WebTransport im Hinblick auf Geschwindigkeit, Stabilität und Performanz unter Last**



- Hat WebTransport das Potential WebSockets abzulösen oder haben die Protokolle unterschiedliche Anwendungsbereiche (wie z.B. WASM, JS)?

- Wie unterscheiden sich WebTransport und WebSockets von einander?



- Auf das Backend soll dann per WebTransport oder WebSocket zugegriffen werden und Belastungstests ausgeführt und gemessen werden
  - Dafür: Live Update API darstellen. Dafür Daten von Börse, Wetter APIs verwenden, die dann vom Backend zur Verfügung gestellt werden. 
- Frontend: Angular, Backend: NodeJS
- Implementierung von Tests, die die Verbindungsgeschwindigkeiten von WebTransport und WebSocket messen:
  - Messung von Geschwindigkeit, in Abhängigkeit von verbundenen Clients
  - Messung des maximalen Austauschs von Nachrichten pro Sekunde



## Hintergrund 

WebSockets sind ein beliebtes Protokoll, wenn es darum geht eine persistente Client-Server-Kommunikation zu ermöglichen. Dabei wird die Verbindung offengehalten und auf diesem Stream können Daten ausgetauscht werden.

Seit kurzer Zeit gibt es nun auch WebTransport, das HTTP/3 für den bidirektionalen Transport von Daten zwischen Client und Server verwendet. Dabei wird von den Entwicklern angegeben, dass WebTransport eine äußerst geringe Latenz aufweist und mehrere Streams gleichzeitig zur Verfügung stellen kann.

Die genauen Unterschiede, aber auch die Gemeinsamkeiten sollen untersucht werden.

