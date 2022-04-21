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
    - Wer darf ews auslösen?
  - Nutzbarkeit: 
    - Wie einfach ist die Bedienung/Konfiguration/Installation?
    - Gibt es wiederverwendbare Teile?
  - Schnelligkeit: 
    - Wie lange dauert es vom Commit im Git zu laufender Anwendung?

### Inhalt

- Untersuchung und Erklärung der Ansätze
- Vorstellung mehrerer Tools
- Verwendung der Tools mit Anwendungsfall aus Unternehmen
- Vergleich der Tools/Ansätze nach den oben genannten Punkten
- Fazit