import React, { Component, Fragment } from 'react';
class Dice extends Component {
   
    state = {
        initial : "/img/dice-empty.png",
        status : true
     
    }

    Click = () =>{
 
    this.setState({
        status : !this.state.status
    })
   

    this.state.status ?  setTimeout( this.setState({
        initial: '/img/dice6.png'
    }), 10)
    :
    
    setTimeout(this.setState({
        initial: '/img/dice-empty.png'
    }), 1000)
    
       
    
 
    }
   
    render() {
        return(
          <>
         <div >
            <img onClick = {this.Click} className = "img-Dados" src =  {this.state.initial}/>
         </div>
          
          </>
        )
    }
}
export default Dice