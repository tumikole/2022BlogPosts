---
Layout:
Title: "Authentication"
Date: "2022-02-22"
---

# What is authentication?

It is a control of identifying a user identity according to their credentials (firstnames, lastnames, email and etc)

# Why Is User Authentication Important?

Authentication it is important because it prevent unauthorized users from accessing information that is not meant for them(sensitive information). When user authority is not secured, for some users will be easily access or steal your information.

# What is serialization of objects in

It means to convert its contents into a small key that can then be deserialized into the original object.

# Why serialization Object

The main reason why we have to serialize user object it is because we dont need to store the whole user object in ram when you have 100's of logged in users, you only want to remember the minimum information to be able to find that information later when you need it. In other words you don't have to keep track of the client's state (authenticated or not) while not having to put sensitive data like password hashes or raw passwords on the client's device.

# Authentication Strategies


During my search on google, i have learned that we have 5 authentication methods that can prevent the next breach.

##### Password-based authentication
##### Multi-factor authentication
##### Certificate-based authentication
##### Biometric authentication
##### Token-based authentication