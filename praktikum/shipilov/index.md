## Artem Shipilov

# Azure Services für Microservice. Vergleich mit Google Cloud Services and Amazon Services.
* Azure Key Vault
* Azure Kubernetes Service
* Azure Service Bus
* Azure Container Registry



# API-Gateway für Microservices. Vergleich von Azure, Amazon, Kong Gateway.
* Vorteile eines API-Gateways
* Security
* Authentifizierung, Autorisierung und Fehlertoleranz
* Protocol Adaptor

# Aufbau eines Testprojekts mit Integration von Cloud-Service und API-Gateway


# 1. Einführung

## Zweck dieser Studie:
1. Herausfinden, wie Cloud-Ressourcen zum Aufbau einer Microservice-Architektur verwendet werden können.
2. Die Hauptvorteile der drei wichtigsten Anbieter von Cloud-Ressourcen (Azure Services, Google Cloud Services und Amazon Services) kennen.
3. Herausfinden, welche Module zum Aufbau von Microservices benötigt werden und erfahren, wie diese Module in der Praxis am Beispiel mindestens eines Cloud-Ressourcenanbieters funktionieren
4. (Optional) Untersuchen die Betriebskosten einer Microservice-Architektur für ein Unternehmen.

# 2.	Theoretische Grundlagen

In Zeiten der Digitalisierung sind die Organisationen von deren digitalen Evolution abhängig. Je weiter diese digitale Evolution ist, desto besser kann die Firma auf dem Markt behaupten. Das Überdenken bestehender Geschäftszweige ist ein wichtiger Schritt dieser Prozess. Wenn die Softwarearchitektur leicht zu verstehen, zu entwickeln, zu pflegen und zu warten ist, kann sie als "gut" bezeichnet werden. [1] Auf diese Weise kann das Entwicklungsteam effizient arbeiten. Gerade bei komplexen monolithischen Systemen sind diese Vorteile jedoch oft nur ein-geschränkt realisierbar. Einer der Hauptgründe ist der Aufbau dieser Monolithen aufgrund der hohen Komplexität des Hauptproblemfeldes. Langfristig kann die Situation durch eine klare Abgrenzung und Sichtbarkeit der Hauptteile des Programms verbessert werden. Dazu kann eine monolithische Anwendung in kleinere, überschaubarere Teilaufgaben zerlegt werden. Microservices sind derzeit ein vielversprechender Ansatz, um dieses Ziel zu erreichen.

## 2.1	Microservices

**Microservices** sind ein Konzept zur Modularisierung von Software. Ein Microservice ist ein kleiner, autonomer Service, der über ein Netzwerk mit anderen Micro-services kommuniziert. [2] Eine umfassende, trennscharfe Definition von Microservices gibt es nicht, da das Thema vielschichtige Aspekte vereint. Dies umfasst organisatorische, fachliche und technische Aspekte sowohl auf der Ebene eines einzelnen Microservice als auch für ganze Softwaresysteme, die aus mehreren Microservices bestehen.

## 2.2	 Merkmale von Microservice

In diesem Kapitel werden Microservices für ein einheitliches Verständnis im Rahmen dieser Arbeit anhand ihrer Merkmale näher definiert:
Microservices sind ein Ansatz zur Modularisierung großer Software-Systeme in kleinere Einheiten (Microservices), die… [3]
*	unabhängig voneinander deployt werden können.
*	unabhängig von Änderungen an anderen Microservices in Produktion ge-bracht werden können.
*	mit unterschiedlichen Technologien umgesetzt sein können.
*	eine eigene, unabhängige Datenhaltung haben z.B. in Form einer eige-nen Datenbank oder eines eigenen Schemas.
*	über Netzwerk miteinander kommunizieren und untereinander eine lose Kopplung aufweisen.
*	ein eigenes User Interface (UI) enthalten sollten.
*	sich auf einen fachlichen Kontext innerhalb einer Domäne fokussieren und damit innerhalb eines Microservice eine hohe Kohäsion aufweisen.
*	von genau einem Team, typischerweise drei bis neun Personen, entwickelt werden, wobei ein Team mehrere Microservices Betreuen kann.






# Literaturverzeichnis
* [1] - vgl. Martin 2017, Kap. 15 Abschn. 1
* [2] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen. 183ff. und Newman S, Building microservices – Designing fine-grained systems, Chapter 1
* [3] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen. 188ff. und Newman S, Building microservices – Designing fine-grained systems, Chapter 1
