# Trading
Trading libraries used by SchüCal Economy services

## Build the docker image
```powershell
$version="1.0.1"
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"
docker build --secret id=GH_OWNER --secret id=GH_PAT -t "shopeconomy.azurecr.io/trading:$version" .
```

## Run the docker image
```powershell
$cosmosDbConnectionString="[CONN STRING HERE]" - from Azure
$serviceBusConnectionString="[CONN STRING HERE]" - from Azure
docker run -it --rm -p 5006:5006 --name trading -e MongoDbSettings__ConnectionString=$cosmosDbConnectionString -e ServiceBusSettings__ConnectionString=$serviceBusConnectionString -e ServiceSettings__MessageBroker="SERVICEBUS" --network infrastructure_default trading:$version
```

## Publishing the Docker image
```powershell
$appname="shopeconomy"

az acr login --name $appname
docker push "shopeconomy.azurecr.io/trading:$version"
```