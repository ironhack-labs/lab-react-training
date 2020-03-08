import React, { Component } from 'react';



class Carousel extends Component {
  constructor(){
    super();
    this.state={
      index:0
    }
  
    this.changeCarouselLeft = this.changeCarouselLeft.bind(this);
    this.changeCarouselRight = this.changeCarouselRight.bind(this);
  }

  changeCarouselLeft(){
    let indexCarousel = this.state.index;

    if(this.state.index !== 0){
      indexCarousel = indexCarousel-1;
     }else{
       indexCarousel = 2;
    }
    

    this.setState( () => ({
      index: indexCarousel
    }));
  };

  changeCarouselRight(){
    let indexCarouselRight = this.state.index;

    if(this.state.index !== 2){
       indexCarouselRight = indexCarouselRight+1;
    }else{
      indexCarouselRight = 0;
    };
    
    this.setState( previousState => ({
      index: indexCarouselRight
    }));
  };
   
  render() {
    const { imgs } = this.props;

    const imgStyle = {
        width: '18em',
        height:'auto'
    };

    
    return( 
      <div className="App">
        <button onClick={this.changeCarouselLeft} >Left</button>
        <img style={imgStyle} src={imgs[this.state.index]} />
        <button onClick={this.changeCarouselRight}>Right</button>
        {/* <img style={ {display: this.state.active ? 'none' : 'block'}} onClick={this.glasses} src={img} />
        <img style={ {display: this.state.active ? 'block' : 'none'}} src={imgClicked} onClick={this.glasses}/> */}
      </div>
    );
  }
};


export default Carousel;