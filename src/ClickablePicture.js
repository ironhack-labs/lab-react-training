import React, { Component } from 'react';

class ClickablePicture extends Component {

    state = {
        clicked: false,
        pic: 'empty'
    }

    render({img, imgClicked}=this.props) {

        if (this.state.pic === 'empty') {
            this.setState({
                pic: img
            })
        }

        return (
            <div >
                <img src={this.state.pic} onClick={
                    () => {
                        if(this.state.clicked) {
                            return this.setState({
                                clicked: false,
                                pic: img
                            })
                        } else {
                            return this.setState({
                                clicked: true,
                                pic: imgClicked
                            })
                        }
                    }
                } alt="Pic"/>
            </div>
        )

    }

}

export default ClickablePicture; 