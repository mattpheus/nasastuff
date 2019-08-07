import React from 'react'
import axios from 'axios'
import './Epic.css'

const apiKey = process.env.REACT_APP_KEY

class Epic extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            caption: [],
            data: []
            
        }
    }

componentDidMount = () => {
    this.getEpicInfo()
}

 getEpicInfo = async () => {
        try{
            const info = await axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`)
            const data = info.data.splice(0, 3)
            this.setState({data})
        }
        catch(error) {
            this.setState({errorMessage: error.toString()})
        }
    }

    renderImages = () => {
        if(this.state.data){
            return this.state.data.map(image => {
                const dateArr = image.date.split('')
                const year = dateArr.splice(0,4).join('')
                const month = dateArr.splice(1,2).join('')
                const day = dateArr.splice(2,2).join('')
                const url = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${image.image}.png`
                return <div><img key={image.identifier} src={url} alt={image.caption}/><h3>{image.caption}</h3></div>
            })
        }
    }

    render(){
        return (
            <div className="epicPhotoOfEarth">
                <h1>E.P.I.C = Earth Polychromatic Imaging Camera</h1>
                {this.renderImages()}
                {/* <h3>{`${this.state.caption}`}</h3> */}
                {/* <img src={`${this.state.image}`} alt='Not Available' /> */}
                <h4>--</h4>
                <p>--</p>
            
            </div>

        )
    }
}

export default Epic