# Catalog.Contracts
Catalog.Contracts libraries used by SchüCal Economy services

## Create and publish package
```powershell
$version="1.0.3"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Catalog.Contracts\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Catalog -o ..\packages

dotnet nuget push ..\packages\Catalog.Contracts.$version.nupkg --api-key $gh_pat --source "github"
```