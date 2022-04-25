# GraphQL

## Paradigma

![graphql](./assets/graphql/graphql.png)

## Datenformat

- Verwendet als Datenformat JSON oder graphql für Anfragen
  - Wird im Content-Type festgelegt.

POST /shop-test HTTP/1.1  
Content-Type: application/graphlql

```graphql
{
  products(name: "Test") {
    name
    price
  }
}
```

- Antwort immer in JSON

HTTP/1.1 200 Ok  
Content-Type: application/json

```json
{
  {
    "data": {
      "products": [
        {
          "name": "Test",
          "price": 99.99
        }
      ]
    }
  }
}
```

- Keine Unterstützung für binäre Daten
  - Lassen sich Base64 codiert versenden
  - Nachteil: Base64 ist immer größer als die jeweilige Datei (ca. 30%)
  - Bilder können als Verweis(Link) versendet werden

## Vorläufiges Fazit

Vorteile:

- Format ist vorgegeben
- Type - System
- Schnittstellenbeschreibung

Nachteile:

- Nur JSON
- Fehlende Unterstützung für binäre Daten
