import React, { Component } from 'react'


export class Carousel extends Component {
    state = {
        counter: 0,
        img: this.props.imgs[0]
      };
      handleClick = () => {
        let position = this.state.counter +1
          if(position < this.props.imgs.lenght -1){
              this.setState({
                  counter:position,img:this.props.imgs[position]
              })
          } else {
              return
          }
   
    }
    render() {
        return (
            <div>
           <button onClick={this.handleClick}> next </button>   
            <img alt="oh"  src={this.state.img}/>    
            <button> </button>   
            </div>
        )
    }
}

export default Carousel
