# EzOrderBackend.ProductApi

All URIs are relative to *http://192.168.178.44:3000/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add**](ProductApi.md#add) | **POST** /product | Add a new product
[**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /product/{productID} | Deletes a product
[**getProductById**](ProductApi.md#getProductById) | **GET** /product/{productID} | Find product by ID
[**getProducts**](ProductApi.md#getProducts) | **GET** /product | Get all products
[**updateProduct**](ProductApi.md#updateProduct) | **PUT** /product | Update an existing product
[**updateProductWithForm**](ProductApi.md#updateProductWithForm) | **POST** /product/{productID} | Updates a product with form data


<a name="add"></a>
# **add**
> add(body)

Add a new product



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.ProductApi();

var body = new EzOrderBackend.Product(); // Product | product object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.add(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| product object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(productID)

Deletes a product



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.ProductApi();

var productID = 789; // Number | product id to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProduct(productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **Number**| product id to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductById"></a>
# **getProductById**
> Product getProductById(productID)

Find product by ID

Returns a single product

### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.ProductApi();

var productID = 789; // Number | ID of product to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductById(productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **Number**| ID of product to return | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProducts"></a>
# **getProducts**
> [Product] getProducts()

Get all products



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.ProductApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProducts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> updateProduct(body)

Update an existing product



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.ProductApi();

var body = new EzOrderBackend.Product(); // Product | Product object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| Product object that needs to be added | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductWithForm"></a>
# **updateProductWithForm**
> updateProductWithForm(productID, opts)

Updates a product with form data



### Example
```javascript
var EzOrderBackend = require('ez_order_backend');

var apiInstance = new EzOrderBackend.ProductApi();

var productID = 789; // Number | ID of product that needs to be updated

var opts = { 
  'name': "name_example", // String | Updated name of the product
  'status': "status_example" // String | Updated status of the product
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProductWithForm(productID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **Number**| ID of product that needs to be updated | 
 **name** | **String**| Updated name of the product | [optional] 
 **status** | **String**| Updated status of the product | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

