# Infrastructure
SchüCal Economy Infrastructure components

## Add the GitHub package source
```powershell
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet nuget add source --username USERNAME --password $gh_pat --store-password-in-clear-text --name github "https://nuget.pkg.github.com/$owner/index.json"
```

## Azure other commands
```powershell
az login
az account show
```

## Creating the Azure resource group
```powershell
$appname="shopeconomy"
az group create --name $appname --location eastus
```

## Creating the Cosmos DB account
```powershell
az cosmosdb create --name $appname --resource-group $appname --kind MongoDB --enable-free-tier 
```

## Creating the Service Bus namespace
```powershell
az servicebus namespace create --name $appname --resource-group $appname --sku Standard
```

## Creating the Container Registry
```powershell
az acr create --name $appname --resource-group $appname --sku Basic
```

## Creating the Azure Kubernetes Service (AKS) Cluster
```powershell
az feature register --name EnablePodIdentityPreview --namespace Microsoft.ContainerService
az extension add --name aks-preview

az aks create -n $appname -g $appname --node-vm-size standard_a2_v2 --node-count 2 --attach-acr $appname --enable-pod-identity --network-plugin azure --generate-ssh-keys --location australiacentral

az aks get-credentials --name $appname --resource-group $appname
```