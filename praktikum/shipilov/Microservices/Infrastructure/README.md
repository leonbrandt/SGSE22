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

## Creating the Azure Key Vault
```powershell
az keyvault create -n $appname -g $appname
```

## Installing Emissary-ingress
```powershell
helm repo add datawire https://app.getambassador.io
helm repo update
helm repo list

kubectl apply -f https://app.getambassador.io/yaml/emissary/2.3.1/emissary-crds.yaml
kubectl wait --timeout=90s --for=condition=available deployment emissary-apiext -n emissary-system

$namespace="emissary"
helm install emissary-ingress datawire/emissary-ingress --set service.annotations."service\.beta\.kubernetes\.io/azure-dns-label-name"=$appname -n $namespace --create-namespace

kubectl rollout status deployment/emissary-ingress -n $namespace -w

kubectl get pods -n $namespace
kubectl get service emissary-ingress -n $namespace
```

## Configuring Emissary-ingress routing
```powershell
kubectl apply -f .\emissary-ingress\listener.yaml -n $namespace
kubectl apply -f .\emissary-ingress\mappings.yaml -n $namespace
```