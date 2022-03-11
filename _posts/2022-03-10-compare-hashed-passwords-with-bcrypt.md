---
Layout:
Title: "Compare hashed Passwords with bcrypt"
Date: "2022-03-10"
---

# Introduction

In this blogpost im going to proceed from my previous blogpost about the hashed passwords. This time i'm going to compare the hashed password and the password actual password.

# Body

## Compare a password to a hash

In this process, we already safely secured our hashed password in our database. So when a user login, we have to compare the plain text password to the hashed. We use compare method to compare the two passwords.

We will pass bcrypt.compare() then inside the parameters we will pass the password that we are comparing, also the the hashed password that is stored in the database. Then we going to check if the password matches the hashed.

Code example:

<bcrypt.compare(password, hash, function(err, result) {
  // returns result
});

In our backend/sever, we can check the comparison in our console by using true or false boolean or strings.

example:

bcrypt.compare(password, hash, function(err, result) {
  if (result) {
    console.log(true) or console.log("It matches")
  }
  else {
    console.log(false) or console.log("It doesn't match");
  }
});

