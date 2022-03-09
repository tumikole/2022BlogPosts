---
Layout:
Title: "Express server (Recap)"
Date: "2022-03-07"
---

# Introduction

On this blogpost i'm going to do a recap on what i have learned about express server.

# Body

## Express server

In express server we have handlers, handlers takes the function/middlewares (req , res) where the request is the request object and res is the response object. 

#### example:

function(req, res) {

    res.send('response message')
}

## app.get()

Lets you define a routes handler for GET request to a given URL.
It is for binding the middlewares to your application.

#### Example:

app.get('/path, function route handler (get , res) {

    res.send('respond message')
})

We have other handlers like:

### app.post('/path' callback function)

The app. post() method routes all the HTTP POST requests to the specified path with the specified callback functions
### app.update('/path' callback function)

### app.delete('/path' callback function)

We use app.delete if we want to delete a document in our database