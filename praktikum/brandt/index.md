Arbeitstitel: Konstruktion eines Tool-Stacks zum deklarativen Deployment von Software in Cloud-Architekturen

# Kontext

- Problemstellung aus dem SE: Bereitstellung / Deployment von cloudbasierter, verteilter Software (hier: Services in Form von Containern)
- Ansätze: CaaS, PaaS (Probleme: Vendor lock-in, Kosteneffizienz, etc.)
	- Vorteile: Aus SE-Sicht schlecht geeignet
	- Probleme: Vendor lock-in, Kosteneneffizienz, mangelnde Flexibilität für komplexe Architekturen 
- Alternative: Vollständige Bereitstellung via IaaS
	- Vorteile: Probleme von anderen Ansätzen bestehen nicht
	- Probleme: Aus SE-Sicht schlecht geeignet
- Frage: Kann ein Tool-Stack für deklaratives Deployment die Probleme von Deployment via IaaS lösen?
	- These: Deklaratives Deployment ist aus SE-Sicht gut geeignet
- Ansatz: Durch zeigen, dass ein Tool-Stack SE-Relevante Anforderungen erfüllt, kann gezeigt werden, dass deklaratives Deployment via IaaS SE-Relevante Anforderungen erfüllen kann

# Methodischer Ansatz zur Umsetzung von deklarativen Deployment

- Problemfeld: Provisioning von Infrastruktur (Nutzen von IaaS durch IaC)
	- Lösung: Terraform
	- Lösung: Ansible
- Problemfeld: Orchestrierung von Containern (Bereitstellen und Nutzen von hosted CaaS)
	- Lösung: Kubernetes
	- Lösung: Docker Swarm
	- Unter-Problemfeld: Konfiguration, Versionierung von Deployments
		- Lösung: Helm (unter Kubernetes)

# Methodischer Ansatz zur Evaluation von Toolstacks

- (ggf.) Untersuchen von Qualitätseigenschaften anhand einer Fallstudie
	- Fachliche Komplexität der Fallstudie minimal halten!
	- Frage: Weshalb genau ist eine Fallstudie notwendig?

# TODOs für dieses Dokument

- Definieren notwendiger Qualitätseigenschaften für ein Vorgehensansatz
- Definieren von Metriken zur Messung dieser Qualitätseigenschaften
- Definieren von Methoden zur Erhebung dieser Metriken
	- (Statische Analysemethoden!)
		- z.B. welche Eigenschaften / Funktionen müssen Tools besitzen, etc.
- Definieren von Zielvorgaben zur Bewertung einer Qualitätseigenschaft als "erfüllt"
