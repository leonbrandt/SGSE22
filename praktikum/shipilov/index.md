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

In Zeiten der Digitalisierung sind die Organisationen von deren digitalen Evolution abhängig. Je weiter diese digitale Evolution ist, desto besser kann die Firma auf dem Markt behaupten. Das Überdenken bestehender Geschäftszweige ist ein wichtiger Schritt dieser Prozess. Wenn die Softwarearchitektur leicht zu verstehen, zu entwickeln, zu pflegen und zu warten ist, kann sie als "gut" bezeichnet werden. [1] Auf diese Weise kann das Entwicklungsteam effizient arbeiten. Gerade bei komplexen monolithischen Systemen sind diese Vorteile jedoch oft nur eingeschränkt realisierbar. Einer der Hauptgründe ist der Aufbau dieser Monolithen aufgrund der hohen Komplexität des Hauptproblemfeldes. Langfristig kann die Situation durch eine klare Abgrenzung und Sichtbarkeit der Hauptteile des Programms verbessert werden. Dazu kann eine monolithische Anwendung in kleinere, überschaubarere Teilaufgaben zerlegt werden. Microservices sind derzeit ein vielversprechender Ansatz, um dieses Ziel zu erreichen.

## 2.1	Microservices

**Microservices** sind ein Konzept zur Modularisierung von Software. Ein Microservice ist ein kleiner, autonomer Service, der über ein Netzwerk mit anderen Micro-services kommuniziert. [2] Eine umfassende, trennscharfe Definition von Microservices gibt es nicht, da das Thema vielschichtige Aspekte vereint. Dies umfasst organisatorische, fachliche und technische Aspekte sowohl auf der Ebene eines einzelnen Microservice als auch für ganze Softwaresysteme, die aus mehreren Microservices bestehen.

## 2.2	 Merkmale von Microservice

In diesem Kapitel werden Microservices für ein einheitliches Verständnis im Rahmen dieser Arbeit anhand ihrer Merkmale näher definiert:
Microservices sind ein Ansatz zur Modularisierung großer Software-Systeme in kleinere Einheiten (Microservices), die… [3]
*	unabhängig voneinander deployt werden können.
*	unabhängig von Änderungen an anderen Microservices in Produktion gebracht werden können.
*	mit unterschiedlichen Technologien umgesetzt sein können.
*	eine eigene, unabhängige Datenhaltung haben z.B. in Form einer eigenen Datenbank oder eines eigenen Schemas.
*	über Netzwerk miteinander kommunizieren und untereinander eine lose Kopplung aufweisen.
*	ein eigenes User Interface (UI) enthalten sollten.
*	sich auf einen fachlichen Kontext innerhalb einer Domäne fokussieren und damit innerhalb eines Microservice eine hohe Kohäsion aufweisen.
*	von genau einem Team, typischerweise drei bis neun Personen, entwickelt werden, wobei ein Team mehrere Microservices Betreuen kann.

## 2.3 Architektur von Microservice-Systemen

Bei einem Microservice-System sind insbesondere die Aufteilung in Microservices sowie die Beziehungen der Microservices untereinander zu betrachten. In der folgenden Abbildung ist ein grundlegendes Microservice-System mit zwei Microservices dargestellt. In der Praxis wird ein solches System meist aus mehreren Microservices bestehen.

![](img/01.png)

**Abbildung 2.1: Entkoppelte Arbeit durch Microservices (entnommen aus „Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen“. Chapter 3.)**

Es gibt drei grundsätzliche Architekturprinzipien, denen eine Microservice-Architektur folgt. Zum einen gibt es eine starke Modularisierung des Gesamtsystems durch die Aufteilung in unabhängige Microservices. Dadurch **soll die Komplexität beherrschbar werden**. Die Größe eines einzelnen Service wird dabei von verschiedenen Faktoren bestimmt. Nach oben sollte diese dadurch begrenzt werden, dass ein Team von drei bis neun Personen den Microservice betreuen kann. [4]

Als zweites Prinzip zeichnet sich der Ansatz durch eine **lose Kupplung der Microservices untereinander** aus, wobei die Kommunikation zwischen Microservices über das Netzwerk erfolgt. Dies ermöglicht eine unterschiedliche Skalierung von Microservices sowie eine hohe Unabhängigkeit, bringt jedoch einige Herausforderungen mit sich: [5]
*	Die Kommunikation über Netzwerke ist unzuverlässig, daher ist darauf zu achten, dass ein Microservice mit Ausfällen umgehen kann und ein Ausfall keine Auswirkungen auf die Verfügbarkeit des Gesamtsystems hat.
*	Die Kommunikation über Netzwerke ist vergleichsweise langsam, daher sollte aus Perfomance-Gründen die Kommunikation zwischen Microservices möglichst selten stattfinden. Wenn diese häufig miteinander kommunizieren müssen, lässt dies auf ein Problem in der Architektur schließen.
*	Das Verschieben von Funktionalitäten zwischen Microservices ist recht aufwändig, da diese unabhängig voneinander sind, eigene Deployment-Einheiten bilden und in unterschiedlichen Technologien umgesetzt sein können.

Das dritte Prinzip ist **eine hohe Kohäsion innerhalb eines Microservice**, wobei ein Microservice eine eigene Datenhaltung, ein eigenes Backend und ein User Inter-face beinhaltet. Dies führt zu einer hohen Unabhängigkeit. Neue Funktionen können innerhalb eines Microservice und damit von einem Team umgesetzt werden, weitestgehend unabhängig von anderen Microservices und Teams. Gibt es innerhalb eines Microservice keine hohe Kohäsion kann dies ein Anzeichen dafür sein, dass die fachliche Aufteilung nicht optimal ist und eine Funktion besser in einem anderen Microservice implementiert werden müsste. [6]

# 3.	Konzeption und Realisierung von der Microservice-Architektur

Zur Unterstützung der Client-Apps wurde ein auf Microservices basierendes System entwickelt. Der Name des Systems lautet "Shop Economy". Hier werden vier Microservices identifiziert: Katalog, Inventar, Identität und Handel. Jeder dieser Microservices verfügt über eine eigene Datenbank, die in keiner Beziehung zu anderen Datenbanken steht und ausschließlich für den besitzenden Microservice verwendet wird. Für die Kommunikation zwischen Diensten wird ein „Message Broker“ eingeführt, der es den Microservices ermöglicht, Nachrichten asynchron zu veröffentlichen und zu konsumieren. Die gesamte Authentifizierung und Autorisierung über das gesamte System wird vom Identitäts-Microservice über das „OpenID Connect“-Protokoll abgewickelt. Es gibt auch ein Frontend-Portal, das alle Microservices nutzt, um mehrere End-to-End-Szenarien über die Benutzeroberfläche zu ermöglichen.
Da das System in der lokalen Entwicklungsmaschine aufgebaut ist, interagieren die Clients (Desktop und Mobile) direkt mit den Microservices und dem Portal.
Schließlich gibt es noch einige Infrastrukturkomponenten: Protokollierung, verteilte Ablaufverfolgung und Überwachung, mit denen alle Microservices interagieren und die bei der Fehlerbehebung helfen und sicherstellen, dass das gesamte System intakt bleibt.
In Bezug auf die für jede Komponente verwendete Technologie werden alle Microservices mit .NET- und ASP.NET Core-Technologien erstellt. Die Datenban-ken werden von einem MongoDB-Server gehostet. Der Message Broker wird über RabbitMQ aktiviert. Für verteiltes Messaging wird das MassTransit-Framework verwendet. Die „OpenID Connect“-Authentifizierung und -Autorisierung wird über das „Identity Server“-Framework ermöglicht. Das Fronted ist eine Single-Page-React-Anwendung.
Alle Infrastrukturdienste laufen über Docker-Container, die das Ausführen von Diensten in der lokalen Entwicklungsmaschine vereinfachen, ohne zusätzliche Tools zu installieren. 

![](img/02.png)

**Abbildung 3.1: Systemarchitektur Shop Economy. (erstellt mit https://www.diagrams.net/)**

# 4. Kurze Vergleich der Cloud-Dienste von AWS, Azure und Google

Im Jahr 2021 hat Cynthia Harvey im "AWS vs. Azure vs. Google Cloud: 2022 Cloud Platform Comparison" bestätigt, dass derzeit drei Unternehmen die Hauptkonkurrenz auf dem Cloud-Computing-Markt anführen: Amazon Web Services (AWS), Microsoft Azure und Google Cloud Platform (GCP). Alle bieten alle Arten von Funktionen für Infrastructure as a Service (IaaS), Software as a Service (SaaS) und Platform as a Service (PaaS). AWS dominiert den Markt. Es erschien früher als die Konkurrenten (im Jahr 2006). [7]

Laut einem Bericht der Synergy Research Group aus dem Jahr 2020 „spiegelte das Wachstum von Amazon weiterhin genau das Gesamtmarktwachstum wider, sodass das Unternehmen seinen Anteil von 33 % am globalen [Cloud]-Markt halten konnte. Der Zweitplatzierte Microsoft ist erneut schneller gewachsen als der Markt und hat seinen Marktanteil in den letzten vier Quartalen um fast drei Prozentpunkte auf 18 % gesteigert." [8]

Microsoft ist besonders stark in SaaS und Google Cloud ist ein sehr guter KI-Dienst und bietet niedrige Preise und Rabatte.

Nachfolgend finden Sie einen Vergleich der Cloud-Dienste von AWS, Azure und Google.

![](img/03.jpg)

**Abbildung 4.1: Inkrementelles Wachstum der Cloud-Ausgaben (entnommen aus https://www.srgresearch.com/articles/incremental-growth-cloud-spending-hits-new-high-while-amazon-and-microsoft-maintain-clear-lead-reno-nv-february-4-2020)**

Dieser Magic Quadrant von Gartner zeigt die Dominanz der drei wichtigsten Cloud-Services:

![](img/04.jpeg)

**Abbildung 4.2: Magic Quadrant für Cloud-Infrastruktur und Plattformservices (entnommen aus https://www.datamation.com/cloud/aws-vs-azure-vs-google-cloud/)**

## 4.1 Amazon Web Services (2006)

Mit einem umfangreichen Satz von Tools, der weiterhin exponentiell wächst, sind die Fähigkeiten von Amazon unübertroffen. Die Kostenstruktur kann jedoch verwirrend sein, und der Fokus auf die Public Cloud anstelle einer Hybrid- oder Private Cloud bedeutet, dass die Interaktion mit Ihrem Rechenzentrum nicht die oberste Priorität von AWS ist. [7]

Amazon zeigt ein sehr umfangreiches Tool-Set, das von Jahr zu Jahr exponentiell wächst. AWS hat jedoch ein sehr komplexes Kostensystem und konzentriert sich auch auf die Public Cloud (anstelle von Hybrid oder Private). Das bedeutet, dass AWS nicht gut für die Interaktion mit dem Rechenzentrum geeignet ist.
Es ist erwähnenswert, dass die Arbeit mit einer Hybrid Cloud und mit einem Rechenzentrum ein wichtiger Bestandteil der Microservice-Architektur ist.



## 4.2 Microsoft Azure (2010)

Microsoft Azure ist der größte Konkurrent für AWS. Dieses Unternehmen verfügt über umfangreiche Erfahrung in der Betreuung von Firmenkunden und unterstützt auch Hybrid- und Private Clouds, arbeitet also auch mit dem Rechenzentrum zusammen. [7]

Wenn ein Unternehmen bereits einen Vertrag mit Microsoft hat und bereits Firmenkunde ist, kann Microsoft auch eine ausführlichere Beratung und Rabatte für die Migration zu Microsoft Azure anbieten.


## 4.3 Google Cloud Platform (2011)

Google ist auf dem dritten Platz, aber es ist auch gut gesponsert. Es richtet sich nicht so sehr an Firmenkunden und hat auch weniger öffentliche Dienste als Amazon. Aber Google bewegt sich in Richtung Deep Learning und in den Bereich der künstlichen Intelligenz, des maschinellen Lernens und der Datenanalyse. Daraus folgt, dass sich für Programme und Microservices, die hauptsächlich auf die Arbeit mit KI abzielen, der Einsatz von Google lohnen kann. [7]

# 5. Vergleich virtueller Maschinen von AWS, Azure und Google

Im Jahr 2021 hat Michael Bose verichtet, dass Virtuelle Maschinen und Speicher werden von Clients am häufigsten in Cloud-Plattformen verwendet. Daraus ist ersichtlich, dass alle Cloud-Plattformen virtuelle Maschinen (VMs) ausführen können. Es ist erwähnenswert, dass nur virtuelle Microsoft Azure-Maschinen echte Prozessorkerne verwenden. Das bedeutet, wenn Sie beispielsweise eine VM mit vier Kernen erstellen möchten, erstellt nur Azure eine VM mit vier echten Kernen ohne Hyperthreading. Die VM von Amazon und Google erstellt per Hyperthreading eine VM mit zwei Kernen und vier Threads. Dies führt zu einer höheren Leistung für Azure-VM-Prozessoren als die Konkurrenz. [9] Weitere Details zu den Leistungsmerkmalen der VMs der drei Konkurrenten werden im folgenden Kapitel behandelt.

Die maximalen VM-Rechenkonfigurationseinstellungen für AWS, Azure und GCP werden in der folgenden Tabelle verglichen:

![](img/05.png)

**Tabelle 4.1: Die maximalen VM-Rechenkonfigurationseinstellungen für AWS, Azure und GCP (entnommen aus https://www.nakivo.com/blog/aws-vs-azure-vs-google-which-cloud-is-best-for-your-organization/)**


# Literaturverzeichnis
* [1] - vgl. Martin 2017, Kap. 15 Abschn. 1
* [2] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen. 183ff. und Newman S, Building microservices – Designing fine-grained systems, Chapter 1
* [3] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen. 188ff. und Newman S, Building microservices – Designing fine-grained systems, Chapter 1
* [4] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen, Kindle-Position 698 ff.
* [5] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen, Kindle-Position 1524 ff.
* [6] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen, Kindle-Position 2084 ff. und Newman S, Building microservices – Designing finegrained systems, Chapter 3
* [7] - vgl. Cynthia Harvey 2021, AWS vs. Azure vs. Google Cloud: 2022 Cloud Platform Comparison. URL: https://www.datamation.com/cloud/aws-vs-azure-vs-google-cloud/
* [8] - Synergy Research Group 2020, Incremental Growth in Cloud Spending Hits a New High while Amazon and Microsoft Maintain a Clear Lead. URL: https://www.srgresearch.com/articles/incremental-growth-cloud-spending-hits-new-high-while-amazon-and-microsoft-maintain-clear-lead-reno-nv-february-4-2020
* [9] - Michael Bose, AWS vs Azure vs Google: Which Cloud Is Best for Your Organization. URL: https://www.nakivo.com/blog/aws-vs-azure-vs-google-which-cloud-is-best-for-your-organization/

# Verwendete Icons von Dritten
* https://www.diagrams.net/
* https://www.rabbitmq.com/trademark-guidelines.html
* https://masstransit-project.com/
* https://www.pngkey.com/maxpic/u2q8q8i1i1o0t4a9/
* https://commons.wikimedia.org/wiki/File:React-icon.svg
* https://identityserver4.readthedocs.io/en/latest/
* https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png
* https://github.com/emissary-ingress
