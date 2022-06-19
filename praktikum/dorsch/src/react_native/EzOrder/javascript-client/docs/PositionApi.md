# EzOrderBackend.PositionApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePosition**](PositionApi.md#deletePosition) | **DELETE** /position/{positionID} | Deletes a position
[**getPositionById**](PositionApi.md#getPositionById) | **GET** /position/{positionID} | Find position by ID
[**getPositions**](PositionApi.md#getPositions) | **GET** /position | Get all positions
[**placePosition**](PositionApi.md#placePosition) | **POST** /position | Place an position
[**updatePositionWithForm**](PositionApi.md#updatePositionWithForm) | **POST** /position/{positionID} | Updates a position with form data


<a name="deletePosition"></a>
# **deletePosition**
> deletePosition(positionID)

Deletes a position



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.PositionApi();

var positionID = 789; // Number | position id to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePosition(positionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionID** | **Number**| position id to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPositionById"></a>
# **getPositionById**
> Position getPositionById(positionID)

Find position by ID

Returns a single position

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.PositionApi();

var positionID = 789; // Number | ID of position to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPositionById(positionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionID** | **Number**| ID of position to return | 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPositions"></a>
# **getPositions**
> [Position] getPositions()

Get all positions



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.PositionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPositions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Position]**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="placePosition"></a>
# **placePosition**
> Position placePosition(body)

Place an position



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.PositionApi();

var body = new EzOrderBackend.Position(); // Position | position placed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.placePosition(body, callback);
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

<a name="updatePositionWithForm"></a>
# **updatePositionWithForm**
> updatePositionWithForm(positionID, opts)

Updates a position with form data



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.PositionApi();

var positionID = 789; // Number | ID of position that needs to be updated

var opts = { 
  'name': "name_example", // String | Updated name of the position
  'status': "status_example" // String | Updated status of the position
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePositionWithForm(positionID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionID** | **Number**| ID of position that needs to be updated | 
 **name** | **String**| Updated name of the position | [optional] 
 **status** | **String**| Updated status of the position | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

