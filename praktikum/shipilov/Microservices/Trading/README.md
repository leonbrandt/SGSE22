# Trading
Trading libraries used by SchüCal Economy services

## Build the docker image
```powershell
$version="1.0.2"
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"
$appname="shopeconomy"

docker build --secret id=GH_OWNER --secret id=GH_PAT -t "$appname.azurecr.io/trading:$version" .
```

## Run the docker image
```powershell
$adminPass="[PASSWORD HERE]"
$cosmosDbConnectionString="[CONN STRING HERE]" - #from Azure
$serviceBusConnectionString="[CONN STRING HERE]" - #from Azure

#for local connection with RabbitMQ
docker run -it --rm -p 5006:5006 --name trading -e MongoDbSettings__ConnectionString=$cosmosDbConnectionString -e ServiceBusSettings__ConnectionString=$serviceBusConnectionString -e ServiceSettings__MessageBroker="SERVICEBUS" --network infrastructure_default trading:$version
```

## Publishing the Docker image to Azure Contrainer Registry
```powershell
$appname="shopeconomy"

az acr login --name $appname
docker push "$appname.azurecr.io/trading:$version"
```

## Create the Kubernetes namespace
```powershell
$namespace="trading"

kubectl create namespace $namespace
```

## Create Azure Active Directory (AAD) the pod managed identity
```powershell
$TRADING_RESOURCE_ID=az identity show -g $appname -n $namespace --query id -otsv

az identity create --resource-group $appname --name $namespace
az aks pod-identity add --resource-group $appname --cluster-name $appname --namespace $namespace --name $namespace --identity-resource-id $TRADING_RESOURCE_ID

kubectl get azureidentity -n $namespace -o yaml
```

## Grant access to Key Vault secrets
```powershell
$TRADING_CLIENT_ID=az identity show -g $appname -n $namespace --query clientId -otsv

az keyvault set-policy -n $appname --secret-permissions get list --spn $TRADING_CLIENT_ID
```

## Creating the Kubernetes resources
```powershell
kubectl apply -f .\kubernetes\trading.yaml -n $namespace

kubectl get pods -n $namespace
kubectl describe pod [name] -n $namespace
kubectl logs [name] -n $namespace
kubectl get services -n $namespace
kubectl get events -n $namespace
```