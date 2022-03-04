---
Layout:
Title: "How to count number of users in node express"
Date: "2022-03-02"
---

# Introduction

Today on this blogpost i'm going to talk about how to count the number of user's/connections in node express. 


# Body

First thing you need to do is installing express as your backend (npm) dependency. And also install expression session. Therefore require both of them in your express file(server file). 

npm i express-session	//On Hyper/CMD

const session = require('express-session');	//To Acquire it

app.use(session({

  secret: 'keyboard cat',

  resave: false,

  saveUninitialized: true,

  cookie: { secure: true }
}));

The express session helps us in saving data in the key value form. 

Also you have to install socket.io (npm) dependency and import the package to server file.

example on how to use socket.io:

var io = require('socket.io').listen(8080);

var count = 0

io.sockets.on('connection', function(socket) {

    count++;

    io.sockets.emit('message', { count: count });

    socket.on('disconnect', function(){

        count--;

        io.sockets.emit('message', { count: count });

    })
});

For us to get real time active connections, we need to implement the above mentioned example ini our server file.


