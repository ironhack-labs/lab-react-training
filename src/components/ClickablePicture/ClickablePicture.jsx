import { Component } from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component  {    

    state= {
        img: this.props.img
    }

    changePhoto = () => {
        const { img, imgClicked } = this.props;
        if (this.state.img === img) {
            this.setState({ img: imgClicked });
        } else {
            this.setState({ img: img });
        }        
    }

    render () {
        return <img className='ClickablePicture' onClick={this.changePhoto} src={this.state.img} alt='Maxence'></img>;
    }    
};

export default ClickablePicture;