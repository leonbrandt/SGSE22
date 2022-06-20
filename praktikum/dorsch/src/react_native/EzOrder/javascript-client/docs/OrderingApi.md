# EzOrderBackend.OrderingApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrder**](OrderingApi.md#deleteOrder) | **DELETE** /ordering/{orderId} | Delete purchase order by ID
[**getOrderById**](OrderingApi.md#getOrderById) | **GET** /ordering/{orderId} | Find purchase order by ID
[**getOrders**](OrderingApi.md#getOrders) | **GET** /ordering | Get all orders
[**placeOrder**](OrderingApi.md#placeOrder) | **POST** /ordering | Place an order


<a name="deleteOrder"></a>
# **deleteOrder**
> deleteOrder(orderId)

Delete purchase order by ID

For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.OrderingApi();

var orderId = 789; // Number | ID of the order that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrder(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| ID of the order that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderById"></a>
# **getOrderById**
> Ordering getOrderById(orderId)

Find purchase order by ID

For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.OrderingApi();

var orderId = 789; // Number | ID of pet that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderById(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| ID of pet that needs to be fetched | 

### Return type

[**Ordering**](Ordering.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrders"></a>
# **getOrders**
> [Ordering] getOrders()

Get all orders



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.OrderingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrders(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ordering]**](Ordering.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="placeOrder"></a>
# **placeOrder**
> Ordering placeOrder(body)

Place an order



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.OrderingApi();

var body = new EzOrderBackend.Ordering(); // Ordering | order placed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.placeOrder(body, callback);
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

