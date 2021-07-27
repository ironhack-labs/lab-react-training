import { Component } from "react";
import Rating from "../Rating";
import './style.css'

class DriverCard extends Component {
    state = this.props.car
      
    render(){
        return(
            <div className = 'bg-driver'>
                <div>
                <img src = {this.props.img} className='driver-img'></img>   
                </div>
                <div>
                    <h3>{this.props.name} </h3>
                    <Rating value= {this.props.rating}/>
                    <p>{this.state.model} - {this.state.licensePlate}</p>
                </div>
            </div>
        )
    }
}

export default DriverCard