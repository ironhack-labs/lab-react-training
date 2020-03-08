/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';



class Dice extends Component {
  constructor(){
    super();
    this.state = {
      img: '/img/dice-empty.png'
    };
  
    this.changeDice = this.changeDice.bind(this);
  }

  changeDice(){
    const numberRandom = Math.floor(Math.random() * (6) + 1);
  
    setTimeout(() => 
      this.setState( () => ({
        img: `/img/dice${numberRandom}.png`
      })), 1000)
  };
   
  render() {
    // const { img,
    //         imgClicked,
    //         } = this.props;

    const imgStyle = {
        width: '18em',
        height:'auto'
    };

    
    return( 
      <div className="App">
        <img style={imgStyle} src={this.state.img} onClick={this.changeDice}/>
        {/* <img style={ {display: this.state.active ? 'none' : 'block'}} onClick={this.glasses} src={img} />
        <img style={ {display: this.state.active ? 'block' : 'none'}} src={imgClicked} onClick={this.glasses}/> */}
      </div>
    );
  }
};


export default Dice;