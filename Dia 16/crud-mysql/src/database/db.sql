-- creating db
CREATE DATABASE crudnodejsmysql;

--using db
use crudnodejsmysql;

--tables
create table customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) 
);

--SHOW TABLES
SHOW TABLES;

--TO DESCRIBE TABLE
DESCRIBE CUSTOMER;