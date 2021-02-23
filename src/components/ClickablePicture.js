import React, { Component} from 'react';

class ClickablePicture extends Component {
    state = {
        clicked : false
    }

    imageClick = () => {
       // const imageClicked = {this.props.imgClicked}
        this.setState((state, props) =>({
            clicked : !state.clicked
        }))
    }
    render () {
        console.log(this.state.clicked)
        return (

            <img src={this.state.clicked === false ? this.props.img : this.props.imgClicked} onClick={this.imageClick} alt="img"/>
        )
    }
}


export default ClickablePicture