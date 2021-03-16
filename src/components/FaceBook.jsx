import React, { Component } from 'react'
import profiles from '../data/berlin.json';

export default class FaceBook extends Component {
    state={
        profiles: profiles,
        SelectedCountry : ""

    }
    boxFb={
        border : "1px solid black", 
        display:"flex"
    }
    imgFb={
        width : 150
    }
    blue={
        border : "1px solid black", 
        display:"flex",
        backgroundColor:"blue"
    }
    countries = profiles.map((element)=>element.country)
    countriesUniques = Array.from(new Set(this.countries));
    HandleClick=(country)=>{
        this.setState({selectedCountry : country.country})

    }

    render() {  
        return (
            <div>
            {this.countriesUniques.map((country)=>{
                return <button onClick={()=>this.HandleClick({country})} key={country}>{country}</button>
            })} 
            <div>
                {this.state.profiles.map((element)=>{
                    return <div style={element.country===this.state.selectedCountry? this.blue : this.boxFb} key={element.firstName+element.lastName}>
                    <div><img style={this.imgFb} src={element.img} alt=""/></div>
                    <div>
                    <h4>FirstName: {element.firstName}</h4>
                    <h4>LastName: {element.lastName}</h4>
                    <h4>Country: {element.country}</h4>
                    <h4>Type: {element.isTeacher ? "Teacher" : "Student"}</h4>
                    </div>
                    
                    </div>
                })}
                </div>
            </div>
        )
    }
}
