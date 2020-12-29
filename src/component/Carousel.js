import React, { Component } from 'react'

export class Carousel extends Component {
        state={
                index:0,
                imgs: [...this.props.imgs]
        };
        clickBtnPrev = ()=> {
                this.setState({
                        index: this.state.index<=0 ? this.state.imgs.length-1 : this.state.index-1
                })
                
        };
        clickBtnNext =() => {
                this.setState({
                        index: this.state.index>=this.state.imgs.length-1 ? 0 : this.state.index+1
                })
        }
        render() {
                return (
                        <div className="Carousel">
                                <button className="prev" onClick={this.clickBtnPrev}>Prev</button>
                                <img src={this.state.imgs[this.state.index]} alt="img"/>
                                <button className="next" onClick={this.clickBtnNext}>Next</button>
                        </div>
                )
        }
}

export default Carousel
