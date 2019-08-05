import React from 'react'
import axios from 'axios'
import './Asteroids.css'


const apiKey = process.env.REACT_APP_KEY

class Asteroids extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: "",
            endDate: "",
            data: []
        }
    }

    // componentDidMount() {
    //     fetchAsteroids()
    // }

    fetchAsteroids = async (event) => {
        
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
                //asteroids.push is an empty array (line 33*) that recieves the spread(...) of data.data (the two arrays we get back from Nasa) along with near_earth_objects while we are iterating through each key[i].
            }
           this.setState({data:asteroids})
            console.log(asteroids)
        }
        catch (error) {
            console.log(error)
            this.setState({ errMessage: error.toString() })
        }

    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.fetchAsteroids()
        
    }


    render() {
        return (
            <div className="asteroidsContainer">
                <form onSubmit={this.onSubmit}>
                    <input name="startDate" type="date" onChange={this.onChange}/>
                    <input name="endDate" type="date" onChange={this.onChange}/>
                    <button type="submit">Submit</button>
                </form>
                <div className="asteroidsList">
                <ul>
                    {this.state.data.map(asteroids => { //mapping through the asteroids array (which is now set to the new array value on line 39*.)
                        console.log(asteroids)
                        return <ul>
                        <li className="aName">{`The Asteroid Name is ${asteroids.name}, and it missed Earth by ${asteroids.close_approach_data["0"].miss_distance.miles}`} </li>
                        {/* <li>{`it missed Earth by ${asteroids.close_approach_data["0"].miss_distance.miles}`}</li> */}
                        </ul>
                    })}
                    </ul>
                </div>
            </div>
        )
    }

}

export default Asteroids