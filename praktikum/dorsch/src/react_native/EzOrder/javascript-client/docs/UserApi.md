# EzOrderBackend.UserApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{userid} | Delete user
[**getUserByName**](UserApi.md#getUserByName) | **GET** /user/{userid} | Get user by user id
[**getUsers**](UserApi.md#getUsers) | **GET** /user | Get all users
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{userid} | Updated user


<a name="createUser"></a>
# **createUser**
> createUser(body)

Create user

This can only be done by the logged in user.

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.UserApi();

var body = new EzOrderBackend.User(); // User | Created user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Created user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userid)

Delete user

This can only be done by the logged in user.

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.UserApi();

var userid = "userid_example"; // String | The id that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(userid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**| The id that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getUserByName"></a>
# **getUserByName**
> User getUserByName(userid)

Get user by user id



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.UserApi();

var userid = "userid_example"; // String | The user id that needs to be fetched. Use 1 for testing.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByName(userid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**| The user id that needs to be fetched. Use 1 for testing. | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [User] getUsers()

Get all users



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> updateUser(userid, body)

Updated user

This can only be done by the logged in user.

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.UserApi();

var userid = "userid_example"; // String | id that needs to be updated

var body = new EzOrderBackend.User(); // User | Updated user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUser(userid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**| id that needs to be updated | 
 **body** | [**User**](User.md)| Updated user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

