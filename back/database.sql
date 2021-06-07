drop database if exists first_login;
create database first_login;

use first_login;

create table user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100),
  password VARCHAR(95)
);
