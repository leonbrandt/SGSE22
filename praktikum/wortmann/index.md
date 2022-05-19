# Timo Wortmann

### Thema

**Evaluierung von Continuous Deployment Ansätzen auf Kubernetes**

### Fragestellungen

- Welche Ansätze gibt es?
  - z.B. Push- und Pull-based
  - Stichwort GitOps
- Welche Tools gibt es für die jeweiligen Ansätze?
  - Pull: ArgoCD, Fleet, Keel, ...
  - Push: Jenkins, GitHub Actions, Drone, ...
  - Sonstige: Terraform, Ansible, ...
- Welches Tool eignet sich am besten im Hinblick auf Sicherheit, Nutzbarkeit & Schnelligkeit?
  - Kriterien aus der ISO 25010
  - Sicherheit: 
    - Access Control (RBAC)
    - Wer darf es auslösen?
  - Nutzbarkeit: 
    - Wie einfach ist die Bedienung/Konfiguration/Installation?
    - Gibt es wiederverwendbare Teile?
  - Schnelligkeit: 
    - Wie lange dauert es vom Commit im Git zu laufender Anwendung?

### Inhalt

- Untersuchung und Erklärung der Ansätze
  - Push
  - Pull
- Vorstellung mehrerer Tools
  - Drone CI (Push)
  - Argo CD (Pull)
  - Flux CD (Pull)
  - je nach Zeit noch mehr Tools
- Verwendung der Tools mit Anwendungsfall
  - Eigene Entwicklung aus Unternehmen (Web-Applikation)
  - Helm Chart TIG Stack
  - Harbor
- Vergleich der Tools/Ansätze nach Kriterien:
  - https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance
  - Lead Time for Changes - Zeit vom Commit zu laufender Anwendung
  - Time to Restore Service - Wie lange es dauert, bis der Service aus einem Fehlerfall wieder hergestellt wurde
  - Aufwand bei Skalierung - wie schnell kann das Setup kopiert / neu aufgesetzt werden (im 2ten Git Repo)
  - Usability/nutzbarkeit - Wie einfach kann das Tool installiert und verwendet werden
- Fazit

### Zeitplan

| Woche | Inhalt                                               |
| ----- | ---------------------------------------------------- |
| 17    | Einarbeitung Kubernetes                              |
| 18    | Einarbeitung  Deployment Ansätze + Tools             |
| 19    | Aufbau Entwicklungsumgebung                          |
| 20    | Testaufbau manuelles Deployment + Einarbeitung Tools |
| 21    | Einlesung + Aufbau Toolchain                         |
| 22    | Implementierung + Durchführung                       |
| 23    | Durchführung + Dokumentation Ergebnisse              |
| 24    | Dokumentation Ergebnisse + Ausarbeitung              |
| 25    | Finalisierung Ausarbeitung + Ergebnisse              |
| 26    | Vorstellung + Abgabe                                 |

### TODO

- [X] Festlegung Kriterien und Tools
- [x] Aufbau Entwicklungsumgebung
- [X] Testaufbau manuelles Deployment
- [ ] Installation verwendeter Tools
- [ ] Dokumentation als Fließtext