import { Component } from 'react';

class ClickablePicture extends Component {


    state = {
        glassesOn: false
    }

    handleClick() {
        this.setState((state) => ({ 
            glassesOn: !state.glassesOn 
        }))
    }

    render() {
        return (
            <img src={this.state.glassesOn ? this.props.imgClicked : this.props.img} role="button" alt="clickablePicture" onClick={()=> this.handleClick()}/>
        )
    }
}

export default ClickablePicture