# Play.Identity.Contracts
Play.Identity.Contracts libraries used by SchüCal Economy services

## Create and publish package
```powershell
$version="1.0.5"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Play.Identity.Contracts\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Play.Identity -o ..\packages

dotnet nuget push ..\packages\Play.Identity.Contracts.$version.nupkg --api-key $gh_pat --source "github"
```

## Azure other commands
```powershell
az login
az account show
```

## Build the Docker image
```powershell
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"
$appname="shopeconomy"

docker build --secret id=GH_OWNER --secret id=GH_PAT -t "shopeconomy.azurecr.io/play.identity:$version" .
```

## Run the Docker image
```powershell
$adminPass="[PASSWORD HERE]"
$cosmosDbConnectionString="[CONN STRING HERE]" - from Azure
$serviceBusConnectionString="[CONN STRING HERE]" - from Azure

//for connection with RabbitMQ
docker run -it --rm -p 5002:5002 --name identity -e MongoDbSettings__Host=mongo -e RabbitMQSettings__Host=rabbitmq -e IdentitySettings__AdminUserPassword=$adminPass --network infrastructure_default play.identity:$version

//for connection with Azure Service Bus "SERVICEBUS" or with RabbitMQ "RABBITMQ"
docker run -it --rm -p 5002:5002 --name identity -e MongoDbSettings__ConnectionString=$cosmosDbConnectionString -e ServiceBusSettings__ConnectionString=$serviceBusConnectionString -e ServiceSettings__MessageBroker="SERVICEBUS" -e IdentitySettings__AdminUserPassword=$adminPass play.identity:$version
```

## Publishing the Docker image
```powershell
az acr login --name $appname

docker push "shopeconomy.azurecr.io/play.identity:$version"
```

## Create the Kubernetes namespace
```powershell
$namespace="identity"

kubectl create namespace $namespace
```

## Create the Kubernetes secrets
```powershell

kubectl create secret generic identity-secrets --from-literal=cosmosdb-connectionstring=$cosmosDbConnectionString --from-literal=servicebus-connectionstring=$serviceBusConnectionString --from-literal=admin-password=$adminPass -n $namespace

kubectl get secrets -n $namespace
```