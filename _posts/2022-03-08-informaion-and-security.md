---
Layout:
Title:"Information and security"
Date:"2022-03-08"
---

# Introduction

On this blogpost i will discuss how to secure your Backend via Node.js and Express.js. 

# Body

First thing you need to do is to install one of the npm called helmet in your backend package.json file. Then you have to require/instantiate the helmet in your server file. It helps to protect or secure HTTP headers returned by your Express applications.
Then we have to use it by using app.use() method then pass it as an argument. 

Beside using all the helmet methods, we can simply use our helmet method accessing other helmet methods like hidePoweredBy(), noSniff() etc.

#### Code Example:

app.use(helmet({

    frameguard: {

        action: 'deny'

    },

contentSecurityPolicy: {

directives: {

    defaultSrc : ["'self'"],

    styleSrc : ['style.com'],

}
}

dnsPrefetchControl : false
}))

If you want to use helmet method by accessing helmet methods, we do it in this way:
- app.use(helmet.hidePowerdBy()) - Here the information is sent by default

- app.use(helmet.frameguard({action:'deny'})) - sets the X-Frame-Options in the header to prevent clickjacking attacks. (google searched)

- app.use(helmet.xssFilter())

- app.use(helmet.ieNoOpen())

- app.use(helmet.noCach())

- app.use(helmet.) -lets you set the Content-Security-Policy which allows you to mitigate cross-site scripting attacks. If no directive is applied by the developer, the following policy is set as the default(google searched)

etc