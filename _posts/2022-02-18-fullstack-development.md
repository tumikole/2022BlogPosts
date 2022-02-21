---
Layout:
Title: "fullstack development"
Date: "2022-02-18"
---

# Introduction

Today on this blogpost i'm going to talk about how to build an app from frontend to backend.

# Body

Whenever you are building a fullstack app, you have to consider the following libraries and tools.

1. Database
2. Backend Server
3. Redux
4. frontend(the client side)

## Database

The are two types of databases. we have relational database and noSql databases

### Relational database

Structure Query Language (SQL)
The data is stored in multiple, related tables. Within the table the data is stored in rows and columns.

### No sql database

In this databases we don't use sql. THis databases are referred as non relational databases.


## Backend

Backend is basically the middleware that communicates between the frontend and the backend. Backend it is a place were you structures your database and how you receive the information from frontend and give back the information to the frontend from backend.

## Redux

It is an application state management. Redux globalizes your state and maintains a single immutable state.

You firstly start by installing redux package on your frontend or client side and on your index .js file you create your store. Then pass your reducers in your store.

Reducers takes an action  and the previous state  of the application and returns the new state. Basically the action describes what happened and it is the reducers's job to return the new state based on that action.


 ## React 

We use react to build a user interface. We use it for handling the view for the mobile and web apps. So basically we use react to build client sides.