import React from "react";
import "./IdCard.css";



export default class IdCard extends React.Component {

    render() {
        return (
        <div className="IdCard cardStructure">
            <div className="cardImage">
                <img src={this.props.picture} alt="img"/>
            </div>
            <div className="cardInfo">
                <p><b>First name: </b>{this.props.firstName}</p>
                <p><b>Last name: </b>{this.props.lastName}</p>
                <p><b>Gender: </b>{this.props.gender}</p>
                <p><b>Height: </b>{this.props.height}</p>
                <p><b>Birth: </b>{this.props.birth}</p>
            </div>
        </div>
        );
    }
}
