# IO.Swagger.Api.CategoryApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddCategory**](CategoryApi.md#addcategory) | **POST** /category | Add a new category
[**DeleteCategory**](CategoryApi.md#deletecategory) | **DELETE** /category/{catID} | Deletes a category
[**GetCategories**](CategoryApi.md#getcategories) | **GET** /category | Get all categories
[**GetCategoryById**](CategoryApi.md#getcategorybyid) | **GET** /category/{catID} | Find category by ID
[**UpdateCategory**](CategoryApi.md#updatecategory) | **PUT** /category | Update an existing category
[**UpdateCategoryWithForm**](CategoryApi.md#updatecategorywithform) | **POST** /category/{catID} | Updates a category with form data


<a name="addcategory"></a>
# **AddCategory**
> void AddCategory (Category body)

Add a new category

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AddCategoryExample
    {
        public void main()
        {
            var apiInstance = new CategoryApi();
            var body = new Category(); // Category | category object that needs to be added

            try
            {
                // Add a new category
                apiInstance.AddCategory(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.AddCategory: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Category**](Category.md)| category object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecategory"></a>
# **DeleteCategory**
> void DeleteCategory (long? catID)

Deletes a category

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeleteCategoryExample
    {
        public void main()
        {
            var apiInstance = new CategoryApi();
            var catID = 789;  // long? | category id to delete

            try
            {
                // Deletes a category
                apiInstance.DeleteCategory(catID);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.DeleteCategory: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catID** | **long?**| category id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcategories"></a>
# **GetCategories**
> List<Category> GetCategories ()

Get all categories

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetCategoriesExample
    {
        public void main()
        {
            var apiInstance = new CategoryApi();

            try
            {
                // Get all categories
                List&lt;Category&gt; result = apiInstance.GetCategories();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.GetCategories: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Category>**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcategorybyid"></a>
# **GetCategoryById**
> Category GetCategoryById (long? catID)

Find category by ID

Returns a single category

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetCategoryByIdExample
    {
        public void main()
        {
            var apiInstance = new CategoryApi();
            var catID = 789;  // long? | ID of category to return

            try
            {
                // Find category by ID
                Category result = apiInstance.GetCategoryById(catID);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.GetCategoryById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catID** | **long?**| ID of category to return | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecategory"></a>
# **UpdateCategory**
> void UpdateCategory (Category body)

Update an existing category

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UpdateCategoryExample
    {
        public void main()
        {
            var apiInstance = new CategoryApi();
            var body = new Category(); // Category | Category object that needs to be added

            try
            {
                // Update an existing category
                apiInstance.UpdateCategory(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.UpdateCategory: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Category**](Category.md)| Category object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecategorywithform"></a>
# **UpdateCategoryWithForm**
> void UpdateCategoryWithForm (long? catID, string name = null, string status = null)

Updates a category with form data

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UpdateCategoryWithFormExample
    {
        public void main()
        {
            var apiInstance = new CategoryApi();
            var catID = 789;  // long? | ID of category that needs to be updated
            var name = name_example;  // string | Updated name of the category (optional) 
            var status = status_example;  // string | Updated status of the category (optional) 

            try
            {
                // Updates a category with form data
                apiInstance.UpdateCategoryWithForm(catID, name, status);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.UpdateCategoryWithForm: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catID** | **long?**| ID of category that needs to be updated | 
 **name** | **string**| Updated name of the category | [optional] 
 **status** | **string**| Updated status of the category | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

