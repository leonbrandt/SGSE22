# Identity
Identity libraries used by SchüCal Economy services

## Create and publish package
```powershell
$version="1.0.12"
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

docker build --secret id=GH_OWNER --secret id=GH_PAT -t "$appname.azurecr.io/play.identity:$version" .
docker build --secret id=GH_OWNER --secret id=GH_PAT -t play.identity:$version .
```

## Run the Docker image
```powershell
$adminPass="[PASSWORD HERE]"
$cosmosDbConnString="[CONN STRING HERE]" - #from Azure
$serviceBusConnString="[CONN STRING HERE]" - #from Azure

#for local connection with RabbitMQ
docker run -it --rm -p 5002:5002 --name identity -e MongoDbSettings__Host=mongo -e RabbitMQSettings__Host=rabbitmq -e IdentitySettings__AdminUserPassword=$adminPass --network infrastructure_default play.identity:$version

#for connection with Azure Service Bus "SERVICEBUS" or with RabbitMQ "RABBITMQ"
docker run -it --rm -p 5002:5002 --name identity -e MongoDbSettings__ConnectionString=$cosmosDbConnString -e ServiceBusSettings__ConnectionString=$serviceBusConnString -e ServiceSettings__MessageBroker="SERVICEBUS" -e IdentitySettings__AdminUserPassword=$adminPass play.identity:$version
```

## Publishing the Docker image to Azure Contrainer Registry
```powershell
az acr login --name $appname
az login --scope https://management.core.windows.net//.default

docker push "$appname.azurecr.io/play.identity:$version"
```

## Create the Kubernetes namespace
```powershell
$namespace="identity"

kubectl create namespace $namespace
```

## Create the Kubernetes secrets
```powershell

kubectl create secret generic identity-secrets --from-literal=cosmosdb-connectionstring=$cosmosDbConnString --from-literal=servicebus-connectionstring=$serviceBusConnString --from-literal=admin-password=$adminPass -n $namespace

kubectl get secrets -n $namespace
```

## Create the Kubernetes pod
```powershell

kubectl apply -f .\kubernetes\identity.yaml -n $namespace

kubectl get pods -n $namespace
kubectl describe pod [name] -n $namespace
kubectl logs [name] -n $namespace
kubectl get services -n $namespace
kubectl get events -n $namespace
```

## Create Azure Active Directory (AAD) the pod managed identity
```powershell
$IDENTITY_RESOURCE_ID=az identity show -g $appname -n $namespace --query id -otsv

az identity create --resource-group $appname --name $namespace
az aks pod-identity add --resource-group $appname --cluster-name $appname --namespace $namespace --name $namespace --identity-resource-id $IDENTITY_RESOURCE_ID

kubectl get azureidentity -n $namespace -o yaml
```

## Grant access to Key Vault secrets
```powershell
$IDENTITY_CLIENT_ID=az identity show -g $appname -n $namespace --query clientId -otsv

az keyvault set-policy -n $appname --secret-permissions get list --spn $IDENTITY_CLIENT_ID
```

## Create the signing certificate
```powershell
kubectl apply -f .\kubernetes\singning-cer.yaml -n $namespace

kubectl get secret signing-cert -n $namespace -o yaml
```