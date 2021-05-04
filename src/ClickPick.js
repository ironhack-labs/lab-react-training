import React from 'react';

class ClickPic extends React.Component {

    state = {
        img1: this.props.img,
        img2: this.props.imgClicked,
        clicked: false
    }

    clickHandler = () => {
        let img = '';
        this.state.img === this.state.img1 ?
            img = this.state.img2 :
            img = this.state.img1;

        this.setState((state, props) => ({
            clicked: !state.clicked
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    {this.state.clicked ? <img src={this.state.img2} alt="" /> : <img src={this.state.img1} alt="" />}
                </button>

            </div>
        )
    }
}

export default ClickPic;