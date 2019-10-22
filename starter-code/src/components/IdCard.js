import React, { Component } from 'react';
import CardInfo from './CardInfo';
// import Data from "./../data/berlin.json"

const userData = [
  {
    firstname: 'John',
    lastName: 'Doe',
    gender: 'male',
    height: '1,70m',
    birth: '10 March 1999',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },

  {
    firstname: 'Jane',
    lastName: 'Doe',
    gender: 'female',
    height: '1,70m',
    birth: '10 March 1999',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  }
];

class IdCard extends Component {

  render() {
    // console.log(Data)
    return (
      <div>
        <div className="row text-center">
          {userData.map((info, index) => {
            // console.log(info)
            return <CardInfo {...info} key={index} />
          })}
        </div>
      </div>
    )
  }
}

export default IdCard;