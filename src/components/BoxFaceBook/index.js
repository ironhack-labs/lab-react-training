import React, { Component } from 'react';
import "./style.css";
import NameValue from '../NameValue'

class BoxFaceBook extends Component {
    render(){
        const {fname, lname, country, type, img, selected} = this.props;
        return (
            <div className="idcard" style={{backgroundColor: selected === country ? "blue" : "white"}}>
                <img src={img} alt={fname} width="160" height="160"/>
                <div className="elements">
                    <NameValue text="First Name: " value={fname}/>
                    <NameValue text="Second Name: " value={lname}/>
                    <NameValue text="Country: " value={country}/>
                    <NameValue text="Type: " value={type ? "Student" : "Teacher"}/>
                </div>
            </div>
        )
    }
}

export default BoxFaceBook;