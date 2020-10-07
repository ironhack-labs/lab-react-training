import React, { Component } from 'react';
import profilesJSON from '../data/berlin.json';



class FaceBook extends Component {

    state = {
        profiles: profilesJSON
    };



    

    blueCountry = () => {
        console.log("yo blue")
        const profilesCopy = [...this.state.profiles]

        let countryArr = profilesCopy.map(a => a.country);
        console.log(countryArr)

        this.state.profiles.filter(prof => {
            if(prof.country === "USA"){
                
            }
        })

    }

    blueBackGround = (btnCountry) => {
        console.log(btnCountry)
    }

    render() {
        const divStyle = {
            // color: `${props.color}`,
            color: 'black',
            backgroundColor: "blue",
          };

        const profilesCopy = [...this.state.profiles]

        let countryArr = profilesCopy.map(a => a.country);
        console.log(countryArr)

        let mySet = [...new Set(countryArr)]

        console.log(mySet)

        return (
            <div>
                <div>
                    <button onClick={this.blueCountry}>ALL</button>
                    {mySet.map(btn => (
                        <button onClick={this.blueBackGround(btn)}>{btn}</button>
                    ))}
                </div>

                {this.state.profiles.map(prof => (
                    <div className="container-id-card">
                    <div><img src={prof.img} alt="" width="150px"/></div>
                    <ul style={divStyle}>   
                        <li><b>First name:</b> {prof.firstName}</li>
                        <li>Last name: {prof.lastName}</li>
                        <li>Country: {prof.country}</li>
                        <li>Type: {prof.isStudent ? 'Student' : 'Teacher'} </li>
                    </ul>  
                    </div>
                ))}
            </div>
        )
    }
}


export default FaceBook;