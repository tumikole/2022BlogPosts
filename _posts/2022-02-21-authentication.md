---
Layout:
Title: "Authentication with node express"
Date: "2022-02-21"
---

# Introduction

Today on this blogpost i'm gonna talk about the authentication in nodejs express.

# Body

## What is authentication in Express?

Authentication is a process in which the credentials provided are compared to those on file in a database of authorized users' information on a local operating system or within an authentication server.

In order for you to use passport.js, need to use pug package and passport package in your package.json file. So passport it is authentication middleware for Node.js. Passport can be attractive dropped in to any Express based web application. It is specifically created to facilitate the login process.

## Handling Authentication(information from google search)

First you need to create backend folder, then npm init to initialize your package.json file. Then install express as your backend application framework. Therefore we will need to install crypto module so that we cqn hash our/users password and generate tje token key, reason been that we don't need to save/store users password as it is.

ex:
(google example)

const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}    

On our app.post we will be requesting our password.body replaced by getHashedPassword so that we can get the hashed password.




 Then we going to need the frontend/client side that has registration and login. When the user registers or submit the form, the post request  will be sent to the register path. 

ex:

 const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

The token we will be sending the authentication token for the  for the login when the user submit the form.

# Conclusion 

As im still learning about authentication, i still need to understand the structure and the logic behind the auth. 