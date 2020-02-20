import React, {Component} from "react";
import 'bulma/css/bulma.css'

class Greetings extends Component{
    

    render(){
        return(
            <input className="input" type="text" placeholder={this.props.children} lang={this.props.lang}/>
        )
    }
}

export default Greetings;