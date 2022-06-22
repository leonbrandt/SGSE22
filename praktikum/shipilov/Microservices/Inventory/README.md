# Inventory.Contracts
Inventory.Contracts libraries used by SchüCal Economy services

## Create and publish package
```powershell
$version="1.0.6"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Inventory.Contracts\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Inventory -o ..\packages

dotnet nuget push ..\packages\Inventory.Contracts.$version.nupkg --api-key $gh_pat --source "github"
```

## Build the docker image
```powershell
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"
$appname="shopeconomy"

docker build --secret id=GH_OWNER --secret id=GH_PAT -t "$appname.azurecr.io/inventory:$version" .
```

## Run the docker image
```powershell
$adminPass="[PASSWORD HERE]"
$cosmosDbConnectionString="[CONN STRING HERE]" - #from Azure
$serviceBusConnectionString="[CONN STRING HERE]" - #from Azure

#for local connection with RabbitMQ
docker run -it --rm -p 5004:5004 --name inventory -e MongoDbSettings__ConnectionString=$cosmosDbConnectionString -e ServiceBusSettings__ConnectionString=$serviceBusConnectionString -e ServiceSettings__MessageBroker="SERVICEBUS" --network infrastructure_default inventory:$version
```

## Publishing the Docker image to Azure Contrainer Registry
```powershell
$appname="shopeconomy"

az acr login --name $appname
docker push "$appname.azurecr.io/inventory:$version"
```

## Create the Kubernetes namespace
```powershell
$namespace="inventory"

kubectl create namespace $namespace
```

## Create Azure Active Directory (AAD) the pod managed identity
```powershell
$INVENTORY_RESOURCE_ID=az identity show -g $appname -n $namespace --query id -otsv

az identity create --resource-group $appname --name $namespace
az aks pod-identity add --resource-group $appname --cluster-name $appname --namespace $namespace --name $namespace --identity-resource-id $INVENTORY_RESOURCE_ID

kubectl get azureidentity -n $namespace -o yaml
```

## Grant access to Key Vault secrets
```powershell
$INVENTORY_CLIENT_ID=az identity show -g $appname -n $namespace --query clientId -otsv

az keyvault set-policy -n $appname --secret-permissions get list --spn $INVENTORY_CLIENT_ID
```