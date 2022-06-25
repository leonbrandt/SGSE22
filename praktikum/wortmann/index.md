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
- [X] Installation verwendeter Tools
- [X] Durchführung
- [X] Dokumentation Theoretische Grundlagen
- [ ] Erstellung Architekturdiagramme
- [ ] Dokumentation Durchführung
- [ ] Dokumentation Ergebnisse

## Beschreibung der Aufgabenstellung

Das Ziel dieser Praktikumsaufgabe ist es, verschiedene Ansätze des Continuous Deployments auf Kubernetes zu vergleichen und zu evaluieren. Der Hintergrund für diese Untersuchung ist der Aufbau einer Kubernetes Infrastruktur in dem Unternehmen WAGO GmbH & Co. KG. Für den AUfbau einer solchen Infrastruktur in dem Unternehmen soll Continuous Deployment angewandt werden, allerdings gibt es noch keine Ferstlegung auf eine Software, die diesen Teil übernimmt. Diese praktische Untersuchung soll daher den Unterschied zwischen verschiedenen Ansätzen aufzeigen und die Lösungen im Kontext des Unternehmens bewerten.

## Theoretische Grundlagen

### Kubernetes

Kubernetes ist eine Orchestrierungsplattform für Container. Durch die Verbindung von mehreren Nodes zu Clustern kann Kubernetes Load Balancing, Verteilung von persistentem Speicher und Deployments, Überprüfung von Service Health und Secret- sowie Konfigurationsmanagement übernehmen. Ein Continuous Deployment Workflow ist in  Kubernetes nicht integriert und muss durch eine externe Software bereitgestellt werden [[1]](#ref-1).

### GitOps & Ansätze des Deployments

Die in dieser Ausarbeitung behandelten Arten des Deployments basieren alle auf dem Ansatz *GitOps*. Der Begriff wurde 2017 von Weaveworks definiert. Es handelt sich dabei um ein Modell zum Betrieb von Kubernetes-Clustern und cloud-nativen Anwendungen. Dabei gilt, dass alle Dateien eines Deployments in einem Versionskontrollsystem (z.B. Git) vorliegen und dass die Dateien im Versionskontrollsystem immer dem gewünschtem Stand des Deployments in der Realität entsprechen. Das Ziel ist es, dass es nur einen Stand der Wahrheit gibt. Die Unterschiede zwischen den Dateien in dem Versionskontrollsystem und der Realität werden durch die Continuous Deployment Software oder andere Automatisierungsprozesse übernommen [[2]](#ref-2).

Deployments auf Kubernetes-Clustern werden durch YAML-Dateien beschrieben. Für das Deployment solcher Dateien gitb es zwei verschiedene Ansätze: *Push* und *Pull*.
Bei dem Push Ansatz wird eine CI/CD Pipeline verwendet, um bei Änderungen an den Dateien im Versionskontrollsystem diese neu zu deployen. Der Ansatz eignet sich, wenn neben dem Deployment noch weitere Schritte ausgeführt werden sollen, z.B. die dynamische Generierung von Zertifikaten oder Konfigurationsdateien, oder wenn bereits eine CI/CD Pipeline vorhanden ist, da diese dann nur erweitert werden muss.
Bei dem Pull Ansatz wird in dem gewünschten Kubernetes-Cluster ein Agent installiert, der in regelmäßigen Abständen den Stand der Dateien abfragt und bei Abweichungen die nötigen Änderungen vornimmt. Diese Methode hat die Vorteile, dass der Cluster nicht von außen, bzw. durch ein externes System, erreichbar sein muss, um das Deployment durchzuführen, und dass der Agent auch wieder durch ein Versionskontrollsystem verwaltet werden kann und somit dem GitOps Ansatz folgt [[3]](#ref-3).

## Verwendete Ressourcen

### Programme für das Deployment

Um die Ansätze *Push* und *Pull* zu vergleichen, werden beide Ansätze mit unterschiedlichen Programmen durchgeführt.
Für den *Push* Ansatz eignen sich Programme wie Jenkins, GitHub Actions oder Drone CI. Für diese Ausarbeitung wird Drone CI verwendet, da es bereits in dem Unternehmen angewandt wird und daher keine weitere Infrastruktur benötigt wird.
Für den *Pull* Ansatz gibt es viele weitere Programme wie beispielsweise Argo CD, Flux CD, Helm, Spinnaker und Harness. Im Rahmen dieser Ausarbeitung werden Argo CD und Flux CD verwendet, da diese in dem Bereich marktführend sind und eine große Community besitzen (Anzahl der GitHub Sterne 9.600 bei Argo CD[[4]](#ref-4) und 3.500 bei Flux CD[[5]](#ref-5)).

### Kubernetes Cluster

Der Kubernetes-Cluster, auf dem die Versuche durchgeführt werden, befindet sich im Rechenzentrum des Unternehmens und ist nicht über das Internet erreichbar. Es handelt sich dabei um einen Kubernetes Cluster mit einer Node, welcher durch die Kubernetes Engine [RKE](https://rancher.com/products/rke) aufgesetzt wird. RKE verbindet sich per SSH auf den angegebenen Nodes und legt dort die für Kubernetes benötigten Komponenten (kubelet, etcd, ...) als Docker Container an. Auch hier handelt es sich um eine Software, die bereits im Unternehmen verwendet wird. Alternativen dafür sind [minikube](https://minikube.sigs.k8s.io/docs/start/) oder [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/).
Ein Vergleich zu Deployments auf anderer Infratstruktur, z.B. Microsoft Azure oder Amazon EKS, ist nicht vorgesehen.

### Anwendungen zum Deployen

Um einen aussagekräftigen Vergleich der verschiedenen Ansätze und Tools durchführen zu können, werden im Rahmen dieser Ausarbeitung auch mehrere Deployments mit unterschiedlicher Architektur durchgeführt.

#### Selbstentwickelte Webandwendung

Bei dem ersten Deployment handelt es sich um eine containerisierte Webanwendung des Unternehmens. Diese wurde **nicht** im Rahmen dieser Ausarbeitung entwickelt, sondern davor. Die Anwendung besteht aus einem einzigen Container, welcher allerdings Zugansdaten über Secrets benötigt. Vor dieser Ausarbeitung wurde die Anwendung noch nicht in einem Kubernetes-Cluster betrieben und muss daher noch in eine Form umgewandelt werden, wodurch sie auf Kubernetes lauffähig ist.

#### Harbor

[Harbor](https://github.com/goharbor/harbor) ist eine Open Source Container Registry, welche standardmäßig auf Kubernetes gehostet wird. Es ist eine Anwendung, die auf Kubernetes installiert wird und dabei aus mehreren Komponenten inklusive Datenbank, Registry und Logging-Service besteht. Die Anwendung bietet die Funtkion, Images von Containern hoch- und herunterzuladen, und benötigt daher einen persistenten Speicher. Das Ziel ist es, eine Harbor-Instanz mit Hilfe der zu evaluierenden Programme auf dem Cluster zu installieren.

#### TIG-Stack

Bei dem TIG-Stack handelt es sich um einen Monitoring-Stack bestehend aus den Programmen Telegraf, InfluxDB und Grafana. Telegraf ist ein Agent, welcher Messwerte über ein bestimmtes System sammelt, z.B. Verbrauch von CPU und Arbeitsspeicher. Durch den Telegraf Agent werden die Daten in die InfluxDB geschrieben. Es handelt sich dabei um eine Datenbank für Zeitreihendaten. Das Grafan verbindet sich mit der InfluxDB und kann mit Hilfe von Dashboards und Graphen die gesammelten Daten visualisieren. Das Ziel ist es, einen lauffähigen Stack zu deployen, in dem die drei Komponenten automatisch miteinander verbunden sind und Daten untereinander austauschen können.

### Sonstige Software

Als zusätzliche Software wird auf dem Cluster das Management-Portal [Rancher](https://rancher.com/) installiert. Rancher ist eine Open Source Software und bietet ein Webinterface zum Verwalten eines oder mehrerer Kubernetes Cluster. Es dient für diese Aufgabe lediglich zur Unterstützuung bei Fehlern und zur besseren Darstellung und Überwachung der aktuellen Deployments. Rancher wird nicht über die Continuous Deployment Software installiert, sondern manuell.

## Bewertungskriterien

## Durchführung

### Aufsetzen des Clusters

### Installation der Continuous Deployment Programme

### Deployment der Anwendungen

## Ergebnisse

## Referenzen

<span id="ref-1">[1]: *What is Kubernetes?*, 2022. Verfügbar unter https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/, zuletzt zugegriffen am 20.6.2022.</span>

<span id="ref-2">[2]: M. D'Amore, *GitOps and ArgoCD: Continuous deployment and maintenance of a full stack application in a hybrid cloud Kubernetes environment*, 2021. Verfügbar unter https://webthesis.biblio.polito.it/18142/1/tesi.pdf, zuletzt zugegriffen am 20.06.22</span>

<span id="ref-3">[3]: W. Chia, *Push vs. Pull in GitOps: Is There Really a Difference?*, 2021. Verfügbar unter https://thenewstack.io/push-vs-pull-in-gitops-is-there-really-a-difference/, zuletzt zugegriffen am 20.06.22</span>

<span id="ref-4">[4]: *Argo CD GitHub*. Verfügbar unter https://github.com/argoproj/argo-cd/, zuletzt zugegriffen am 20.06.22</span>

<span id="ref-5">[5]: *Flux CD GitHub*. Verfügbar unter https://github.com/fluxcd/flux2, zuletzt zugegriffen am 20.06.22</span>