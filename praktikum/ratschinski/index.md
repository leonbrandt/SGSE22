# Kevin Ratschinski

## Thema: Vergleich von verschiedenen Architekturstilen für eine Programmierschnittstelle

- Technologien: **GraphQL**, **REST** und **gRPC**

  Mittels GraphQL, REST und gRPC können Client und Server miteinander kommunizieren. Für den Transport verwenden alle drei Technologien das HTTP Protokoll. Abgesehen von dieser Gemeinsamkeit, sind die drei Technologien grundverschieden. Während des Praktikums soll ermittelt werden, für welche Einsatzgebiete die verschiedenen Technologien am besten geeignet sind.

### Technologien

&#8594; [GraphQL](/praktikum/ratschinski/graphql)

&#8594; [REST](/praktikum/ratschinski/rest)

&#8594; [gRPC](/praktikum/ratschinski/grpc)

### Vergleich Datenformat

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
