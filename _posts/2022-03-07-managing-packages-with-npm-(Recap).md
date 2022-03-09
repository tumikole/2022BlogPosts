---
Layout:
Title: "Managing packages with npm (Recap)"
Date: "2022-03-07"
---

# Introduction

On this blogpost i'm going to do a recap on what i have learned about managing packages with npm. This

# Body

Express server

In express server we have handlers, handlers takes the function/middlewares (req , res) where the request is the request object and res is the response object. 

example:

function(req, res) {

    res.send('response message')
}

app.get()

Lets you define a routes handler for GET request to a given URL.
It is for binding the middlewares to your application.

Example:

app.get('/path, function route handler)