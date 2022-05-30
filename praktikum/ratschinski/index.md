# Vergleich von verschiedenen Architekturstilen für eine Programmierschnittstelle

- Technologien: **gRPC**, **GraphQL** und **REST**

  Mittels GraphQL, REST und gRPC können Client und Server miteinander kommunizieren. Für den Transport verwenden alle drei Technologien das HTTP Protokoll. Abgesehen von dieser Gemeinsamkeit, sind die drei Technologien grundverschieden. Während des Praktikums soll ermittelt werden, für welche Einsatzgebiete die verschiedenen Technologien am besten geeignet sind.

# Einführung in die verschiedenen Technologien

## gRPC

![gRPC Paradigma](./assets/grpc/grpc_paradigma.png)

gRPC ist ein von Google entwickeltes Open-Source-Framework für Remote Procedure Calls (RPC). Remote Procedure Calls sind entfernte Funktionsaufrufe, die über verschiedene Systeme hinweg ausgeführt werden können. gRPC basiert auf dem HTTP/2 Standard und benutzt zum Versenden der Daten das "Protocol Buffers" Datenformat, welches ebenfalls von Google entwickelt wird.

## GraphQL

![GraphQL Paradigma](./assets/graphql/graphql_paradigma.png)

GraphQL ist eine Abfragesprache, die von Meta entwickelt wurde. Mit GraphQL können vom Client genau definierte Abfragen an den Server gestellt werden. Die Abfrage wird anschließend vom Server verarbeitet und die Antwort zum Client zurückgesendet. Mit "Mutationen" lassen sich auch Änderungen durchführen. Hierbei handelt es sich um einfache Remote Procedure Calls. Das zeigt das GraphQL nicht nur eine reine Abfragesprache ist.

## REST

![REST Paradigma](./assets/rest/rest_paradigma.png)

REST basiert auf der Architektur des World Wide Web. Mithilfe des HTTP-Protokolls lassen sich verschiedene Anfragen an den Server stellen. Um mit dem Server zu kommunizieren, werden URI's vom Server adressiert, welcher anschließend eine Antwort zurückliefert.

# Datenformat

## gRPC

- Die Daten werden mit Hilfe des protobuf Frameworks übermittelt.

- Das Framework serialisiert die Daten.

- Die serialisierten Daten können einfach über das Netz übertragen werden.

![gRPC serialisieren](./assets/grpc/grpc_serialize.png)

### Datentypen

![gRPC Datentypen](./assets/grpc/grpc_typen.png)
Quelle: https://developers.google.com/protocol-buffers/docs/encoding

### Decoding

![gRPC decoding](./assets/grpc/grpc_decoding.png)

- Vorteile gegenüber JSON

  - Nachrichten sind kompakter
  - Nachrichten sind nicht lesbar (Beschreibung der Nachricht wird zum lesen benötigt)

### Versionierbarkeit

```protobuf
Version 1

message User {
  int64 id = 1;
  string first_name = 2;
  string last_name = 3;
  string email = 4;
}
```

```protobuf
Version 2

message User {
  int64 id = 1;
  string first_name = 2;
  string last_name = 3;
  string password = 5;
}
```

Feldnummern ändern sich nicht. (siehe string email = 4; / string password = 5;)  
Nachrichten lassen sich so sehr einfach von Version 1 auf Version 2 mappen. Dies wird vom Framework automatisch gemacht.

### Übertragung von binären Daten zum Beispiel Bilder

```protobuf
message Image {
  bytes image = 1;
}
```

Nachteile:

- Komplettes Bild wird übertragen
- Ressourcenverbrauch
- Performanz

Stückweise Übertragung ist mit etwas Mehraufwand möglich.

- Stream Blöcke

## GraphQL

- Verwendet als Datenformat JSON oder graphql für Anfragen
  - Wird im Content-Type festgelegt.

POST /test HTTP/1.1  
Content-Type: application/graphlql

```graphql
{
  user(id: 1) {
    id
    first_name
    last_name
    email
    messages {
      id
      text
      userId
    }
  }
}
```

- Antwort immer in JSON

HTTP/1.1 200 Ok  
Content-Type: application/json

```json
{
  "data": {
    "user": {
      "id": "1",
      "first_name": "Markos",
      "last_name": "O'Sirin",
      "email": "mosirin0@vk.com",
      "messages": []
    }
  }
}
```

- Keine Unterstützung für binäre Daten
  - Lassen sich Base64 codiert versenden
  - Nachteil: Base64 ist immer größer als die jeweilige Datei (ca. 30%)
  - Bilder können als Verweis(Link) versendet werden

## REST

![rest data](./assets/rest/rest_datenformat.png)

- Datenformat wird im Content-Type festgelegt.
  - JSON, XML, IMAGE, PDF, CSV, ...
  - Keine Begrenzung auf ein Datenformat

### Besonderheiten

- REST unterstützt Hypermedia

  - Verweis auf Ressourcen

- REST zieht noch weite Vorteile aus der Verwendung des HTTP-Protokolls
  - Z.B. Caching oder Inhaltsverhandlung

## Zusammenfassung

|                      |   gRPC   |       GraphQL       |         REST         |
| -------------------- | :------: | :-----------------: | :------------------: |
| **Datenformat**      | protobuf |   JSON / graphql    |       Beliebig       |
| **Dokument Stil**    |    ❌    |         ✅          | Ja bei JSON oder XML |
| **Effizienz**        |    ✅    |          -          |          -           |
| **Komplexität**      |   hoch   |       gering        |        mittel        |
| **Abstraktion**      |   hoch   |       mittel        |        gering        |
| **Binärdaten**       |  Bytes   | Base64 oder Verweis | Binäre 8 Bit Inhalte |
| **Hypermedia**       |    ❌    |         ❌          |          ✅          |
| **Language Mapping** |    ✅    |          -          |          ❌          |

# Schnittstellenbeschreibung

Vorteile einer Schnittstellenbeschreibung

1. Aufrufe erleichtern
2. Entwicklung Client und Server
3. Einhaltung eines Vertrages
4. Erzeugung von Dokumentationen (PDF's, HTML)
5. Validierung von Nachrichten
6. Vergleich von API Versionen (Kompatibilität)
7. Qualitätssicherung

## gRPC

Die Schnittstelle wird in gRPC über proto Dateien beschrieben.

```protobuf
syntax = "proto3";

service UserService {
  rpc GetUser(Id) returns (User) {}
  rpc GetAllUsers (Empty) returns (UserList) {}
  rpc AddUser(User) returns (Id) {}
  rpc DeleteUser (Id) returns (Empty) {}
  rpc EditUser (User) returns (User) {}
  rpc GetMessage(Id) returns (Message) {}
  rpc GetAllMessages (Empty) returns (MessageList) {}
  rpc GetUserMessages (Id) returns (MessageList) {}
  rpc AddMessage(Message) returns (Id) {}
  rpc DeleteMessage (Id) returns (Empty) {}
  rpc EditMessage (Message) returns (Message) {}
}

message User {
  int64 id = 1;
  string first_name = 2;
  string last_name = 3;
  string email = 4;
}

message Message {
  int64 id = 1;
  string text = 2;
  int64 userId = 3;
}

message Id {
  string id = 1;
}

message Empty {}

message UserList {
  repeated User users = 1;
}

message MessageList {
  repeated Message messages = 1;
}
```

Der proto Compiler kann aus den Dateien verschiedene Vorlagen für Clients und Server erstellen.

_Beispiel GO Client und JAVA Server_
![proto](./assets/grpc/proto.png)

Dadurch dass die Feldnummern in den proto Dateien nicht verändert werden dürfen entsteht eine gute Kompatibilität zwischen den verschiedenen Schnittstellenversionen.

- Typen dürfen vertauscht werden solange kein **Overflow** entsteht
- Namen dürfen geändert werden, da intern nur die Feldnummern benutzt werden
- **Wichtig** Feldnummern dürfen gelöscht, aber später nicht wieder verwendet werden

## GraphQL

Die Schnittstelle wird in GraphQL mit einem Schema beschrieben.

```graphql
type Query {
  users: [User!]
  user(id: ID!): User
}

type Mutation {
  createUser(first_name: String!, last_name: String!, email: String!): User!
  updateUser(
    id: ID!
    first_name: String
    last_name: String
    email: String
  ): User!
  deleteUser(id: ID!): Boolean!
}

type User {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  messages: [Message!]
}
```

- Mit Hilfe des Schemas können alle möglichen Informationen über die Schnittstelle gewonnen werden.
- Schemas können leicht als Graph visualisiert werden. Beispiele: [GraphQL Voyager](https://apis.guru/graphql-voyager/)
- Aus den Schemas lässt sich Code für den Client (React, Vue, Angular, ...) und den Server(Node.js, .NET, Java, ...) generieren. [GraphQL Code Generator](https://www.graphql-code-generator.com/)

### Typ-System Schema

- Einfache Typen

  - Int
  - String
  - Float
  - Boolean
  - ID

- Zusammengesetzte
  - Objekte
  - Enumeration
  - Interfaces
  - Unions

### Schemas und Microservices

Die Schnittstellenbeschreibung mit Schemas, eignet sich sehr gut für Microservices

![GraphQL Schema](./assets/graphql/graphql_schema.png)

## REST

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

## Zusammenfassung

|                                                 |         gRPC IDL         |      GraphQL Schema       |         REST(OpenAPI)          |
| ----------------------------------------------- | :----------------------: | :-----------------------: | :----------------------------: |
| **Vorgehen**                                    |    Beschreibung first    |    Beschreibung first     |  Beschreibung oder Code first  |
| **Format**                                      | Domain Specific Language | Domain Specific Language  |           JSON/YAML            |
| **Alternative Beschreibungssprachen**           |            -             |             -             | RAML, WADL, API Blueprint, ... |
| **Nachrichtenformat**                           |         protobuf         |           JSON            |         JSON, XML, ...         |
| **Ohne Schnittstellenbeschreibung einsetzbar?** |            ❌            |            ❌             |               ✅               |
| **Beschreibung von Sicherheitsfeatures**        |            ❌            |            ❌             |     OAuth2, API Keys, ...      |
| **Serveradresse angeben**                       |            ❌            |            ❌             |               ✅               |
| **Typ-System**                                  |            ✅            |            ✅             |      ✅ <br> JSON Schema       |
| **Min., Max., Regex.**                          |            ❌            | ❌ <br> Über Custom Types |               ✅               |
| **Schema-Inspektion(Vorschau)**                 |            ❌            |            ✅             |               ❌               |

# Performanz

## Repository

&#8594; [Github Repository Performance testing](https://github.com/Kevin-Ratschinski/rest-graphql-grpc)

## Auswertung

# Skalierung

# Implementationsaufwand

# Versionierbarkeit

# Security

# "Vorläufiges" Fazit

TODO Fazit ausarbeiten

- Einsatzgebiete für die verschiedenen Technologien ermitteln.  
   Was eignet sich am besten für API`s, Microservices, Webanwendungen und Mobile Apps?

## gRPC

Vorteile:

- Effizient
- Serialisierung übernimmt protobuf
- Type - System
- Language Mapping (Java, c++, Go, ...)
- Versionierbarkeit

Nachteile:

- Komplex
- Lesen geht nur mit Formatbeschreibung

## GraphQL

Vorteile:

- Format ist vorgegeben
- Type - System
- ausführliche Schnittstellenbeschreibung
- Eignet sich gut für Microservices

Nachteile:

- Nur JSON wird zurückgegeben
- Fehlende Unterstützung für binäre Daten

## REST

Vorteile:

- Beliebige Formate
- Gut geeignet für binäre Inhalte

Nachteile:

- Kein vorgegebenes Format
- Kein "Standard-" Mapping auf Objekte

# Referenzen
