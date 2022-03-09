---
Layout:
Title: "Weather application"
Date: "2022-03-04"
---

# Introduction
In this blogpost i will write about the project given by Sabelo (weather application)

# Body

In the project, we suppose to create an application that searches the the weather based on location(current location or specified location). 

We were suppose to create a new application and connect it to a weather API endpoint. Then create an API key that you will use to connect to an API. I struggled to find a free api that shows 7days forecast. I managed to only show the current forecast on my application.

First thing i created a react app.
Then I created a new components folder inside source folder and also a component file(weather.jsx) inside components folder.
I created an environment file to keep my weather API, API KEYS private.
In my weather.js file, thats were i defined my states and created my app.
Then i created a request.js file were i defined axios(one of the npm for fetching API's).

code example:

import axios from "axios";
require('dotenv').config()

let apiKey = process.env.REACT_MY_API_KEY

let data= null;
const getData = async (city) => {
try {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apiKey`)

  return response.data
} catch (error) {
  console.error(error)
}
}

export default getData

Then i have exported my function so that i can use it in my weather.jsx file.

