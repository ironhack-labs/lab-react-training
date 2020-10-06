import React, { Component } from 'react'

const divStyle = {
    margin: "20px",
};

let a = 0;

class ClickablePicture extends Component {

    state = {
        firstImg : this.props.img,
    };

    swicth = () => {
        if (a === 0) {
            // console.log("image normale");
            this.setState({
                firstImg: this.props.imgClicked,
            })
            a = a + 1;
        } else if (a === 1) {
            // console.log("image lunette");
            this.setState({
                firstImg: this.props.img,
            })
            a = a - 1;
        }
    };

    render() {
        return (
            <div onClick={this.swicth}>
            <div style={divStyle}><img src={this.state.firstImg} alt="" width="20%"/></div>
            </div>
        )
    }
}


export default ClickablePicture;