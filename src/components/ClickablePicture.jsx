
import React from 'react';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prop: 'notClicked'
        }
    }



    addGlasses() {
        if (this.state.prop === 'clicked') {
            this.setState({
                prop: 'notClicked'
            });
        } else {
            this.setState({
                prop: 'clicked'
            });
        };
    }

    render() {
        if (this.state.prop === 'notClicked') {
            return (
                <div>
                    <button className="ClickablePicture" onClick={() => this.addGlasses()}><img src={this.props.img}></img></button>
                </div>
            );
        } else {
            return (
                <div>
                    <button className="ClickablePicture" onClick={() => this.addGlasses()}><img src={this.props.imgClicked}></img></button>
                </div>
            );
        }
    }
}

export default ClickablePicture