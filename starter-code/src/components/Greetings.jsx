import React, { Component } from 'react';
import Greeting from './Greeting'

class Greetings extends Component {
  state = {
    input: [
    {
      lang: "ee",
      greeting: "Tere ",
      name: "Juuli"
    },
    {
      lang: "lv",
      greeting: "Sveiki ",
      name: "Renars"
    }
  ]}

  render() { 
    return (  
    <div>
      {this.state.input.map((s, index) => {
        return (<Greeting key={index} text={s.greeting} name={s.name} />
        )
      })}
    </div>
    );
  }
}
 
export default Greetings;