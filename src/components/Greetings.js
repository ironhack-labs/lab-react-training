import React, { Component } from 'react';

class Greetings extends Component{
    sayHello = (lang) => {
        let output= '';
        switch (lang){
            case 'de': output="Hallo"; break;
            case 'en': output="Hello"; break;
            case 'es': output="Hola"; break;
            case 'fr': output="Bonjour"; break;
            default: output="default"; break;
        }
        return output;
    }

    render(){
        const {lang,children}= this.props;
        return(
            <div className="">
                <p>{this.sayHello(lang)} {children}</p>
            </div>
        );
    }

}

export default Greetings;

