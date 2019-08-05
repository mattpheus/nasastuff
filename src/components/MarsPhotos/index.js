import React from 'react'
import axios from 'axios'
import './MarsPhotos.css'

const apiKey = process.env.REACT_APP_KEY

class MarsPhoto extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            full_name: "",
            img_src: "",
            name: "",
            data: []
        }
    }

componentDidMount = () => {
    this.marsPhoto()
}

 marsPhoto = async () => {
        try{
            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
            .then((response) => {

            console.log(response.data)
                this.setState({
                    data: response.data[0]
                })
            })
        }
        catch(error) {
            this.setState({errorMessage: error.toString()})
        }
    }

    render(){
        return (
            <div className="astronPhotoOfDay">
                <h1>Mars Rover Photos</h1>
                {/* <h3>{`${this.state.data.camera.full_name}`}</h3> */}
                <img src={`${this.state.data.img_src}`} alt='Not Available' />
                <h4>Rover Name That Took the Photo!</h4>
                {/* <p>{`${this.state.data.rover.name}`}</p> */}
            
            </div>

        )
    }
}

export default MarsPhoto