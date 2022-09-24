CREATE DATABASE test;

USE test;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role ENUM('USER','ADMIN') NOT NULL,
    DOB DATE NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    
    PRIMARY KEY (id),
    UNIQUE (username),
    UNIQUE (email)
);

CREATE TABLE categories(
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    barcode varchar(255) NOT NULL,
    price_in FLOAT NOT NULL,
    price_out FLOAT NOT NULL,
    quantity INT NOT NULL,
    presentation varchar(255) NOT NULL,
    is_active TINYINT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE people(
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    DOB DATE NOT NULL,
    email varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    
    PRIMARY KEY (id),
    UNIQUE (email),
    UNIQUE (phone)
);

CREATE TABLE sales(
	id INT NOT NULL AUTO_INCREMENT,
    total FLOAT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    
    PRIMARY KEY (id)
);

ALTER TABLE products
ADD category_id INT NOT NULL;

ALTER TABLE products
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

ALTER TABLE `products` 
CHANGE `category_id` `category_id` INT(11) NOT NULL AFTER `id`;

ALTER TABLE sales
ADD user_id INT NOT NULL;

ALTER TABLE sales
ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE `sales` 
CHANGE `user_id` `user_id` INT(11) NOT NULL AFTER `id`;

ALTER TABLE sales
ADD person_id INT NOT NULL;

ALTER TABLE sales
ADD FOREIGN KEY (person_id) REFERENCES people(id);

ALTER TABLE `sales` 
CHANGE `person_id` `person_id` INT(11) NOT NULL AFTER `user_id`;

CREATE TABLE IF NOT EXISTS salesproducts (
  sale_id INT NOT NULL REFERENCES sales (id) ON DELETE CASCADE ON UPDATE CASCADE,
  product_id INT NOT NULL REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY (sale_id, product_id)
);