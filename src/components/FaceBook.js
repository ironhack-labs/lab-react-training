import React, { Component } from 'react'
import profiles from '../data/berlin.json';
import IdCard from './IdCard';

export default class FaceBook extends Component {
  render() {
    return (
      <div>
      
      {profiles.map(item => (
        <div key={item.id}>
        <IdCard
            lastName={item.lastName}
            firstName={item.firstName}
            country = {item.country}
            picture={item.img}
            type = {item.type}
        />
        </div>
      ))}

      </div>
    )
  }
}
