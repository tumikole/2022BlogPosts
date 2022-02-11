---
Layout:
Title: "Backend development"
Date: "2022-02-08"
---

# Introduction

Today i'm going to talk about the challenges i came across during the day. So i have selected few of them which are: the project that Sabelo gave us (Meta data reader) and also express server from the freecodecamp.

# Body

In a project that Sabelo gave us, we were suppose to create an app that can read the file information and display the output on UI with information from the file after clicking the submit button. In the app you should include the file input and also a submit button. Structuring and styling the app was easy, the problem was creating the functionality of creating a blob. A blob is binary large object, in other words it is a collection of binary data stored as a single entity. The hardest thing in creating a blob is, you have to convert file object/ file url into a blob by using a function/method for blob conversion. So i managed to convert by using URL.createObjectURL(file).

In express i have learned that express has has handlers and they take function(req, res) where the req is the request object and res is the response object. So

ex:
 function(req, res) {
     res.send("the response string")
 }


We also have app.get(), app.

app. get lets you define a route handler for get request to a given url.

ex: 

 app.get("/path",function(req, res) {
     res.send("the response string")
 })

 It is intended for binding middleware to your application. the path is a mount path and limit the middleware to only apply any paths requested that begin with it. 

 # Conclusion

 Sabelo's project taught me that in software development, there are many solutions to create functions and theres always an answer to everything. 

