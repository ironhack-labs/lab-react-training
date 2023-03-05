import "./index.css"
import React, { Component } from 'react';
import maxence from "../../../assets/images/maxence.png"
import maxenceglasses from "../../../assets/images/maxence-glasses.png"


class ClickablePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicked: maxence,
        };
      }

    changeImg = () => {
        if(this.state.clicked === maxence) {
            this.setState({
                clicked: maxenceglasses
            })
        } else {
            this.setState({
                clicked: maxence
            })
        }
    }

    render() {
        return (
            <div>
               <img className='ClickablePicture' src={this.state.clicked} onClick={this.changeImg} alt=''/>
               {/* <img src={maxence} alt=""></img> */}
            </div>
        );
    }
}

export default ClickablePicture;