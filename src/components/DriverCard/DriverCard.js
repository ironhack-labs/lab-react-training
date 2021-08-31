import "./DriverCard.css"
import { Component } from "react";
import Rating from "../Rating/Rating"

class DriverCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: this.props.rating
        }
    }
    render () {
        return (
            <div className="DriverCard">
                <img src={this.props.img} />
                <div id="info">
                    <h3>{this.props.name}</h3>
                    <Rating children={this.props.rating}/>
                    <div>
                        {this.props.car.model}
                        {" - "}
                        {this.props.car.licensePlate}
                    </div>
                </div>
        </div>
        )
    }
}

export default DriverCard