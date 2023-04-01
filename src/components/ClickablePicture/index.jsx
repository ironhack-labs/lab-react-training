/*JSX DE LA INTERACCIÓN 9*/

import './index.css';
import React from 'react';

class ClickablePicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.img,
        };
    }
    handleChangeImage = () => {
        this.state.image === this,props.img
        ? this.setState({
            image: this.props.imgClicked,
        })
        : this.setState({
            image: this.props.img,
        });
    };
    render() {
        return (
            <div className="ClickablePicture">
                <img 
                onClick={this.handleChangeImage}
                src={this.state.image}
                alt="..."
                 />
            </div>
        );
    }
}
export default ClickablePicture;