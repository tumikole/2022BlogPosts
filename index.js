

// const Joi = require('joi');
// const loginSchema = Joi.object().keys({
//   username: Joi.string().min(3).max(10).required(),
//   password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
// });

// app.post('/login', function(req, res) {
//   const valid = Joi.validate(req.body, loginSchema).error === null;
//   if (!valid) {
//     res.status(422).json({
//       status: 'error'
//       message: 'Invalid request data'
//       data: req.body
//     });
//   } else {
//     res.send(`ok`);
//   }
// });


const hello = (name) => {
  if(name === "undifined" || name === ""){
    return `Hello, World`
  }else{
    return `Hello, ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}`
  }
}

console.log(hello("null"))