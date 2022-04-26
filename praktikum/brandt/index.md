# Konstruktion eines Tool-Stacks zum automatisierten Deployment von Software in Cloud-Architekturen

Mögliche Fragestellungen:
- Wie sehen Alternativen zum Antipattern des manuellen Deployments aus?
- Welche Ansätze existieren?
- Worin unterscheiden sich diese?

---

Humble & Farley beschreiben ein manuelles Deployment von Software als Antipattern. Morris nennt Reproducibility, Disposability, Consistency und Repeatability als nur einige Vorteile von IaC. Auch legen Praktiken wie Self-Documented Systems, Versionierung, Continuous Testing, Small Changes und Continuous Availability nahe, dass automatisiertes Deployment durch IaC als eine erstrebenswerte Vorgehensweise aus Sicht der Software Engineering ist.

Änsätze wie das Nutzen von CaaS oder PaaS können Probleme wie Vendor Lock-In oder eine geringe Kosteneffizienz mit sich bringen. Dies ist vorallem dann der Fall, sollte in reinen PaaS-Umgebungen die Anforderung nach containerisierten Architekturkomponenten aufkommen und eine Nutzung von Komponenten in Form von SaaS (z.B. managed Datenbanken) erforderlich werden. Aus diesem Grund soll der Ausgangspunkt für diese Arbeit eine Nutzung von IaaS sein.

Endres et. al. identifizieren als Modellierungsmuster für automatisiertes Deployment einen imperativen sowie einen deklarativen Ansatz. Wurster et. al. formulieren ein Metamodell und bilden dieses auf 13 konkrete Technologien ab und klassifizieren diese.

Diese Arbeit soll methodische Alternativen zum Antipattern des manuellen Deployments vorstellen. Hierzu soll auch die konkrete Verwendung ausgewählter Tools vorgestellt werden.

## Methodischer Ansatz zur Umsetzung von deklarativen Deployment

Ziel soll es sein vorliegende containerisierte Software unter Nutzung von IaaS bereitzustellen.

```
Container + IaaS -> Deployment
```

Ein Deployment macht das Nutzen von CaaS erforderlich:

```
Container + CaaS -> Deployment
```

Für das Problemfeld "Provisioning von Infrastruktur (Nutzen von IaaS)" kommen Technologien wie Terraform und Ansible in Frage.

Es ist zunächst also IaaS in CaaS zu "überführen":

```
IaaS -> CaaS
```

Für das Problemfeld "Orchestrierung von Containern (Bereitstellen und Nutzen von hosted CaaS)" kommen Technologien wie Kubernetes und Docker Swarm in Frage.

Als Unter-Problemfeld bei der Nutzung von CaaS lässt sich weiterhin die Konfiguration und Versionierung von Deployments benennen. Hierzu kommt unter Kubernetes z.B. die Technologie Helm in Frage.

## Abgrenzung

- IaC-Technologien bieten u.A. mehr (z.B. Terraform kann PaaS nutzen)
- Providerspezifische IaC-Technologien (AWS, Azure)

## (Vorab-)Quellen

- Humble & Farley - ISBN: 9780321601919
- Morris - ISBN: 9781491924358
- Endres et. al. - (kein DOI) https://www.iaas.uni-stuttgart.de/publications/INPROC-2017-12-Declarative-vs-Imperative-Modeling-Patterns.pdf
- Wurster et. al. - DOI: 10.1007/s00450-019-00412-x

## Ursprüngliche Fragestellung

Eine Feststellung von Qualitätseigenschaften entsprechender Technologien anhand einer empirischen Untersuchung halte ich für keine geeignete Zielsetzung für diese Arbeit. Es gelingt mir u.A. nicht ein geeignetes Set an relevanten Qualitätseigenschaften sowie eine geeignete Methode um diese zu Messen zu formulieren. Weiterhin erfüllt diese Fragestellung eher einen lehrcharakter im Sinne des Moduls (Seminar).
