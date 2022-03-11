---
Layout:
Title: "Hash Passwords with bcrypt"
Date: "2022-03-09"
---

# Introduction

In this blogpost im going to talk about how to hash the password using bcrypt node package management.

# Body

## How to hash a password using bcrypt.

First, install the bcrypt library.

- npm i bcrypt

To use bcrypt you need to Import/require bcrypt in your server file.

- <const bcrypt = require ('bcrypt');

Set a value for saltRounds

- The higher the saltRounds value, the more time the hashing algorithm takes.
- const saltRounds = 10;

 Generate a salt.
 - bcrypt.genSalt()

1. saltRounds
1. Callback of error and the returned salt:

example:

bcrypt.genSalt(saltRounds, function(err, salt) { (<-- two spaces)
  // returns salt (<-- two spaces)
});

Hash the Password

- We pass bcrypt.hash() these parameters

1. Password
2. Salt
3. Callback of error and the returned hash

example:

`bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(password, salt, function(err, hash) {
  // returns hash
  console.log(hash);
  });
});
`
