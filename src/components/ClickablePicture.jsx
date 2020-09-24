import React, {Component} from 'react';

class ClickablePicture extends Component {
    constructor (props) {
        super(props);
        this.clicked = false;
        this.state = {
            img: this.props.img,
        }
    }

    handleClick() {
        const {img, imgClicked} = this.props;
        if (this.clicked === false) {
            this.setState({img: imgClicked});
        } else {
            this.setState({img: img});
        }

        this.clicked = !this.clicked;
    }

   render() {
       return (<img onClick={() => this.handleClick()} className="ClickablePicture" src={this.state.img}></img>)
    }
    
}

export default ClickablePicture
