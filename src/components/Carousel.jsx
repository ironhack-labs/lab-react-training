import React, { Component } from 'react'

export class Carousel extends Component {

    state = {
        index: 0
    }

    nextPhoto = () => {
if(this.state.index ===this.props.imgs.length-1) {
    this.setState ({index: 0});
}
else {
this.setState ({index: this.state.index +1});
console.log("The new index now is", this.state.index);
}
    }

    previousPhoto = () => {
        if(this.state.index ===0) {
console.log("We arrived at the beginning of the carrousel");
    console.log("The index is", this.state.index);
    console.log("The length of the array is", this.props.imgs.length);
    this.setState ({index: this.props.imgs.length});
    console.log("The new index now is", this.state.index);
}
else {
console.log("Previous photo clicked")
this.setState ({index: this.state.index -1});
console.log("The new index now is", this.state.index);
}
    }

    render() {
        return (
            <div>
            <img src = {this.props.imgs[this.state.index]} alt = "" />
                <button onClick = {(event) => this.previousPhoto()}> 
                PREVIOUS PHOTO
                </button>
                <button onClick = {(event) => this.nextPhoto()}> 
                NEXT PHOTO
                </button>

            </div>
        )
    }
}

export default Carousel
