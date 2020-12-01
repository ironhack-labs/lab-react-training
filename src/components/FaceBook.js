import React, { Component } from 'react';
import profiles from '../data/berlin.json';


class FaceBook extends Component {

    state={}

    setCountry = (country) => {
        this.setState({country: country});
    }

    render() {
        let countryList = [];
        profiles.forEach((user)=>{
            if(!countryList.includes(user.country)){
                countryList.push(user.country);
            }
        });

        return (
            <div>
                <button onClick={() => {this.setCountry("")}}>All</button>
                {countryList.map((country) =>{
                    return (
                        <button onClick={() => {this.setCountry(country)}}>{country}</button>
                    )
                })}
                {profiles.map((user)=>{
                    let type;
                    if(user.isStudent){
                        type = "Student";
                    }else{
                        type = "Teacher";
                    }
                    let divClass;
                    if(this.state.country === user.country){
                        divClass = "id-card blue";
                    }else{
                        divClass="id-card";
                    }

                    return (
                        <div className={divClass}>
                            <img src={user.img}></img>
                            <div>
                                <p><span className="bold-text">First name:</span> {user.firstName}</p>
                                <p><span className="bold-text">Last name:</span> {user.lastName}</p>
                                <p><span className="bold-text">Country: </span> {user.country}</p>
                                <p><span className="bold-text">Type:</span> {type}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default FaceBook;