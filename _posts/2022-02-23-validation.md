---
Layout:
Layout:
Title: "Validation"
Date: "2022-02-23"
---

# Introduction

Today im going to talk about backend schema validation. There are several types of node packages that you can use to validate your schema in your backend but for today i'll be focusing on Hapi/joi.

# Body

We have several different types of npm schema validations like AJV, JOI, express-validator, node-input-validator, valivar and etc. 

## Hapi/joi Validation


Hapi/joi is a module for data validation. This validates the data based on schemas. There are various functions like optional(), required(), min(), max(), etc which make it easy to use for validating the data.

It is an object schema validator for JS objects. When we use Hapi/joi as our validator, it is more like we are building a blueprint of our schema to ensure the validation of key information.

code example for login validator using joi :

const Joi = require('joi');

const loginSchema = Joi.object().keys({

  username: Joi.string().min(3).max(10).required(),

  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)

});

app.post('/login', function(req, res) {

  const valid = Joi.validate(req.body, loginSchema).error === null;

  if (!valid) {

    res.status(422).json({

      status: 'error'

      message: 'Invalid request data'

      data: req.body
    });

  } else {

    res.send(`ok`);

  }
  
});


# Conclusion

It is very much easier when using hapi/joi as your validator package because it safes time and safe to use.