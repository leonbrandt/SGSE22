# IO.Swagger.Api.ProductApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Add**](ProductApi.md#add) | **POST** /product | Add a new product
[**DeleteProduct**](ProductApi.md#deleteproduct) | **DELETE** /product/{productID} | Deletes a product
[**GetProductById**](ProductApi.md#getproductbyid) | **GET** /product/{productID} | Find product by ID
[**GetProducts**](ProductApi.md#getproducts) | **GET** /product | Get all products
[**UpdateProduct**](ProductApi.md#updateproduct) | **PUT** /product | Update an existing product
[**UpdateProductWithForm**](ProductApi.md#updateproductwithform) | **POST** /product/{productID} | Updates a product with form data


<a name="add"></a>
# **Add**
> void Add (Product body)

Add a new product

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AddExample
    {
        public void main()
        {
            var apiInstance = new ProductApi();
            var body = new Product(); // Product | product object that needs to be added to the store

            try
            {
                // Add a new product
                apiInstance.Add(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ProductApi.Add: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| product object that needs to be added to the store | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deleteproduct"></a>
# **DeleteProduct**
> void DeleteProduct (long? productID)

Deletes a product

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeleteProductExample
    {
        public void main()
        {
            var apiInstance = new ProductApi();
            var productID = 789;  // long? | product id to delete

            try
            {
                // Deletes a product
                apiInstance.DeleteProduct(productID);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ProductApi.DeleteProduct: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **long?**| product id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getproductbyid"></a>
# **GetProductById**
> Product GetProductById (long? productID)

Find product by ID

Returns a single product

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetProductByIdExample
    {
        public void main()
        {
            var apiInstance = new ProductApi();
            var productID = 789;  // long? | ID of product to return

            try
            {
                // Find product by ID
                Product result = apiInstance.GetProductById(productID);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ProductApi.GetProductById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **long?**| ID of product to return | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getproducts"></a>
# **GetProducts**
> List<Product> GetProducts ()

Get all products

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetProductsExample
    {
        public void main()
        {
            var apiInstance = new ProductApi();

            try
            {
                // Get all products
                List&lt;Product&gt; result = apiInstance.GetProducts();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ProductApi.GetProducts: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Product>**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updateproduct"></a>
# **UpdateProduct**
> void UpdateProduct (Product body)

Update an existing product

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UpdateProductExample
    {
        public void main()
        {
            var apiInstance = new ProductApi();
            var body = new Product(); // Product | Product object that needs to be added

            try
            {
                // Update an existing product
                apiInstance.UpdateProduct(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ProductApi.UpdateProduct: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| Product object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updateproductwithform"></a>
# **UpdateProductWithForm**
> void UpdateProductWithForm (long? productID, string name = null, string status = null)

Updates a product with form data

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UpdateProductWithFormExample
    {
        public void main()
        {
            var apiInstance = new ProductApi();
            var productID = 789;  // long? | ID of product that needs to be updated
            var name = name_example;  // string | Updated name of the product (optional) 
            var status = status_example;  // string | Updated status of the product (optional) 

            try
            {
                // Updates a product with form data
                apiInstance.UpdateProductWithForm(productID, name, status);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ProductApi.UpdateProductWithForm: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **long?**| ID of product that needs to be updated | 
 **name** | **string**| Updated name of the product | [optional] 
 **status** | **string**| Updated status of the product | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

