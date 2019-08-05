import React from 'react'
import axios from 'axios'
import './Apod.css'

const apiKey = process.env.REACT_APP_KEY

class Apod extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            photoOfDay: "",
            explanation: ""
            
        }
    }

componentDidMount = () => {
    this.fetchPhoto()
}



 fetchPhoto = async () => {
        try{
            const photo = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            const {data:{title, hdurl, explanation}} = photo
            // console.log(title)
            // console.log(hdurl)
            this.setState({title:[...this.state.photoOfDay, title, hdurl, explanation]})
            this.setState({photoOfDay:[...this.state.photoOfDay, title, hdurl, explanation]})
            this.setState({explanation:[...this.state.photoOfDay, title, hdurl, explanation]})
        
        }
        catch(error) {
            this.setState({errorMessage: error.toString()})
        }
    }

    render(){
        return (
            <div className="astronPhotoOfDay">
                <h1>A.P.O.D = Astronomy Picture of the Day</h1>
                <h3>{`${this.state.title[0]}`}</h3>
                <img src={`${this.state.photoOfDay[1]}`} alt='Not Available' />
                <h4>Explanation:</h4>
                <p>{`${this.state.explanation[2]}`}</p>
            
            </div>

        )
    }
}

export default Apod