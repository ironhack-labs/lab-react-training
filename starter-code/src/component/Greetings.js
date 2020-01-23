import React, { Component } from 'react'

export default class Greetings extends Component {
    
    
    render() {
        let greetingsString;
        if(this.props.lang === "de"){
            greetingsString="Hallo "  + this.props.children
        }
        else{
            greetingsString="Bonjour " + this.props.children
        }

        return (
            <div id="greetings">
              {greetingsString} 
            </div>
        )
    }
}
