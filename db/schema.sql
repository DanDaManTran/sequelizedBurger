CREATE DATABASE IF NOT EXISTS sequelizedBurgers_db;

USE sequelizedBurgers_db;

CREATE TABLE IF NOT EXISTS burgers (
id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT FALSE,
date TIMESTAMP);
