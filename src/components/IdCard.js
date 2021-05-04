
import React, { Component } from 'react'

export default class Picture extends Component {
    render() {
        return (
            <>
                <h1>Picture</h1>
                <img src=picture style={{ width: '200px' }} />
            </>
        )
    }
}


function IdCard(lastName, firstName, gender, height, birth, picture) {
    return (
    <img src=picture/>
    <div>
      First name: {firstName}
      Last name: {lastName}
      Gender: {gender}
      Height: {height}
      Birth: {birth}
    </div>; )
  
  }