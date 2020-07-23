import React, { Component } from 'react'
import '../App.css';

export default class IdCard extends Component {
    render() {
        return (
            <div>
                <div  className="myCard"> 
                    <div className="info"> 
                        <div className="imgPart">
                            <img src={this.props.picture}></img> 
                       
                        </div>
                        <div className="infPart">
                            <p>Last name: {this.props.lastName} </p>
                            <p>First name:{this.props.firstName} </p>
                            <p>Gender: {this.props.gender} </p>
                            <p>Height: {this.props.height} </p>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}
