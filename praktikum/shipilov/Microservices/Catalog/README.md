# Catalog
Catalog libraries used by SchüCal Economy services

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/masterarbeitschueco/Catalog.git
git push -u origin main

## Create and publish NuGet package Catalog.Contracts
```powershell
$version="1.0.5"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Catalog.Contracts\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Catalog -o ..\packages

dotnet nuget push ..\packages\Catalog.Contracts.$version.nupkg --api-key $gh_pat --source "github"
```

## Build the docker image
```powershell
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"
$appname="shopeconomy"

docker build --secret id=GH_OWNER --secret id=GH_PAT -t "$appname.azurecr.io/catalog:$version" .
```

## Run the docker image
```powershell
$adminPass="[PASSWORD HERE]"
$cosmosDbConnectionString="[CONN STRING HERE]" - #from Azure
$serviceBusConnectionString="[CONN STRING HERE]" - #from Azure

#for local connection with RabbitMQ
docker run -it --rm -p 5000:5000 --name catalog -e MongoDbSettings__Host=mongo -e RabbitMQSettings__Host=rabbitmq --network infrastructure_default catalog:$version

#for connection with Azure Service Bus "SERVICEBUS" or with RabbitMQ "RABBITMQ"
docker run -it --rm -p 5000:5000 --name catalog -e MongoDbSettings__ConnectionString=$cosmosDbConnectionString -e ServiceBusSettings__ConnectionString=$serviceBusConnectionString -e ServiceSettings__MessageBroker="SERVICEBUS" --network infrastructure_default catalog:$version
```

## Publishing the Docker image to Azure Contrainer Registry
```powershell
$appname="shopeconomy"

az acr login --name $appname
docker push "$appname.azurecr.io/catalog:$version"
```

## Create the Kubernetes namespace
```powershell
$namespace="catalog"

kubectl create namespace $namespace
```

## Create Azure Active Directory (AAD) the pod managed identity
```powershell
$CATALOG_RESOURCE_ID=az identity show -g $appname -n $namespace --query id -otsv

az identity create --resource-group $appname --name $namespace
az aks pod-identity add --resource-group $appname --cluster-name $appname --namespace $namespace --name $namespace --identity-resource-id $CATALOG_RESOURCE_ID

kubectl get azureidentity -n $namespace -o yaml
```

## Grant access to Key Vault secrets
```powershell
$CATALOG_CLIENT_ID=az identity show -g $appname -n $namespace --query clientId -otsv

az keyvault set-policy -n $appname --secret-permissions get list --spn $CATALOG_CLIENT_ID
```