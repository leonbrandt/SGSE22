## Artem Shipilov

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

## Amazon Web Services (2006)

Mit einem umfangreichen Satz von Tools, der weiterhin exponentiell wächst, sind die Fähigkeiten von Amazon unübertroffen. Die Kostenstruktur kann jedoch verwirrend sein, und der Fokus auf die Public Cloud anstelle einer Hybrid- oder Private Cloud bedeutet, dass die Interaktion mit Ihrem Rechenzentrum nicht die oberste Priorität von AWS ist. [7]

Amazon zeigt ein sehr umfangreiches Tool-Set, das von Jahr zu Jahr exponentiell wächst. AWS hat jedoch ein sehr komplexes Kostensystem und konzentriert sich auch auf die Public Cloud (anstelle von Hybrid oder Private). Das bedeutet, dass AWS nicht gut für die Interaktion mit dem Rechenzentrum geeignet ist.
Es ist erwähnenswert, dass die Arbeit mit einer Hybrid Cloud und mit einem Rechenzentrum ein wichtiger Bestandteil der Microservice-Architektur ist.

## Microsoft Azure (2010)

Microsoft Azure ist der größte Konkurrent für AWS. Dieses Unternehmen verfügt über umfangreiche Erfahrung in der Betreuung von Firmenkunden und unterstützt auch Hybrid- und Private Clouds, arbeitet also auch mit dem Rechenzentrum zusammen. [7]

Wenn ein Unternehmen bereits einen Vertrag mit Microsoft hat und bereits Firmenkunde ist, kann Microsoft auch eine ausführlichere Beratung und Rabatte für die Migration zu Microsoft Azure anbieten.

## Google Cloud Platform (2011)

Google ist auf dem dritten Platz, aber es ist auch gut gesponsert. Es richtet sich nicht so sehr an Firmenkunden und hat auch weniger öffentliche Dienste als Amazon. Aber Google bewegt sich in Richtung Deep Learning und in den Bereich der künstlichen Intelligenz, des maschinellen Lernens und der Datenanalyse. Daraus folgt, dass sich für Programme und Microservices, die hauptsächlich auf die Arbeit mit KI abzielen, der Einsatz von Google lohnen kann. [7]

## 4.1 Vergleich virtueller Maschinen von AWS, Azure und Google

Im Jahr 2021 hat Michael Bose verichtet, dass Virtuelle Maschinen und Speicher werden von Clients am häufigsten in Cloud-Plattformen verwendet. Daraus ist ersichtlich, dass alle Cloud-Plattformen virtuelle Maschinen (VMs) ausführen können. Es ist erwähnenswert, dass nur virtuelle Microsoft Azure-Maschinen echte Prozessorkerne verwenden. Das bedeutet, wenn Sie beispielsweise eine VM mit vier Kernen erstellen möchten, erstellt nur Azure eine VM mit vier echten Kernen ohne Hyperthreading. Die VM von Amazon und Google erstellt per Hyperthreading eine VM mit zwei Kernen und vier Threads. Dies führt zu einer höheren Leistung für Azure-VM-Prozessoren als die Konkurrenz. [9] Weitere Details zu den Leistungsmerkmalen der VMs der drei Konkurrenten werden im folgenden Kapitel behandelt.

Die maximalen VM-Rechenkonfigurationseinstellungen für AWS, Azure und GCP werden in der folgenden Tabelle verglichen:

![](img/05.png)

**Tabelle 4.1: Die maximalen VM-Rechenkonfigurationseinstellungen für AWS, Azure und GCP (entnommen aus https://www.nakivo.com/blog/aws-vs-azure-vs-google-which-cloud-is-best-for-your-organization/)**

## 4.2 Regionen und Verfügbarkeitszonen

Jeder Cloud-Service-Provider ist in den wichtigsten modernen Industrieländern tätig, nämlich Europa, Nordamerika, Ost- und Südostasien und China. Eine **Region** ist ein geografisches Gebiet, in dem Rechenzentren physisch vorhanden sind. Verarbeitungszentren sind durch Netzwerke miteinander verbunden, sodass sie eine geringe Latenz haben. Eine **Availability Zone** ist ein eindeutiger Serverstandort innerhalb einer Region (z. B. Zentralaustralien, Nordaustralien, Südaustralien usw.). [9]

Nachfolgend findet eine Tabelle statt, wo die Verteilung der einzelnen Cloud-Service-Anbieter gezeigt wird.

![](img/06.png)

**Tabelle 4.2: Die Verteilung der einzelnen Cloud-Service-Anbieter (entnommen aus https://www.nakivo.com/blog/aws-vs-azure-vs-google-which-cloud-is-best-for-your-organization/)**


## 4.3 Preise.

Der Preis ist oft das entscheidende Kriterium. Ein Vergleich der Preise der drei Hauptkonkurrenten ist schwierig, da sie sich im Laufe der Zeit ändern, ständig neue Rabatte eingeführt werden und die Preise in jeder Region für jeden Cloud-Service-Anbieter stark variieren können. Der Preis hängt auch von der Konfiguration des VM-Prozessors, des Arbeitsspeichers, des Speicherplatzes und des Festplattentyps (SSD oder HDD) ab. [9]

Preislich unterscheiden sich alle drei Plattformen kaum. In der IT-Community besteht jedoch Einigkeit darüber, dass Microsoft Azure die niedrigsten Preise bietet (wobei daran zu denken ist, dass nur virtuelle Microsoft Azure-Maschinen echte Prozessorkerne verwenden [Abschnitt 4.1]). Noch vorteilhafter ist es, wenn ein Kunde, der bereits Microsoft-Produkte (Windows, Active Directory, MS SQL etc.) nutzt, auf Azure umsteigt. [10]

Damit der Vergleich korrekt ist, müssen Sie eine Region für alle Cloud-Anbieter auswählen. Es ist auch erforderlich, dieselbe VM-Konfiguration auszuwählen. Es ist zu beachten, dass keine 100 % identische VM-Konfiguration erhalten werden kann, sodass einige Werte abweichen werden. Wir betrachten 2 Beispiele. [9]

**Beispiel 1.**

![](img/07.png)

**Tabelle 4.3: Arten von virtuelle Maschinen (entnommen aus https://www.nakivo.com/blog/aws-vs-azure-vs-google-which-cloud-is-best-for-your-organization/)**

![](img/08.png)

**Tabelle 4.4: On-Demand-Preise (entnommen aus https://www.nakivo.com/blog/aws-vs-azure-vs-google-which-cloud-is-best-for-your-organization/)**

In diesem Beispiel ist der Preis des Servers mit der kleinsten VM-Instanz fast gleich, der Preis in der Google Cloud Platform ist geringer. Für die größte Instanz bietet AWS den niedrigsten Preis und Azure den höchsten, aber vergessen Sie nicht, dass Azure echte CPU-Kerne bietet. [9]

## 4.4 Fazit

Alle drei Plattformen eignen sich für die Arbeit mit einer Microservice-Architektur, aufgrund der oben beschriebenen Vorteile wurde für mein Praxisprojekt jedoch die Microsoft Azure Plattform mit einer standard_a2_v2 VM mit 4 GB Ultra-Disc-Speicher und 2 vCPUs gewählt.

# 5. Microsoft Azure-Tools.

## 5.1 Azure Cosmos DB

Azure Cosmos DB ist eine NoSQL-Datenbank mit Rechenzentren in vielen Ländern. Ein schneller Wechsel des Bearbeitungszentrums während der Stoßzeiten ist möglich. Es gibt eine automatische Skalierbarkeit. Eine globale Verteilung der Daten über mehrere Regionen ist möglich. Es gibt Open-Source-Code für gängige Programmiersprachen. Ein Azure Cosmos DB-Konto im Free-Tarif erhält 1.000 RU/s und 25 GB Speicherplatz kostenlos. [11]

* Die Vorteile von **SQL** sind Datenintegrität, Strukturiertheit.
* Die Vorteile von **NoSQL** sind Datenverarbeitungsgeschwindigkeit, Skalierbarkeit, verteilte Systeme.

**Starke Seiten von NoSQL:**
Fähigkeit, große Mengen unstrukturierter Informationen zu speichern. NoSQL hat keine Beschränkungen hinsichtlich der Typen gespeicherter Daten, und Sie können bei Bedarf neue Datentypen hinzufügen.
NoSQL-Datenbanken sind skalierbarer. Obwohl die Skalierung auch in SQL-Datenbanken unterstützt wird, erfordert sie viel mehr Personal- und Hardwareressourcen.

Die Rechenleistung ist begrenzt. Und der Preis für mehrere einfache Server ist geringer als für einen Hochleistungsserver. Durch die horizontale Skalierung (mehrere unabhängige Maschinen werden miteinander verbunden und jede von ihnen verarbeitet ihren eigenen Teil der Anfragen) können Sie die Kapazität des Clusters erhöhen, indem Sie einen neuen Server hinzufügen.

**Vorleile von Azure Cosmos DB:**
 1. Azure Cosmos DB bietet 99,999 % SLA sowohl für die Lese- als auch die Schreibverfügbarkeit.
 2. Große Geschwindigkeit in jeder Größenordnung
 3. Vereinfachte Anwendungsentwicklung. Beschleunigte Entwicklung durch Open-Source-APIs, mehreren SDKs, schemalose Daten und Analysen ohne ETL für operative Daten.
 4. End-to-End-Datenbankverwaltung.
 5. Günstige Preise.
 6. Azure Synapse Link für Azure Cosmos DB ist ein cloudbasiertes HTAP-Feature (Hybrid Transactional and Analytical Processing). Dies bietet Betriebsdatenanalysen in Azure Cosmos DB nahezu in Echtzeit und eine einfache Integration zwischen Azure Cosmos DB und Azure Synapse Analytics. [11]

-----------

# 6. Realisierung von der Microservice-Architektur.

Zur Implementierung der Microservice-Architektur wurde ein neues Microsoft Azure-Konto erstellt. Azure bietet die Möglichkeit, ein Konto für Studenten zu erstellen. Dieses Konto ist kostenlos. Doch ein solches Angebot ist mit Vorsicht zu genießen, denn der Microservice benötigt sehr viele Ressourcen (nämlich mindestens 2 vCPUs und 4 GiB Ultra-Disc-Speicher). Andernfalls tritt ein Fehler auf: “The System node pool must use VM sku with more than 2 cores and 4GB memory.” Glücklicherweise erlaubt Ihnen Azure, viele Ressourcen kostenlos zu nutzen, aber oft sind die Azure-Server ziemlich ausgelastet und es gibt keine freien virtuellen Maschinen mehr, die Sie kostenlos nutzen können. Daher waren zum Zeitpunkt der Untersuchung nicht alle virtuellen Maschinen mit dieser Ressource in Deutschland verfügbar. Wie in Amerika, Kanada. Daher wurde nach langer Suche eine virtuelle Maschine in Australien im zentralen Teil gefunden. Daher wurde für diese Arbeit der Standard_a2_v2-Cluster innerhalb des Azure Kubernetes Service ausgewählt.

Adresse des erstellten Microservices: https://shopeconomy.australiacentral.cloudapp.azure.com/

Ein Studentenabonnement wurde erstellt. Dem Studentenabonnement wurde eine Ressourcengruppe angehängt. Eine Ressourcengruppe besteht aus geladenen Microservices und Ressourcen, die von Azure bereitgestellt werden, um mit den Microservices zu kommunizieren (wie z.B. Azure Kubernetes Service, Azure Key Vault, VM-Skalierungsgruppe, Containerregistrierung, öffentliche IP-Adresse u.s.w.). 

![](img/09.png)

Die Azure Cloud-Ressourcen wurde hauptsächlich über die Befehlszeile verwaltet, sodass würde jeden Azure-Befehlsgebrauch zum Erstellen oder Verwalten von Cloud-Ressourcen in unseren Lesedateien leicht nachverfolgt. Dafür wird die Azure Command-Line Interface oder Azure CLI benötigt. 

Um beispielsweise den Trading-Microservice zu laden, ist es erforderlich sich zu registrieren und einen Befehl an Docker zu senden:
```powershell
az acr login --name $appname
```

Als Nächstes ist es nötig zum Erstellen einer Datenbank ein Cosmos DB-Konto zu erstellen. In Cosmos DB ist es möglich, die Datenbank zu übertragen und Mongo DB von einem lokalen Computer mit der Möglichkeit zur Verwendung der Mongo DB-API zu verwenden:
```powershell
az cosmosdb create --name $appname --resource-group $appname --kind MongoDB 
```

Im nächsten Schritt wird ein Service-Bus-Namespace angelegt. Es ist erforderlich um asynchrone Kommunikation zwischen Microservices zu ermöglichen: 
```powershell
az servicebus namespace create --name $appname --resource-group $appname --sku Standard
```

Jedes Microservice soll eine Verbindung mit Cosmos DB und Service Bus haben. Dafür wird eine Verbindungsstring gebraucht, die später in Azure Key Vault gespechert wird. Azure Key Vault ist eine bequeme Möglichkeit von Microsoft Azure alle Passwörter, Verbindungsstrings und Tokens zu speichern.

Zum Speichern der Docker-Images in Microsoft Azure existiert die Microsoft Azure Container Registry. Wie üblich wird dafür die Azure CLI verwendet. Der Befehl einer solchen Containerregistrierung sieht folgendermaßen aus:
```powershell
az acr create --name $appname --resource-group $appname --sku Basic
```

Um das Docker-Image per Push in die Azure-Containerregistrierung zu übertragen, wird der folgende Code verwendet:
```powershell
$appname="[Name]"

az acr login --name $appname
docker push "$appname.azurecr.io/trading:$version"
```



# 7. Auswahl einer virtuellen Maschine für einer Microservice-Architektur.

Der kurze Prozess zum Erstellen einer Microservice-Architektur basierend auf der virtuellen Maschine Australien Centre Standard_a2_v2, die für ein Studentenkonto verfügbar ist, wurde oben beschrieben. 2 vCPUs, 4 GiB. Dieses Kapitel beschreibt die Implementierung von drei weiteren virtuellen Maschinen und beschreibt, wie die Zugriffsgeschwindigkeiten von Microservices verglichen werden, die auf allen VMs erstellt wurden. Um die Ladegeschwindigkeit der Website zu bewerten, wurden Online-Ressourcen verwendet, um die Geschwindigkeit von Webverbindungen von Google [12], Solarwinds Pingdom [13] und GTmetrix [14] zu messen. Alle Seiten lieferten jedoch ungefähr die gleichen Ergebnisse. Daher wurden die Ergebnisse des bekanntesten Dienstes von Google als Grundlage für die Messung genommen.

Zur Messung der Seitenladegeschwindigkeit wurde eine Homepage mit einem Slider bestehend aus vier Fotos ausgewählt. Beim Laden dieser Seite wird eine Anfrage an den Identity-Microservice gesendet und je nachdem, ob der Benutzer ein registrierter Benutzer, Administrator oder Gast ist, unterschiedliche Inhalte erstellt. Vier virtuelle Maschinen wurden zum Vergleich ausgewählt: 
* Australien Center **Standard_a2_v2.** 2 vCPU, 4GiB - 0.1060 €/St.
* Germany West Central (Frankfurt) **Standard_a2_v2.** 2 vCPU, 4GiB - 0.0870 €/St.
* Germany West Central (Frankfurt)  **Standard_F4s_v2.** 4 vCPU, 8 GiB - 0.1940 €/St.
* Germany West Central (Frankfurt)  **Standard_D2_v4.** 2 vCPU, 8 GiB - 0.1150 €/St.

Dabei wurde die Abhängigkeit von Anzahl der Prozessorkerne und Arbeitsspeicher sowie Seitenladegeschwindigkeit betrachtet. Das Ergebnis der Studie war die folgende Grafik:

![](img/10.png)

Die Grafik zeigt, dass das Laden der ersten Seite immer viel länger dauert als nachfolgende Ladevorgänge. Dies geschieht meiner Meinung nach, weil einige der Prozesse im lokalen Cache des Browsers und im Cache des Servers gespeichert werden.

Die Grafik zeigt, dass eine VM, die sich in großer Entfernung vom Client befindet, 0,3-0,45 Sekunden langsamer läuft. Bei mehreren REST-API-Anfragen kann sich diese Zeit erheblich verlängern und dies kann den Betrieb des Microservices kritisch beeinträchtigen. Daher ist es zumindest für solche Microservices wie Trading notwendig, möglichst viele virtuelle Maschinen in verschiedenen Ländern mit der dichtesten Abdeckung zu erstellen.

Die Grafik zeigt auch, wie viele Ressourcen die Microservice-Architektur benötigt. Offensichtlich lohnt es sich für die Konzepte von Microservice-Architekturen und Microservices für kleine oder geschlossene Nutzung, eine VM mit mindestens 4 vCPUs und 8 GiB zu wählen. Die Kosten für eine solche VM sind doppelt so hoch wie die billigste der angebotenen Optionen, aber die Geschwindigkeit ist viel höher. Dies geschieht, weil 2 vCPUs und 4 GiB Speicher für eine Microservice-Architektur Rücken an Rücken ausreichen. Außerdem kann bei einem billigen Microservice beim Warten auf das Laden einer Seite länger als zwei oder drei Sekunden ein Fehler beim Laden der Website auftreten, der vom Microservice ausgegeben wird. Dies ist konfigurierbar, aber es ist am besten, Kunden nicht so lange warten zu lassen.

Es ist schwierig, die Leistungsobergrenze für VMs zu messen, da sie als DDos-Angriff erkannt wird. Es wird benötigt, um VMs mit der realen CPU lokal zu testen. Allerdings gibt es eine Tabelle von Microsoft, die die Abhängigkeit von Performance Cap vom Arbeitsspeicher zeigt. Anhand dieser Tabelle können Sie grob die Last berechnen, die die VM bewältigen kann. [15]


# Literaturverzeichnis
* [1] - vgl. Martin 2017, Kap. 15 Abschn. 1
* [2] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen. 183ff. und Newman S, Building microservices – Designing fine-grained systems, Chapter 1
* [3] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen. 188ff. und Newman S, Building microservices – Designing fine-grained systems, Chapter 1
* [4] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen, Kindle-Position 698 ff.
* [5] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen, Kindle-Position 1524 ff.
* [6] - vgl. Wolff E., Microservices – Grundlagen flexibler Softwarearchitekturen, Kindle-Position 2084 ff. und Newman S, Building microservices – Designing finegrained systems, Chapter 3
* [7] - vgl. Cynthia Harvey 2021, AWS vs. Azure vs. Google Cloud: 2022 Cloud Platform Comparison. URL: https://www.datamation.com/cloud/aws-vs-azure-vs-google-cloud/
* [8] - vgl. Synergy Research Group 2020, Incremental Growth in Cloud Spending Hits a New High while Amazon and Microsoft Maintain a Clear Lead. URL: https://www.srgresearch.com/articles/incremental-growth-cloud-spending-hits-new-high-while-amazon-and-microsoft-maintain-clear-lead-reno-nv-february-4-2020
* [9] - vgl. Michael Bose, AWS vs Azure vs Google: Which Cloud Is Best for Your Organization. URL: https://www.nakivo.com/blog/aws-vs-azure-vs-google-which-cloud-is-best-for-your-organization/
* [10] - vgl. Shanika Wickramasinghe, AWS vs Azure vs GCP: Comparing The Big 3 Cloud Platforms URL: https://www.bmc.com/blogs/aws-vs-azure-vs-google-cloud-platforms/
* [11] - vgl. Microsoft Docs, Willkommen bei Azure Cosmos DB. URL: https://docs.microsoft.com/de-de/azure/cosmos-db/introduction
* [12] - URL: https://pagespeed.web.dev/?hl=de
* [13] - URL: https://tools.pingdom.com/
* [14] - URL: https://gtmetrix.com/
* [15] - Microsoft Docs, Azure managed disk types. URL: https://docs.microsoft.com/nb-no/azure/virtual-machines/disks-types#premium-ssd

# Verwendete Icons von Dritten
* https://www.diagrams.net/
* https://www.rabbitmq.com/trademark-guidelines.html
* https://masstransit-project.com/
* https://www.pngkey.com/maxpic/u2q8q8i1i1o0t4a9/
* https://commons.wikimedia.org/wiki/File:React-icon.svg
* https://identityserver4.readthedocs.io/en/latest/
* https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png
* https://github.com/emissary-ingress

# Zeitplan
| Termin     |     Meilenstein                      |
|:----------:|:------------------------------------:|
| 05.05.2022 | Finalisierung der Aufgabenstellung   |
| 12.05.2022 | (Ausarbeitung Buch / Präsentation)  |
| 19.05.2022 | Grundlegende Theorie, Kurze Vergleich der Cloud-Dienste von AWS, Azure und Google   |
| 26.05.2022 | Erstellung von Azure-Konto, Installation von Azure CLI, Erstellung von Ressource-Gruppen   |
| 02.06.2022 | Umsetzung von Azure CosmosDB und Azure Service Bus  |
| 09.06.2022 | Umsetzung von Azure Container Registry, Veröffentlichung des Microservices im Azure Kubernetes Service  |
| 16.06.2022 | Erstellung von Kubernetes Secrets, Umsetzung von Healt-Check  |
| 23.06.2022 | Umsetzung von Azure Key Vault und API-Gateway, Aktivieren von https- und tls-Terminierung, Übertragung des Front-Ends im Azure |
| 30.06.2022 | Bescreibung des Prozesses in GitHub, Abgabe |
