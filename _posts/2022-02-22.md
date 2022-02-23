---
Layout:
Title: "fullstack development"
Date: "2022-02-22"
---


# Why serialization Object

The main reason why we have to serialize user object it is because we dont need to store the whole user object in ram when you have 100's of logged in users, you only want to remember the minimum information to be able to find that information later when you need it. In other words you don't have to keep track of the client's state (authenticated or not) while not having to put sensitive data like password hashes or raw passwords on the client's device
