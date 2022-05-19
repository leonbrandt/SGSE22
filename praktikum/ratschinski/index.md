# Kevin Ratschinski

## Thema: Vergleich von verschiedenen Architekturstilen für eine Programmierschnittstelle

- Technologien: **GraphQL**, **REST** und **gRPC**

  Mittels GraphQL, REST und gRPC können Client und Server miteinander kommunizieren. Für den Transport verwenden alle drei Technologien das HTTP Protokoll. Abgesehen von dieser Gemeinsamkeit, sind die drei Technologien grundverschieden. Während des Praktikums soll ermittelt werden, für welche Einsatzgebiete die verschiedenen Technologien am besten geeignet sind.

## Github Repository

&#8594; [Github Repository Performanz Test](https://github.com/Kevin-Ratschinski/rest-graphql-grpc)

## Technologien

&#8594; [GraphQL](/praktikum/ratschinski/graphql)

&#8594; [REST](/praktikum/ratschinski/rest)

&#8594; [gRPC](/praktikum/ratschinski/grpc)

## Vergleich Datenformat

[GraphQL Datenformat](/praktikum/ratschinski/graphql#datenformat) | [REST Datenformat](/praktikum/ratschinski/rest#datenformat) | [gRPC Datenformat](/praktikum/ratschinski/grpc#datenformat)

### Datenformat Zusammenfassung

|                      | gRPC     | GraphQL             | REST                 |
| -------------------- | -------- | ------------------- | -------------------- |
| **Datenformat**      | protobuf | JSON / graphql      | Beliebig             |
| **Dokument Stil**    | ❌       | ✅                  | Ja bei JSON oder XML |
| **Effizienz**        | ✅       | -                   | -                    |
| **Komplexität**      | hoch     | gering              | mittel               |
| **Abstraktion**      | hoch     | mittel              | gering               |
| **Binärdaten**       | Bytes    | Base64 oder Verweis | Binäre 8 Bit Inhalte |
| **Hypermedia**       | ❌       | ❌                  | ✅                   |
| **Language Mapping** | ✅       | -                   | ❌                   |

## Schnittstellenbeschreibung

| [GraphQL Schema](/praktikum/ratschinski/graphql#schnittstellenbeschreibung) | [Rest Schnittstellenbeschreibung](/praktikum/ratschinski/rest#schnittstellenbeschreibung) | [gRPC Schnittstellenbeschreibung](/praktikum/ratschinski/grpc#schnittstellenbeschreibung)

### Warum eine Schnittstelle beschreiben ?

1. Aufrufe erleichtern
2. Entwicklung Client und Server
3. Einhaltung eines Vertrages
4. Erzeugung von Dokumentationen (PDF's, HTML)
5. Validierung von Nachrichten
6. Vergleich von API Versionen (Kompatibilität)
7. Qualitätssicherung

### Schnittstellenbeschreibung Zusammenfassung

|                                                    | gRPC IDL                 | GraphQL Schema           | REST(OpenAPI)                  |
| -------------------------------------------------- | ------------------------ | ------------------------ | ------------------------------ |
| **Vorgehen**                                       | Beschreibung first       | Beschreibung first       | Beschreibung oder Code first   |
| **Format**                                         | Domain Specific Language | Domain Specific Language | JSON/YAML                      |
| **Alternative Beschreibungssprachen**              | -                        | -                        | RAML, WADL, API Blueprint, ... |
| **Nachrichtenformat**                              | protobuf                 | JSON                     | JSON, XML, ...                 |
| **Ohne Interface description language einsetzen?** | ❌                       | ❌                       | ✅                             |
| **Beschreibung von Sicherheitsfeatures**           | ❌                       | ❌                       | OAuth2, API Keys, ...          |
| **Serveradresse angeben**                          | ❌                       | ❌                       | ✅                             |
| **Typ-System**                                     | ✅                       | ✅                       | ✅ JSON Schema                 |
| **Min., Max., Regex.**                             | ❌                       | ❌ (Über Custom Types)   | ✅                             |
| **Schema-Inspektion(Vorschau)**                    | ❌                       | ✅                       | ❌                             |

## Sonstiges

- Einsatzgebiete für die verschiedenen Technologien ermitteln.  
   Was eignet sich am besten für API`s, Microservices, Webanwendungen und Mobile Apps?

- Metriken:

  - Performanz
  - Skalierung
  - Effizienz
  - Implementationsaufwand
  - Security
  - Versionierbarkeit

- Nächste Schritte:

  1. Einarbeitung in die verschiedenen Technologien
  2. Testfälle für die Metriken erstellen
  3. Verschiedene Architekturen mit den unterschiedlichen Technologien aufbauen
  4. Auf Grundlage der Architekturen werden verschiedene Tests durchgeführt, um die Unterschiede festzustellen
  5. Konkretes Ergebnis anhand der ermittelten Werte
