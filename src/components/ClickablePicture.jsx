import React from 'react'


export default class ClickablePicture extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clickedBg: true,
            backPic: this.props.img
        }
    }



    changeBack = () => {
        if (this.state.clickedBg) {
            this.setState({backPic: this.props.imgClicked, clickedBg: false})
        } else {
            this.setState({backPic: this.props.img, clickedBg: true})
        }
    }

    render() {
        console.log(this.props.img)
        return (
            <div className="avatar" style={{background: `url(${this.state.backPic}) no-repeat center center / cover`}} onClick={this.changeBack}></div>
        )
    }

}