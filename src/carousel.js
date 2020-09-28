import React from 'react';
import './App.css';

class Carousel extends React.Component{
  state = {
    index: 0,
    image:this.props.imgs[0]
  };

  handleClickRight = () => {
      let newIndex;
    switch(this.state.index){
        case 0:
            newIndex = 1;
            break;
        case 1:
            newIndex = 2;
            break;
        case 2:
            newIndex = 3;
            break;
        case 3:
            newIndex = 0;
            break;
        default:
            break;
    }
    const newImage = this.props.imgs[newIndex];
    this.setState({
        index: newIndex,
        image: newImage,
    });
    };

    handleClickLeft = () => {
        let newIndex;
        switch(this.state.index){
            case 0:
                newIndex = 3;
                break;
            case 1:
                newIndex = 0;
                break;
            case 2:
                newIndex = 1;
                break;
            case 3:
                newIndex = 2;
                break;
            default:
                break;
        }
        const newImage = this.props.imgs[newIndex];
        this.setState({
            index: newIndex,
            image: newImage,
        });
        };

  render() {
    return (
      <div>
        <button className="carousel-button" onClick={this.handleClickLeft}><span role="img" aria-label="left">👈🏻</span></button>
        <img className="carousel-pic" style={{width: 400}} src={this.state.image} alt=""/>
        <button className="carousel-button" onClick={this.handleClickRight}><span role="img" aria-label="right">👉🏻</span></button>
      </div>
    );
  }
}

export default Carousel