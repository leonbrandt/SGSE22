# Common
Common libraries used by SchüCal Economy services

## Create and publish package
```powershell
$version="1.0.9"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Common\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Common -o ..\packages

dotnet nuget push ..\packages\Common.$version.nupkg --api-key $gh_pat --source "github"
```