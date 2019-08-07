# Nasastuff 
Want to see Earth photos? astronomy photos of the day? or even see the asteroid that is missed the Eaarth.

## description and user story 
-It is a React Router website, that display's Nasa's API data.
-This project helps me for a better understanding of React, and movements in pages.
-An end user would use this for a more comprehensive essential data point/astronomy basic info app. The Nasa API' has many different properties, it is up to the developer how best to display the properties for the end user, we don't want them (end user) to be overloaded with API data.

## technologies & packages
-React, Javacript, CSS and HTML

## launch/build 
-using the link provided. 

## major problems & solutions
-State and lifecycle management.

## MVP
-React router to six components.
-Have one interation with user for a component.

## FUTURE -> databases and relations; APIs; component library
-adding user account sign up or login.
-proper searching.
-more properties to be displayed on screen.

## _code snippet_
 - fetchAsteroids = async (event) => {
        
        const { startDate, endDate } = this.state;
        try {
            this.setState({ isLoading: true });
            const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
            // console.log(url)
            const data = await axios.get(url)
            const keys = Object.keys(data.data.near_earth_objects) //we are pulling the KEYS for each day. A deconstructor cannot work, because the input of the user is constantly moving due to the date selection from the user.
            console.log("raw data: ", data.data.near_earth_objects)
            console.log("object keys: ", keys)
            // keys = ["2019-09-09", "2019-09-08"]
            const asteroids = []

            for(let i = 0; i < keys.length; i++) {//Using the forloop, due to the fact that the dates are constantly moving from the user selection. Andre Pato worked with me and realized that the .map function is not working to retreive the correct data from the Nasa API.
                asteroids.push(...data.data.near_earth_objects[keys[i]])

-considering that there is a moving targeted date, this code shows how I would pull the keys to then assicate them with the proper data set you are looking for, then push them into an empty array and manipulate it in your render.

 ![Nasa Stuff Photo](/nasastuffss.png)
