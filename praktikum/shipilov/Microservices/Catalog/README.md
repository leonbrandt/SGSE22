# Catalog
Catalog libraries used by SchüCal Economy services

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/masterarbeitschueco/Catalog.git
git push -u origin main

## Create and publish NuGet package Catalog.Contracts
```powershell
$version="1.0.3"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Catalog.Contracts\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Catalog -o ..\packages

dotnet nuget push ..\packages\Catalog.Contracts.$version.nupkg --api-key $gh_pat --source "github"
```

## Build the docker image
```powershell
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"
docker build --secret id=GH_OWNER --secret id=GH_PAT -t catalog:$version .
```

## Run the docker image
```powershell
docker run -it --rm -p 5000:5000 --name catalog -e MongoDbSettings__Host=mongo -e RabbitMQSettings__Host=rabbitmq --network infrastructure_default catalog:$version
```