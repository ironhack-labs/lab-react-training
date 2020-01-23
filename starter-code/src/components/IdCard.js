import React, { Component } from "react";

class IdCard extends Component {
    render (){
        return (
            <div>
                <div class="container">
                    <div className="avatar">
                    <img src={this.props.picture} alt="bla"/>
                    </div>

                    <div className="cardinfo">
                        <p><span>First name:</span> {this.props.firstName}</p>
                        <p><span>Last name:</span> {this.props.lastName}</p>
                        <p><span>Gender:</span> {this.props.gender}</p>
                        <p><span>Height:</span> {(this.props.height/100).toString()} m</p>
                        <p><span>Birth:</span> {this.props.birth.toLocaleDateString()}</p>
                    </div>
                </div>
            </div>

        )
    }
}


export default IdCard;
