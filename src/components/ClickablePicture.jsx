import React from 'react';
import './ClickablePicture.css';

export default class ClickablePicture extends React.Component {
    contructor(props) {
        this.props = props
    }
    state = {
        prop: 'nonClicked'
    }


    addGlasses() {
        if (this.state.prop === 'clicked') {
            this.setState({
                prop: 'nonClicked'
            });
        } else {
            this.setState({
                prop: 'clicked'
            });
        };
    }

    render() {
        if (this.state.prop === 'nonClicked') {
            return (
                <button className="addGlasses" onClick={() => this.addGlasses()}><img src={this.props.img}></img></button>
            );
        } else {
            return (
                <button className="addGlasses" onClick={() => this.addGlasses()}><img src={this.props.imgClicked}></img></button>
            );
        }

    }
}