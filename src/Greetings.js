import React, { Component } from 'react'


export class Greetings extends Component {
    render() {
let greeting  
        if (this.props.lang === "de"){
            greeting= `Hallo ${this.props.children}`
        } else if (this.props.lang === "en") {
                greeting= `Hello ${this.props.children}`
            } else if(this.props.lang === "es") {
                greeting= `Hola ${this.props.children}`
            } else if(this.props.lang === "fr") {
                    greeting= `Bonjour ${this.props.children}`
            }
        

    return (
        <div className="greetings">
       {greeting} 
        </div>
    )
}
}


export default Greetings