import './index.css';
import React from 'react';
import maxence from "../../assets/images/maxence.png"
import maxenceglasses from "../../assets/images/maxence-glasses.png"

class ClickablePicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          whichImg: maxence,
        };
      }

    changeImg = () => {
        if(this.state.whichImg === maxence) {
            this.setState({
                whichImg: maxenceglasses
            })
        } else {
            this.setState({
                whichImg: maxence
            })
        }
    }

    render() {
        return (
            <div>
               <img className='ClickablePicture' src={this.state.whichImg} onClick={this.changeImg} alt=''/>

            </div>
        );
    }
}

export default ClickablePicture;