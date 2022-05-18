# Rafael Berger

* Security: Authentifizierung mit OpenIDConnect (Vergleich mit Ansätzen)
    * Wie sieht das Konzept von OpenID Connect aus und wie kann es eingesetzt werden?

## Vergleich OpenID Connect und SAML

- Funktionsweise
- Anwendungsbereiche
- Mögliche Sicherheitsrisiken
- zu messende Metriken
    - Anmeldezeit
    - Erweiterungsmöglichkeiten (2 Faktor usw.)
    - Session parameter (limit, dauer)
    - Developer experience (Konfigurationsaufwand)
    - Verschlüsselungsalgorithmus/Signieralgorithmus
    - Unterstützte Programmiersprachen
    - Anzahl möglicher Identitätsanbieter (Google, Facebook, etc.)

## Fragen

- Worin unterscheidet sich OpenID Connect und SAML im Hinblick auf den Authentifizierungsablauf?
- Werden unterschiedliche Identitätsanbieter unterstützt?
- Welche möglichen Sicherheitsrisiken gibt es und wie können diese umgangen werden?
- Gibt es bestimmte Anwendungsbereiche, wo OpenID Connect oder SAML zu bevorzugen ist?

## Beschreibung der Tätigkeit in Prosa

Zu Beginn der Arbeit liegt der Fokus auf den Unterschied zwischen einer Autorisierung und einer Authentifizierung. Dabei werden die wichtigsten Faktoren herausgearbeitet. Für die Autorisierung und Authentifizierung werden OAuth2.0, OpenID Connect und SAML genutzt und miteinander verglichen. Neben den unterschiedlichen Authentifizierungsabläufe werden die möglichen Anwendungsfälle ausgearbeitet. Da das Thema Sicherheit bei einer Authentifizierung von hoher Bedeutung ist, wird eine Recherche über mögliche Sicherheitsrisiken der einzelnen Möglichkeiten durchgeführt. Diese Sicherheitsrisken werden dabei genannt und Hinweise gegeben wie diese zu vermeiden sind. Für eine genauere Evalierung ist es notwendig, neben der theoretischen Einarbeitung, diese Verfahren zu implementieren und auszuführen. Dafür wird ein bestimmter Authentifizierungsablauf ausgewählt, der sowohl mit OIDC als auch mit SAML möglich ist. Dementsprechend werden kleine Prototypen von Services implementiert, die diese Authentifizierung durchführen. Während der Entwicklung werden bereits die ersten zu messenden Metriken aufgestellt. Diese konzentrieren sich auf die Implementierung von OIDC und SAML. Nach der Implementierung ist eine wichtige Metrik die benötigte Anmeldezeit. Am Ende der Evalierung werden die ermittelten Metriken miteinander verglichen, um ein gesamtes Fazit zu schließen. 

## Zeitplan

Tätigkeit                                        | Zeitpunkt
-------------------------------------------------|----------
Zeitplan und Beschreibung der Tätigkeit in Prosa | KW 17
Unterschied Autorisierung und Authentifizierung  | KW 18
Einarbeitung OAuth 2.0/OIDC                      | KW 19
Einarbeitung SAML                                | KW 20
Einblick in Alternativen                         | KW 21
Implementierung der Services                     | KW 22
Implementierung OIDC                             | KW 23
Implementierung SAML                             | KW 24
Fertigstellung der zu messenden Metriken         | KW 25
Abgabe                                           | KW 26

## Checkliste

[X] Unterschied Autorisierung und Authentifizierung <br>
[X] Allgemein OAuth 2.0 <br>
[X] Autorisierungsabläufe OAuth 2.0 <br>
[] Sicherheitsrisiken OAuth 2.0 <br>
[X] Allgemein OIDC <br>
[X] Einarbeitung JWT <br>
[X] Autorisierungsabläufe OIDC <br>
[] Sicherheitsrisiken OIDC <br>
[X] Allgemein SAML <br>
[] Autorisierungsabläufe SAML <br>
[] Sicherheitsrisiken SAML <br>
[] Einarbeitung Keycloak <br>
[] Implementierung Services <br>
[] Implementierung OIDC <br>
[] Metriken OIDC <br>
[] Implementierung SAML <br>
[] Metriken SAML <br>
[] Vergleich OIDC und SAML <br>
