import React from 'react';

class Carousel extends React.Component {

    
    
    state = {
        imageNum: 0
    }
    btnRight(){
        if(this.state.imageNum === 3){this.setState({imageNum: 0})}
        else{this.setState({imageNum: this.state.imageNum +1})}
    }
    btnLeft(){
        if(this.state.imageNum === 0){this.setState({imageNum: 3})}
        else{this.setState({imageNum: this.state.imageNum -1})}
    }
    
    render() {
     
    return (
      <div className="carousel">
        <button onClick={()=> this.btnLeft()}>  {`<-- Left`}  </button>
        <img src= {process.env.PUBLIC_URL + this.props.imgs[(this.state.imageNum)]} alt="" />
        <button onClick={()=> this.btnRight()}> {`Right -->`}  </button>
      </div>
    );
  }
}

export default Carousel;