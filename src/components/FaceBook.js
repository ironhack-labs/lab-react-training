import React, { Component } from 'react'
import profiles from '../data/berlin.json';
import IdCard from './IdCard';

const countries = [...new Set(profiles.map(data => data.country))]

export default class FaceBook extends Component {

  state = {
    selected : ""
  };

  highlightBlue = (el)=> {  
    console.log(el)
    
    this.setState({selected: el})
     
  }


 

  render() {
    return (
      <div>
        <div>
          {countries.map((el,index) => (
            <button key={index} onClick={()=>this.highlightBlue(el)}>
             {el}
            </button>
          )  )}
        </div>

        {profiles.map((item,index) => (
          <div key={index} >
          <IdCard
              lastName={item.lastName}
              firstName={item.firstName}
              country = {item.country}
              picture={item.img}
              type = {item.type}
              backgroundColor = {item.country===this.state.selected? "lightblue": ""}
          />
          </div>
        ))}
      </div>
    )
  }
}

