# Evaluation von GitOps-Toolstacks

## Fallstudie

Entwickelt werden soll ein in seiner Komplexität stark vereinfachtes Beispiel-System, welches ein Speichern von Text-Records (z.B. Notizen, Todo-Liste, etc.) ermöglicht. Benutzer interagieren via eine Webbasierte GUI im Browser mit einem API-Service, welcher Datenbank-Zugriffe implementiert. Um den Kontext dieses Beispiels um IoT-Anwendungsfälle zu erweitern sollen Text-Records auch via MQTT gespeichert werden können. Hierzu kommt ein MQTT-Broker sowie ein weiterer Service zur Persistierung zum Einsatz.

![](https://f002.backblazeb2.com/file/leonbrandt-public/studium/sgse/architecture.svg)

Dieser Anwendungsfall erscheint geeignet, da in diesem Beispiel zwei Schnittstellen auf dem Backend heraus existieren. Weiterhin ist eine Web-GUI auszuliefern. Es werden selbstimplementierte Komponenten mit bereits existierenden kombiniert. Die Komplexität der Implementierung der eigenen Komponenten ist sehr überschaubar.

Da beide Service-Komponenten in Typescript auf Node implementiert werden, kann eine gemeinsame Codebasis geteilt werden. Diese befindet sich im Repository [casestudy-commons](https://gitlab.com/leonbrandt-sgse/casestudy-commons) und ist in der npm-Registry unter [@leonbrandt/sgse-casestudy-commons](https://www.npmjs.com/package/@leonbrandt/sgse-casestudy-commons) verfügbar.

Alle Repositories befinden sich auf GitLab unter [https://gitlab.com/leonbrandt-sgse](https://gitlab.com/leonbrandt-sgse)
