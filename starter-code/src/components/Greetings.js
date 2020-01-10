import React from "react";
import "./Greetings.css";

class Greetings extends React.Component{
  render(){
    const greet = this.props.lang === "de"?'Hallo':'Bonjour';
    return(      
      <div className="Greetings">
        <h1>{greet} {this.props.children}</h1>
      </div>
    );
  }
}

export default Greetings;
