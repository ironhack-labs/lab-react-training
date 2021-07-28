import react, { Component } from "react";
import '../App.css'


class DriverCard extends Component {

    render() {
        return (<>
            <div className="flex">
                <div className ="div-img">
                    <img className ="img-cartoon" src={this.props.img} />
                </div>
                <div>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.rating}</p>
                    <p>{this.props.car.model}- {this.props.car.licensePlate}</p>
                </div>
            </div>
        </>
        )
    }
}

export default DriverCard