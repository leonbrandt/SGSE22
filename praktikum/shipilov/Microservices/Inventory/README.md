# Inventory.Contracts
Inventory.Contracts libraries used by SchüCal Economy services

## Create and publish package
```powershell
$version="1.0.4"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Inventory.Contracts\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Inventory -o ..\packages

dotnet nuget push ..\packages\Inventory.Contracts.$version.nupkg --api-key $gh_pat --source "github"
```

## Build the docker image
```powershell
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"
docker build --secret id=GH_OWNER --secret id=GH_PAT -t inventory:$version .
```

## Run the docker image
```powershell
docker run -it --rm -p 5004:5004 --name inventory -e MongoDbSettings__Host=mongo -e RabbitMQSettings__Host=rabbitmq --network infrastructure_default inventory:$version
```