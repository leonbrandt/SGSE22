# REST

## Inhalt

- [Paradigma](#paradigma)
- [Datenformat](#datenformat)
- [Vorläufiges Fazit](#vorläufiges-fazit)

## Paradigma

![rest](./assets/rest/rest.png)

## Datenformat

### REpresentational State Transfer

![rest data](./assets/rest/rest_data.png)

- Datenformat wird im Content-Type festgelegt.
  - JSON, XML, IMAGE, PDF, CSV, ...
  - Keine Begrenzung auf ein Datenformat

### Besonderheiten

- REST unterstützt Hypermedia

  - Verweis auf Ressourcen

- REST zieht noch weite Vorteile aus der Verwendung des HTTP-Protokolls
  - Z.B. Caching oder Inhaltsverhandlung

## Schnittstellenbeschreibung

Die Schnittstellenbeschreibung in REST ist komplett optional.

- Für die Beschreibung gibt es eine Vielzahl von Tools wie RAML, WADL, API Blueprint, ...
- **OpenAPI** hat sich hier als "Quasi-Standard" durchgesetzt.

### OpenAPI Besonderheiten

- Aufbau(Metadaten, Endpunkte, Datentypen)

- Kompatibel mit JSON Schema

- Kann zur Validierung genutzt werden

- Datentypen

  - Einfache
    - integer(int32, int64)
    - number(float, double)
    - string(date, date-time, password, byte, binary)
    - boolean
  - Zusammengesetzte
    - object
    - array
    - enum

- Code Generator für eine Vielzahl von Programmiersprachen. ([OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator))

  - Client
  - Server
  - Dokumentation (HTML, Markdown, Asciidoc, ...)
  - Schema (GraphQL, protobuf, ...)

- Beschreibung kann direkt in Postman geladen werden

## Vorläufiges Fazit

Vorteile:

- Beliebige Formate
- Gut geeignet für binäre Inhalte

Nachteile:

- Kein vorgegebenes Format
- Kein "Standard-" Mapping auf Objekte
