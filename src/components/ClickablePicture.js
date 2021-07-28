import React, { Component } from "react";

class ClickablePicture extends Component {

    state = {
        img: this.props.img,
        status: true
    }

    onClick = () => {
        this.setState({
            status: !this.state.status
        })

        this.state.status ? this.setState({
            img: this.props.img
        }) : this.setState({
            img: this.props.imgClicked
        })


    }



    render() {
        return (
            <>

                <img onClick={this.onClick} src={this.state.img} />


            </>
        )
    }
}

export default ClickablePicture