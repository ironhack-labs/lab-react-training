import React from 'react';
import './greetings.css';
class Greetings extends React.Component {
    constructor(props){
super(props);
this.state = {
    message:[{lang:'en', text:'Hello'},
{lang:'de', text:'Hallo'},
{lang:'fr', text:'Bonjour'},
{
lang:'es', text:'Hola'
}]
}
    }
render() {
return this.state.message.map((msg,index) => {
    if(this.props.lang === msg.lang){
        return (
            <div className="greeting" key={index}>
                <h2>{msg.text} {this.props.children}</h2>
            </div>
                );
    } else {
        return null;
    }
  
})
}
}

export default Greetings;