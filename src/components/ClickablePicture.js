import React from 'react'

 class ClickablePicture extends React.Component {
    state = {
        clicked: false
    }
    clickHandler = () => {
        this.setState((state, props) => {
            return {
              clicked: !state.clicked
            }
        })
    }
    render() {
        return (
            <img onClick={this.clickHandler} 
            src={this.state.clicked ? 
            this.props.imgClicked 
            : 
            this.props.img} alt="sunglasses on/off"/>
        )
    }
}

export default ClickablePicture;