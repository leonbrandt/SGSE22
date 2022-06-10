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