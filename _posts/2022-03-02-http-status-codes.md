---
Layout:
Title: "http status codes"
Date: "2022-03-02"
---

# Introduction

All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role.

# Body

### The five status code categories role that i have mentioned on my introduction are: 

## 1. Informational response
## 2. Successful
## 3. Redirection
## 4. Client error
## 5. Server error

## 1. Informational response
### The request was received, continuing process
 
#### - 100 Continue
#### - 101
#### - 102 Processing
#### - 103 Early Hints

## successful
### The request was successfully received, understood, and accepted.

#### - 200 OK
#### - 201 Created
#### - 202 Accepted
#### - 204 No Content

## redirection
### Further action needs to be taken in order to complete the request.

#### - 301 Moved Permanently
#### - 302 Found
#### - 307 Temporary Redirect
#### - 308 Permanent Redirect 

## client error
### The request contains bad syntax or cannot be fulfilled.

#### - 400 Bad Request
#### - 401 Unauthorized - 403 Forbidden
#### - 404 Not Found
#### - 406 Not Acceptable
#### - 408 Request Timeout

## server error
### The server failed to fulfil an apparently valid request.

#### - 500 Internal Server Error
#### - 502 Bad Gateway
#### - 503 Service Unavailable
#### - 504 Gateway Timeout



