---
Layout:
Title: "React-Router-Dom recap"
Date: "2022-02-24"
---

# Introduction
Today i’m going to talk bout the React-Router-Dom. React Router DOM facilitates component-based routing according to the needs of the app and platform. The new version of  react-Router-dom replaced the Switch with Route and also the useHistory has been replaced with useNavigation.

# Body
We install React-Router-Dom by using the following node package manager: npm install react-router-dom. Then we import BrowserRouter as Router, Switch, Route and Link.

## Router

Router wraps all the elements in the component. It is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

## Route

The component is the most important component in React Router. It renders some UI if the current location matches the route's path. Ideally, a component should have a prop named path , and if the path name matches the current location, it gets rendered. Is the conditionally shown component that renders some UI when its path matches the current URL.

## Link

To add the link in the menu, use the component by react-router-dom . The NavLink component provides a declarative way to navigate around the application. It is similar to the Link component, except it can apply an active style to the link if it is active.

### add links for navigation

Define the route of each page, meaning the URL path and the component that we want to load.
Define a router which will check if the requested URL is defined in the routes, and if it is, return the component.

# Conclusion

React router dom makes it simple for developer to make routes/navigate through the application or changing pages when you click a certain link or buttons.