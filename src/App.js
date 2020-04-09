import React, { Component } from 'react';
import IdCard from './IdCard/IdCard.js'
import Greetings from './Greetings/Greetings.js'
import Random from './Random/Random.js'
import BoxColor from './BoxColor/BoxColor.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard firstname="Thibault" lastname="Delfaud" gender="Male" height="190" birth="15-04-1988" picture="https://media-exp1.licdn.com/dms/image/C4D03AQEuLNpl9eTpPA/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=3GJnpkGj7prpEGGbz-_aVx_7mtgzq8gsgAcLbFhQOvs"/>
        <IdCard firstname="Flora" lastname="Delfaud" gender="Female" height="175" birth="30-07-1992"picture="https://media-exp1.licdn.com/dms/image/C5603AQFs-rPCVcptIQ/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=a1rgaVRfzBqTAwXP2xFLVA1BgVaVDAbugpHPWBnqeLI"/>
        <h1>Greetings</h1>
        <Greetings lang="it" children="Giacomo" />
        <Greetings lang="de" children="Hanz"/>
        <Greetings lang="fr" children="Jacques"/>
        <h1>Random</h1>
        <Random min="50" max="100" />
        <Random min="1" max="10" />
        <h1>BoxColor</h1>
        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="128" g="255" b="0" />
      </div>
       
    );
  }
}

export default App;
