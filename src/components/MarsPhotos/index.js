import React from 'react'
import axios from 'axios'
import './MarsPhotos.css'

const apiKey = process.env.REACT_APP_KEY

class MarsPhoto extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            full_name: "",
            img_src: [],
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
                    data: response.data.photos
                })
            })
        }
        catch(error) {
            this.setState({errorMessage: error.toString()})
        }
    }

    renderImages = () => {
        if(this.state.data.length){
            return this.state.data.map(image => {
                return <img key={image.id}source={image.image_src} alt={image.rover.name}/>
            })
        }
    }

    render(){
        return (
            <div className="marsPhoto">
                <h1>Mars Rover Photos</h1>
                {this.renderImages()}
                {/* <h3>{`${this.state.data.camera.full_name}`}</h3> */}
                {/* <img src={`${map(marsPhoto) => this.state.data.img_src)}`} alt='Not Available' /> */}
                {/* <p>{`${this.state.data.rover.name}`}</p> */}
            
            </div>

        )
    }
}

export default MarsPhoto