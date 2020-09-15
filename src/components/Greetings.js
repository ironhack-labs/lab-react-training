import React, {Component} from "react"

class Greetings extends Component{
  render (){
    let text = ""
    switch(this.props.lang){
      case "de":
        text = "Hallo"
      break;
      case "es":
        text = "Hola"
      break;
      case "fr":
        text = "Bonjour"
      break;
      case "en":
      default:
        text = "Hello"
      break;
    }
    return (
      <div className="box">{text} {this.props.children}</div>
    )
  }
}

export default Greetings