CREATE SCHEMA ezorder;
USE ezorder;

DROP TABLE IF EXISTS USER;
CREATE TABLE USER
(
	userID integer NOT NULL AUTO_INCREMENT,
	lastname text NOT NULL,
	firstname text NOT NULL,
	email text NOT NULL,
	phone text NOT NULL,
	authToken text NOT NULL,
	street text,
	zip text,
	city text,
	company text,
	department text,
	PRIMARY KEY(userID)
);

DROP TABLE IF EXISTS CATEGORY;
CREATE TABLE CATEGORY
(
	catID integer NOT NULL AUTO_INCREMENT,
	name text NOT NULL,
	isBookable boolean DEFAULT FALSE,
	bookableChkText text,
	PRIMARY KEY(catID)
);

DROP TABLE IF EXISTS PRODUCT;
CREATE TABLE PRODUCT
(
	productID integer NOT NULL AUTO_INCREMENT,
	name text NOT NULL,
	maxAmount integer NOT NULL,
	packDescription text NOT NULL,
	category_catID integer NOT NULL,
	imgURL text,
	PRIMARY KEY(productID),
	FOREIGN KEY(category_catID) REFERENCES CATEGORY(catID)
);

DROP TABLE IF EXISTS ORDER;
CREATE TABLE ORDER
(
	orderID integer NOT NULL AUTO_INCREMENT,
    status integer NOT NULL,
	dateOrder datetime NOT NULL,
	dateDelivery datetime,
    user_userID integer NOT NULL,
	PRIMARY KEY(orderID),
	FOREIGN KEY(user_userID) REFERENCES USER(userID)
);

DROP TABLE IF EXISTS POSITION;
CREATE TABLE POSITION
(
	positionID integer NOT NULL AUTO_INCREMENT,
	amount integer NOT NULL,
    order_orderID integer NOT NULL,
    product_productID integer NOT NULL,
	PRIMARY KEY(positionID),
	FOREIGN KEY(order_orderID) REFERENCES ORDER(orderID),
	FOREIGN KEY(product_productID) REFERENCES PRODUCT(productID)
);