---
Layout:
Title: "SQL"
Date: "2022-02-25"
---

# Introduction

On this blogpost i will point out few things that i have learned on sql/postgres db

# Body

Sql it is one of the relational database. Meaning you are able to create table an rows and it is easier to access your sql database using just your terminal. Also you can use pg admin application on your local machine or on the website (http://127.0.0.1/pgadmin4/). 

You will need to install sql on your terminal and create username and password for login. Once you are done, you can access your sql database. When you are using node js as your backend, you will need to install pg as your (npm) dependency. And also create sql file where you will be specifying your sql fields or your sql schema. 

This is how you create database in sql : CREATE DATABASE <db_name>. Therefore you create your table with the fields or your schema :

ex:
CREATE TABLE students(

  	studentsId INT NOT NULL,

  	firstname VARCHAR(64), 
  	
      lastname VARCHAR(128),
  	
      email VARCHAR(255),
  	
      PRIMARY KEY(studentsId)
);

studentsId INT NOT NULL: The database will generate id automatically and each students will have a unique id and cannot contain NULL values.
firstname, lastname and email VARCHAR(255): VARCHAR(64) basically specifies the maximum number of characters needed.
PRIMARY KEY(studentsId): The PRIMARY KEY constraint uniquely identifies each record in a table.

