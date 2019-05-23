import React, { Component } from 'react';
import ACard from "./ACard"

class IdCards extends Component {
  state = { }
  render() { 
    return (
      <div>

      <ACard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <ACard 
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      </div>
      );
  }
}
 
export default IdCards;