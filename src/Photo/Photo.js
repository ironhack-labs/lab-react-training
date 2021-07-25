import { Component } from "react";

class Photo extends Component{
    
    state = {
        photo: true,
    }
    render(){
        return(
            <div onClick = {() => this.setState( {photo: !this.state.photo} )}>
                {this.state.photo ? 
                <img src = "./public/img/persons/maxence.png"></img> :
                <img src = "./public/img/persons/maxence-glasses.png"></img>}
            </div>
        );
    }
}

export default Photo