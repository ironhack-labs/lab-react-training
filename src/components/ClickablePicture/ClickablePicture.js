import React from 'react'

export default class ClickablePicture extends React.Component {

    state = {
        glasses: false,
        image: this.props.img
    }

    pictureHandler = () => {
        // console.log('clicked')
        this.setState((state, props) => ({
           glasses : !this.state.glasses
        }))
    }

    render() {
    return (
        <div>
            <img onClick={this.pictureHandler} src={this.state.glasses? this.props.imgClicked : this.props.img} alt=""/>
        </div>
    )
    }
}
