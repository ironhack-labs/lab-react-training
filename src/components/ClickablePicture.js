import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        clicked: false
    }

    toggleImg() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <img alt="person" src={!this.state.clicked ? this.props.img : this.props.imgClicked} onClick={() => this.toggleImg()} />
        )
    }
}

export default ClickablePicture;