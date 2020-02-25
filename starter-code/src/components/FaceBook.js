import React, { Component } from 'react'


class FaceBook extends Component {
    

    render() {
        return (
            
            <div className = "IdCard box" key={this.props.llave}>
                <div className = "IdCard">
                    <img alt="" src={this.props.img} />
                </div> 
                <div className="FB right">
                    <strong>First name: </strong> {this.props.firstName}<br></br>
                    <strong>Last name: </strong> {this.props.lastName}<br></br>
                    <strong>Country: </strong> {this.props.country}<br></br>
                    <strong>Type: </strong> {
                                    this.props.isStudent === true ?
                                     'Student' : 
                                     'Teacher'
                                     }
                                     <br></br>
                </div>
                
            </div>
        ) 
    }
}

export default FaceBook;