import React, { Component } from 'react'

class Carousel extends Component {
    constructor(props){
        super(props)
        this.state={
            displayedImg:this.props.imgs[0],
            index:0,
            images:this.props.imgs
        }
    }

    handleClick = (e) => {
        const direction = e.target.innerHTML
        const currentIndex = this.state.index
        const maxIndex = this.state.images.length - 1
        let newIndex = 0 

        if(direction === 'Left'){
            if(currentIndex > 0 ){
                newIndex = currentIndex - 1
            }else{
                newIndex = maxIndex
            }
        }else{
            if(currentIndex === maxIndex ){
                newIndex = 0
            }else{
                newIndex = currentIndex + 1
            }

        }
        this.setState({
            displayedImg: this.state.images[newIndex],
            index: newIndex
        })
    }


    render() {
        return (
            <div>
                <img src={this.state.displayedImg} alt="carousel" />
                <p className="control">
                    <button className="button is-large" style={{marginRight: '10px', marginTop: '20px'}} onClick={this.handleClick}>Left</button>
                    <button className="button is-large" style={{marginTop: '20px'}} onClick={this.handleClick}>Right</button>
                </p>     
            </div>
        )
    }
}

export {Carousel}