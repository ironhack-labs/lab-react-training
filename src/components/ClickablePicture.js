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
            <div className='picCont'>
                <img src={this.state.pic} onClick={
                    (e) => {
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
                }/>
            </div>
        )

    }

}

export default ClickablePicture;