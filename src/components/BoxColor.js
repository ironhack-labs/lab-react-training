import React from 'react'
import '../components/BoxColor.css'

class BoxColor extends React.Component {
    render() {

        let r = (this.props.r >= 0 && this.props.r <255 ) 
        let g = (this.props.g >= 0 && this.props.g <255 ) 
        let b = (this.props.b >= 0 && this.props.b <255 ) 

        //let myColor = <p>`rgb(${this.props.r},${this.props.g},${this.props.b})`</p>

        const divStyle = {
            "backgroundColor": `rgb(${this.props.r},${this.props.g},${this.props.b})`,
            "width": "250px",
            "height": "120px",
            "border": "1px solid black",
            "margin": "20px",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "flex-direction": "column"
        }
 
         let hex =  "#" + (this.props.r) + (this.props.g) + (this.props.b);
        
        return (
             <div style={divStyle}>
                <p>{`rgb(${this.props.r},${this.props.g},${this.props.b})`}</p> 
                <p>{hex}</p>
             </div>
        )

    }
}

export default BoxColor