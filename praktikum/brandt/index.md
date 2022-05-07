# Konstruktion eines Tool-Stacks zum automatisierten Deployment von Software in Cloud-Architekturen

Mögliche Fragestellungen:
- Wie sehen Alternativen zum Antipattern des manuellen Deployments aus?
- Welche Ansätze existieren? Worin unterscheiden sich diese?
- Welche Technologien für entsprechende Ansätze existieren? Worin unterscheiden sich diese?

Ziel: Lesern dieser Arbeit zu automatisierten bzw. deklarativen Deployment motivieren und sie in die Lage versetzen dies mit einem Toolstack umzusetzen.

---

Humble & Farley beschreiben ein manuelles Deployment von Software als Antipattern. Morris nennt Reproducibility, Disposability, Consistency und Repeatability als nur einige Vorteile von IaC. Auch legen Praktiken wie Self-Documented Systems, Versionierung, Continuous Testing, Small Changes und Continuous Availability nahe, dass automatisiertes Deployment durch IaC als eine erstrebenswerte Vorgehensweise aus Sicht der Software Engineering ist.

Ansätze wie das Nutzen von CaaS oder PaaS können Probleme wie Vendor Lock-In oder eine geringe Kosteneffizienz mit sich bringen. Dies ist vorallem dann der Fall, sollte in reinen PaaS-Umgebungen die Anforderung nach containerisierten Architekturkomponenten aufkommen und eine Nutzung von Komponenten in Form von SaaS (z.B. managed Datenbanken) erforderlich werden. Aus diesem Grund soll der Ausgangspunkt für diese Arbeit eine Nutzung von IaaS sein.

Endres et. al. identifizieren als Modellierungsmuster für automatisiertes Deployment einen imperativen sowie einen deklarativen Ansatz. Wurster et. al. formulieren ein Metamodell und bilden dieses auf 13 konkrete Technologien ab und klassifizieren diese.

Diese Arbeit soll methodische Alternativen zum Antipattern des manuellen Deployments vorstellen. Hierzu soll auch die konkrete Verwendung ausgewählter Tools vorgestellt werden. Die Motivation ist ein Aufzeigen der Vorteile von deklarativen Deployment. Ziel ist es Lesern der Arbeit von dieser Vorgehensweise zu überzeugen und ihnen das erforderliche Toolset an die Hand zu geben, um dieses umzusetzen.

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

## Kommentar zur ursprünglichen Fragestellung

Eine Feststellung von Qualitätseigenschaften entsprechender Technologien anhand einer empirischen Untersuchung halte ich für keine geeignete Zielsetzung für diese Arbeit. Es gelingt mir u.A. nicht ein geeignetes Set an relevanten Qualitätseigenschaften sowie eine geeignete Methode um diese zu Messen zu formulieren. Eine Untersuchung anhand einer Fallstudie setzt voraus, dass die Qualität einer Vorgehensweise anhand der Qualität der Ergebnisses dieser messbar ist. Ich halte diese Prämisse für nicht zutreffend. Weiterhin erfüllt die jetzige Fragestellung eher einen Lehrcharakter im Sinne des Moduls (Seminar). Diese ermöglicht mir einen höheren Lernzuwachs und ein besseres Vermitteln von Wissen an die Kommilitonen.

## Projektplan

### Zu erzeugende Artefakte

- Textuelle Ausarbeitung
- Präsentationsslides
- Geplant, wenn geeignet: Kurzpaper, Thesenpapier, Infografik, Cheatsheet mit den wichtigsten Kernpunkten

### Tasks

- [ ] #1 Exakte Erarbeitung der Motivation, des Kontext sowie der Ansätze (WIP)
- [ ] #2 Festlegen, Klassifizieren von Technologien
- [ ] #3 Einarbeitung in Technologien (ggf. Implementieren einer fachlich reduzierten Fallstudie)
- [ ] #4 "Evaluation": Dokumentieren, Aufarbeiten der SE-Relevanten Aspekte hinsichtlich der Behauptung, dass automatisiertes (bzw. deklaratives) Deployment Vorteile bringt
- [ ] #5 Didaktische Aufarbeitung des Tool-Stacks
- [ ] #6 Schreiben der Ausarbeitung
- [ ] #7 Erzeugen von Präsentationsslides
- [ ] #8 (Erzeugen des Cheatsheets)

### Zeitplan

- bis inkl. KW 18 (So, 08.05.) - "Kickoff" (Task #1, #2)
- ab inkl. KW 19 - Schreiben der Ausarbeitung (Task #6)
- KW 19+20+21 (So, 29.05.) - "Technologiearbeit" (Task #3)
- KW 22+23+24 (So, 19.06.) - Evaluation (Task #4, #5)
- bis inkl. KW 25 (So, 26.06.) - Fertigstellen der Ausarbeitung (Task #6)
- bis inkl. KW 26 (So, 03.06.) - Fertigstellen aller Artefakte (Task #6, #7, #8)
- KW 27+28 Prüfungszeitraum

![](https://f002.backblazeb2.com/file/leonbrandt-public/studium/sgse/gantt.png)
