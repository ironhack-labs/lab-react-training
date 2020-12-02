import React, { Component } from 'react';

export default class ClickablePicture extends Component {
    state = {
        imgUrl: this.props.img,
        click: false
    }

    imageClick = () => {
        // console.log('Click');

        this.setState({
            imgUrl: this.state.click === false ? this.props.imgClicked : this.props.img,
            click: !this.state.click
        });

        // if (this.state.click === false) {
        // this.setState({
        //     imgUrl: this.props.imgClicked,
        //     click: true
        // });
        // } else {
        //     this.setState({
        //         imgUrl: this.props.img,
        //         click: false
        //     });
        // }
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <img src={this.state.imgUrl} alt={this.props.name} onClick={this.imageClick} />
            </div>
        )
    }
}


