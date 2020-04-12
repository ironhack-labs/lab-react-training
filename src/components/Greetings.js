import React, { Component } from 'react';

class Greetings extends Component{
    render(){
        const lang =  ["de" , "en", "es", "fr"];
        const {lang, children} = this.props;

        return(
            <div>
                <div></div>
                <div></div>



            </div>

            )
    }
    
}

export default Greetings;