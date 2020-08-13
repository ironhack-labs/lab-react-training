import React, { Component } from 'react'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            imgs: props.imgs[0]
        }
    }

    handleLeftChange = () => {
        let leftIndex = this.state.index -1;
        let leftPic = this.props.imgs[leftIndex]

        
        this.setState(() => ({
            index: leftIndex,
            imgs: leftPic
        }))

       /*  if (this.state.index >= -1) {
            this.setState(() => ({
                index: 3,
                imgs: this.props.imgs[3]
            }))
        }  */
            /* this.setState(() => ({
                index: leftIndex,
                imgs: leftPic
            })) */
    }

    handleRightChange = () => {
        let rightIndex = this.state.index +1;
        let rightPic = this.props.imgs[rightIndex]

        /* if(this.state.index <= 4) {
            this.
        } */

        this.setState(() => ({
            index: rightIndex,
            imgs: rightPic
        }))
    }

    render(){
        return (
            <div>
                <button onClick={this.handleLeftChange}>Left</button>
                        <img key={this.state.index} src={this.state.imgs} /> 
                <button onClick={this.handleRightChange}>Right</button>
            </div>
        )
    }
    
}

export default Carousel
