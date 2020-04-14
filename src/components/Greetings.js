
import React, { Component } from 'react';

class Greetings extends Component{
    render(){
        const {lang, children} = this.props;

        return(
            <div>
                <div className="content-greeting">{lang} {children}</div>
            </div>
        )
    }
    
}

export default Greetings;