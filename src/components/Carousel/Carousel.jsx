import React, { Component } from "react";
import './Carousel.css'

import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'


class Carousel extends Component {
    state = {
        index: 0,
        max: this.props.images.length -1,
        mainImg: this.props.images[0]
    }


    changePicRight = () => {
        this.setState((prevState) =>{
            if(prevState.index !== this.state.max){
                return{
                    mainImg: this.props.images[prevState.index + 1],
                    index: prevState.index + 1
                }
            } else {
                return {
                    mainImg: this.props.images[0],
                    index: 0
                }
            }
        })
    }

    changePicLeft = () => {
        this.setState((prevState) => {
            if(prevState.index !== 0) {
                return {
                    mainImg: this.props.images[prevState.index - 1],
                    index: prevState.index - 1
                }
            } else {
                return {
                    mainImg: this.props.images[this.state.max],
                    index: this.state.max
                }
            }
        })
    }

    render(){
        return(
            <div className="order">
                <div className="car-container">
                    <div id="left" onClick={this.changePicLeft} className="size-arrows">
                        <img src={left}></img>
                    </div> 
                    <div>
                        <img src={this.state.mainImg}></img>
                    </div>
                    <div id="right" onClick={this.changePicRight} className="size-arrows">
                        <img src={right}></img>
                    </div>
                </div> 
            </div>

        )
    }

}

export default Carousel