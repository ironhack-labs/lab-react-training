import React from 'react'
import './ClickablePicture.css'

class ClickablePicture extends React.Component {
    constructor(props) {
        super(props);
        this.togglePic = this.togglePic.bind(this);
        this.state = {
            img : this.props.img,
            picState: true
        }
    }

    togglePic() {
        if(this.state.picState) {
            this.setState({
                picState: false,
                img: this.props.imgClicked
            })
        } else {
            this.setState({
                picState: true,
                img: this.props.img
            })
        }
    }

    render() {
        return (
            <div className='img-container'>
                <img src={this.state.img} className='clickable-picture' onClick={this.togglePic} alt=''/>
            </div>
        );
    }
}

export default ClickablePicture;