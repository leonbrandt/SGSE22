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

Anhand der oben gemessenen Faktoren soll ein Entscheidungsdiagramm aufgestellt werden, anhand dessen potentielle Anwender sich nach ihren Bedürfnissen für die passenden Technologie entscheiden können.

## Weiteres

- Überlegung die Schnittstelle für WebTransport so offen zu gestalten, dass hinterher eine Bibliothek daraus geformt werden kann
- Bericht über Implementierung mit einschließen
  - Was war einfach umzusetzen, was war schwierig
  - Implementierung über Entwurfsmuster darstellen

## Titel der Arbeit

Die bereits genannten Fragen sollen unter folgendem Arbeitstitel untersucht werden:

**Implementierung und Vergleich von WebSockets und WebTransport im Hinblick auf Geschwindigkeit, Stabilität und Performanz unter Last**

Der aktuelle Implementierungsfortschritt kann [HIER](https://github.com/mwithoeft/Spezielle-Gebiete-zum-Softwareengineering) eingesehen werden.

Die ausformulierte Ausarbeitung zum Thema kann [HIER](praktikum/withöft/ausarbeitung) gelesen werden.

## Zeitplan

| Termin                                                   | Fortschritt                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| 28.04.2022                                               | Fertigstellung der Ausarbeitung                              |
| 05.05.2022                                               | Implementierung von Websockets und WebTransport im Backend, Arbeit an Präsentation |
| 12.05.2022                                               | Funktionierende Kommunikation mit dem Frontend, Arbeit an Präsentation |
| 19.05.2022                                               | Anfordern von Livedaten im Backend, Lieferung dieser Daten vom Backend zum Frontend |
| 26.05.2022                                               | Darstellung erhaltener Daten im Frontend, inklusive Metadaten (wie Transferzeit) |
| 02.06.2022                                               | Messung von Geschwindigkeit, in Abhängigkeit von verbundenen Clients, Dokumentation der Ergebnisse |
| 09.06.2022                                               | Messung des maximalen Austauschs von Nachrichten pro Sekunde, Dokumentation der Ergebnisse |
| 16.06.2022                                               | Messung der Performanz beim Austausch großer Datenmengen, Dokumentation der Ergebnisse |
| 23.06.2022                                               | Dokumentation der Ergebnisse, Gegenlesen, Ausarbeitung optimieren |
| 30.07.2022 (letzter Termin vor Beginn der Prüfungsphase) | Dokumentation der Ergebnisse, Gegenlesen, Ausarbeitung optimieren |

## Aufgetretene Probleme

- Bei der versuchten Implementierung eines WebTransport-Servers in NodeJS wurde festgestellt, das sich solcher nicht dort umsetzen lässt. Die begründete Wahl und die Dokumentation der Programmiersprache für das Backend lässt sich [HIER](praktikum/withöft/backendProgrammiersprache) finden.

## Weitere Stichpunkte 

- UseCases der Protokolle
  - Größe der Daten, Rate der Daten, Videos Texte etc.
  - Literatur (nur Client-Server oder auch Client-Client)
- Gemeinsame API Spezifizierung für den Client
  - Eventuelle Auslagerung in eine Bibliothek
