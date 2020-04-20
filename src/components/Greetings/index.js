import React, { Component } from 'react';
import "./style.css";

class Greetings extends Component {

    convertLang(param) {
        switch(param.lang) {
          case 'de':
            return 'Hallo';
          case 'fr':
            return 'Bonjour';
          default:
            return 'Hello'
        }
      }

    render(){
        const { lang, children} = this.props;
        
        return ( 
            <div className="box">
                <p> 
                    {this.convertLang({lang})} 
                    &nbsp;
                    {children}
                </p>
            </div>
        )
    }
}

export default Greetings;