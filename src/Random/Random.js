import React, {Component} from 'react'
import Style from './Random.css'

class Random extends Component {
    RandomNumb(min, max) {
        console.log("Started")
        return Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min));
    }

    render(){
        return (
            <div className="random-container">
                <div>Random value between {this.props.min} and {this.props.max} => {this.RandomNumb(this.props.min, this.props.max)} </div>
            </div>
        )

    }
}



export default Random;