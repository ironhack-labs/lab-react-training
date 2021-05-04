import React from 'react';

class Carousel extends React.Component {

    state= {
        imgNumber: 0,
    }

    changeImgLeft = () => {
        console.log('clickedL');
        console.log(this.state.imgNumber);
        
        if (this.state.imgNumber === 0) {
            this.setState({imgNumber: this.props.imgs.length -1})
        } else {
            this.setState((state) => ({
                imgNumber: state.imgNumber - 1,
            })
        )
        }        
    }

    changeImgRight = () => {
        console.log('clickedL');
        console.log(this.state.imgNumber);
        
        // if (this.state.imgNumber === 0) {
        //     this.setState({imgNumber: this.props.imgs.length -1})
        // } else {
            this.setState((state, props) => ({
                imgNumber: (state.imgNumber + 1) % (props.imgs.length),
            })
        )
        // }        
    }

    render() {

        return <div>
            <button onClick={this.changeImgLeft}>Left</button>
            <img src={this.props.imgs[this.state.imgNumber]}></img>
            <button onClick={this.changeImgRight}>Right</button>
        </div>
    }
}

export default Carousel