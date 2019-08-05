import React from 'react'
import axios from 'axios'
import './Epic.css'

const apiKey = process.env.REACT_APP_KEY

class Epic extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            caption: "",
            image: ""
            
        }
    }

componentDidMount = () => {
    this.getEpicInfo()
}

 getEpicInfo = async () => {
        try{
            const info = await axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`)
            const {data:{caption, image}} = info
            this.setState({caption:[...caption]})
            this.setState({image:[...image]})
        
        }
        catch(error) {
            this.setState({errorMessage: error.toString()})
        }
    }

    render(){
        return (
            <div className="epicPhotoOfEarth">
                <h1>E.P.I.C = Earth Polychromatic Imaging Camera</h1>
                <h3>{`${this.state.caption}`}</h3>
                <img src={`${this.state.image}`} alt='Not Available' />
                <h4>Explanation:</h4>
                <p>Write something here</p>
            
            </div>

        )
    }
}

export default Epic