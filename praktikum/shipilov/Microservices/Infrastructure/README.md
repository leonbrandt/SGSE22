# Infrastructure
SchüCal Economy Infrastructure components

## Add the GitHub package source
```powershell
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet nuget add source --username USERNAME --password $gh_pat --store-password-in-clear-text --name github "https://nuget.pkg.github.com/$owner/index.json"
```

## Creating the Azure resource group
```powershell

$appname="SchüCal_Economy"
az group create --name $appname --location eastus

```