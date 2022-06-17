# EzOrderBackend.CategoryApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCategory**](CategoryApi.md#addCategory) | **POST** /category | Add a new category
[**deleteCategory**](CategoryApi.md#deleteCategory) | **DELETE** /category/{catID} | Deletes a category
[**getCategories**](CategoryApi.md#getCategories) | **GET** /category | Get all categories
[**getCategoryById**](CategoryApi.md#getCategoryById) | **GET** /category/{catID} | Find category by ID
[**updateCategory**](CategoryApi.md#updateCategory) | **PUT** /category | Update an existing category
[**updateCategoryWithForm**](CategoryApi.md#updateCategoryWithForm) | **POST** /category/{catID} | Updates a category with form data


<a name="addCategory"></a>
# **addCategory**
> addCategory(body)

Add a new category



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.CategoryApi();

var body = new EzOrderBackend.Category(); // Category | category object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Category**](Category.md)| category object that needs to be added | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCategory"></a>
# **deleteCategory**
> deleteCategory(catID)

Deletes a category



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.CategoryApi();

var catID = 789; // Number | category id to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCategory(catID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catID** | **Number**| category id to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategories"></a>
# **getCategories**
> [Category] getCategories()

Get all categories



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.CategoryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategories(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Category]**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoryById"></a>
# **getCategoryById**
> Category getCategoryById(catID)

Find category by ID

Returns a single category

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.CategoryApi();

var catID = 789; // Number | ID of category to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategoryById(catID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catID** | **Number**| ID of category to return | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCategory"></a>
# **updateCategory**
> updateCategory(body)

Update an existing category



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.CategoryApi();

var body = new EzOrderBackend.Category(); // Category | Category object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Category**](Category.md)| Category object that needs to be added | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCategoryWithForm"></a>
# **updateCategoryWithForm**
> updateCategoryWithForm(catID, opts)

Updates a category with form data



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.CategoryApi();

var catID = 789; // Number | ID of category that needs to be updated

var opts = { 
  'name': "name_example", // String | Updated name of the category
  'status': "status_example" // String | Updated status of the category
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCategoryWithForm(catID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catID** | **Number**| ID of category that needs to be updated | 
 **name** | **String**| Updated name of the category | [optional] 
 **status** | **String**| Updated status of the category | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

