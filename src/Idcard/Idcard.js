import React, {Component} from "react";
import "./Idcard.css";
import img from './master-card.svg';



class Idcard extends Component{
render(){
    return(
            <>
                <p><img id="myImg" scr={this.props.picture}alt="foto-img"/></p>
                
                   <p> <b>First Name:</b>{this.props.firstName} </p>
                
                    <p><b>Last Name:</b>{this.props.lastName}</p>
                    <p><b> Gender:</b>{this.props.gender}</p>
                    <p><b>Height:</b>{this.props.height+"m"}</p>
                
                   <p><b>Birth:</b>{this.props.birth.getDate()}/{this.props.birth.getMonth()}/{this.props.birth.getYear()}</p>
            </>   
                
                
                
                
               
        )
    }
}


export default Idcard;