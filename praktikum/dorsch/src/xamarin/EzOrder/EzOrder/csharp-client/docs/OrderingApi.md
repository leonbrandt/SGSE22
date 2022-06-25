# IO.Swagger.Api.OrderingApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteOrder**](OrderingApi.md#deleteorder) | **DELETE** /ordering/{orderId} | Delete purchase order by ID
[**GetOrderById**](OrderingApi.md#getorderbyid) | **GET** /ordering/{orderId} | Find purchase order by ID
[**GetOrders**](OrderingApi.md#getorders) | **GET** /ordering | Get all orders
[**PlaceOrder**](OrderingApi.md#placeorder) | **POST** /ordering | Place an order


<a name="deleteorder"></a>
# **DeleteOrder**
> void DeleteOrder (long? orderId)

Delete purchase order by ID

For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeleteOrderExample
    {
        public void main()
        {
            var apiInstance = new OrderingApi();
            var orderId = 789;  // long? | ID of the order that needs to be deleted

            try
            {
                // Delete purchase order by ID
                apiInstance.DeleteOrder(orderId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OrderingApi.DeleteOrder: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **long?**| ID of the order that needs to be deleted | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getorderbyid"></a>
# **GetOrderById**
> Ordering GetOrderById (long? orderId)

Find purchase order by ID

For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetOrderByIdExample
    {
        public void main()
        {
            var apiInstance = new OrderingApi();
            var orderId = 789;  // long? | ID of pet that needs to be fetched

            try
            {
                // Find purchase order by ID
                Ordering result = apiInstance.GetOrderById(orderId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OrderingApi.GetOrderById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **long?**| ID of pet that needs to be fetched | 

### Return type

[**Ordering**](Ordering.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getorders"></a>
# **GetOrders**
> List<Ordering> GetOrders ()

Get all orders

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetOrdersExample
    {
        public void main()
        {
            var apiInstance = new OrderingApi();

            try
            {
                // Get all orders
                List&lt;Ordering&gt; result = apiInstance.GetOrders();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OrderingApi.GetOrders: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Ordering>**](Ordering.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="placeorder"></a>
# **PlaceOrder**
> Ordering PlaceOrder (Ordering body)

Place an order

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class PlaceOrderExample
    {
        public void main()
        {
            var apiInstance = new OrderingApi();
            var body = new Ordering(); // Ordering | order placed

            try
            {
                // Place an order
                Ordering result = apiInstance.PlaceOrder(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OrderingApi.PlaceOrder: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Ordering**](Ordering.md)| order placed | 

### Return type

[**Ordering**](Ordering.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

