# IO.Swagger.Api.PositionApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeletePosition**](PositionApi.md#deleteposition) | **DELETE** /position/{positionID} | Deletes a position
[**GetPositionById**](PositionApi.md#getpositionbyid) | **GET** /position/{positionID} | Find position by ID
[**GetPositions**](PositionApi.md#getpositions) | **GET** /position | Get all positions
[**PlacePosition**](PositionApi.md#placeposition) | **POST** /position | Place an position
[**UpdatePositionWithForm**](PositionApi.md#updatepositionwithform) | **POST** /position/{positionID} | Updates a position with form data


<a name="deleteposition"></a>
# **DeletePosition**
> void DeletePosition (long? positionID)

Deletes a position

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeletePositionExample
    {
        public void main()
        {
            var apiInstance = new PositionApi();
            var positionID = 789;  // long? | position id to delete

            try
            {
                // Deletes a position
                apiInstance.DeletePosition(positionID);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PositionApi.DeletePosition: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionID** | **long?**| position id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getpositionbyid"></a>
# **GetPositionById**
> Position GetPositionById (long? positionID)

Find position by ID

Returns a single position

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetPositionByIdExample
    {
        public void main()
        {
            var apiInstance = new PositionApi();
            var positionID = 789;  // long? | ID of position to return

            try
            {
                // Find position by ID
                Position result = apiInstance.GetPositionById(positionID);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PositionApi.GetPositionById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionID** | **long?**| ID of position to return | 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getpositions"></a>
# **GetPositions**
> List<Position> GetPositions ()

Get all positions

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetPositionsExample
    {
        public void main()
        {
            var apiInstance = new PositionApi();

            try
            {
                // Get all positions
                List&lt;Position&gt; result = apiInstance.GetPositions();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PositionApi.GetPositions: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Position>**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="placeposition"></a>
# **PlacePosition**
> Position PlacePosition (Position body)

Place an position

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class PlacePositionExample
    {
        public void main()
        {
            var apiInstance = new PositionApi();
            var body = new Position(); // Position | position placed

            try
            {
                // Place an position
                Position result = apiInstance.PlacePosition(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PositionApi.PlacePosition: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Position**](Position.md)| position placed | 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatepositionwithform"></a>
# **UpdatePositionWithForm**
> void UpdatePositionWithForm (long? positionID, string name = null, string status = null)

Updates a position with form data

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UpdatePositionWithFormExample
    {
        public void main()
        {
            var apiInstance = new PositionApi();
            var positionID = 789;  // long? | ID of position that needs to be updated
            var name = name_example;  // string | Updated name of the position (optional) 
            var status = status_example;  // string | Updated status of the position (optional) 

            try
            {
                // Updates a position with form data
                apiInstance.UpdatePositionWithForm(positionID, name, status);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PositionApi.UpdatePositionWithForm: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionID** | **long?**| ID of position that needs to be updated | 
 **name** | **string**| Updated name of the position | [optional] 
 **status** | **string**| Updated status of the position | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

