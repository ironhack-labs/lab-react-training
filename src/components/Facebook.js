import React, { Component } from 'react'
import profiles from '../data/berlin.json';

export default class Facebook extends Component {

  constructor(){
    super()
    this.state = {
      profiles,
      filter: ''
    }
  }

  handleFilter = (c) => {
    this.setState({
      filter: c
    })
  }

  getColor(p) {
    return p.country === this.state.filter ? 'lightblue' : 'inherit'
  }
  getColorB(p) {
    return p === this.state.filter ? 'lightblue' : 'inherit'
  }
  
  render() {
    const cities = [...new Set(this.state.profiles.map(item => item.country))]
    
    // Inline styling baah
    return (
      <div>
        {cities.map((c) => <button style={{backgroundColor: this.getColorB(c)}} onClick={() => this.handleFilter(c)}>{c}</button>)}
        {this.state.profiles.map(p => 
          <div style={{backgroundColor: this.getColor(p), border: '1px solid black', margin: '10px', display: 'flex', width: '50%'}}>
            <img src={p.img} style={{width: '200px'}} alt=""/>
            <div style={{marginLeft: '10px', fontSize: '25px'}}> 
              <p style={{margin: '6px'}}><strong>First name: </strong>{p.firstName}</p>
              <p style={{margin: '6px'}}><strong>Last name:</strong> {p.lastName}</p>
              <p style={{margin: '6px'}}><strong>Country:</strong> {p.country}</p>
              <p style={{margin: '6px'}}><strong>Type:</strong> {p.isStudent ? "Studend" : "Teacher"}</p>
            </div>
          </div>
          )}
      </div>
    )
  }
}
