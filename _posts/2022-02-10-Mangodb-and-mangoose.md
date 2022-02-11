---
Layout:
Title: "MangoDB and Mangoose"
Date: "2022-02-10"
---

# Introduction

Today i'm going to talk about one of the backend course called MangoDB and Mangoose. MangoDb is the one that store clusters and clusters stores collection of databases.

# body

In your backend, you have start to by installing mangodb and mangoose to your packages. in order for you to use mangoose to your server file, you need to require mongoose.
const mongoose = require('mongoose')

mongoose is the extension of mangodb, mongoose is the one that gives you access to the mangodb database. 

Another thing before you can use mongoose, you have to create or install dotenv file so that you hide your mongodb URI which contain your user name and your password. Copy your URI from mangodb and assign your URI to your prefered name for your database in uppercase spaced by underscores. Declare a new variable and assign it to process.env['URIname']. Therefore you will need to connect your mongoose with your URI.
mongoose.connect(variableName).

# Conclusion

Working with mangodb and mangoose makes thing a lot easier because mangodb is not complicated as i thought it is/would be