import React from 'react';
import { render } from '@testing-library/react';

export default class ClickablePicture extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        image: this.props.img
    }    

    toggleImg = () => {
        if ( this.state.image === this.props.img) {
            this.setState({image: this.props.imgClicked })
        } else {
            this.setState({image: this.props.img })
        }
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.toggleImg}>
                    <img src={this.state.image} alt=""/>
                </a>
            </div>
        )
    }
        
}