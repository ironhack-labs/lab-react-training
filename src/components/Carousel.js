import React from 'react'

class Carousel extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            index: 2,
            imgsrc: props.imgs[2]
        }
    }

    handleClick = (side) => {
        let newIndex;
        if (side === 'left') {
            if (this.state.index > 0 ) {
                newIndex = this.state.index - 1;
                this.setState({
                    index: newIndex,
                    imgsrc: this.props.imgs[newIndex]
                })
            }
        } else {
            if (this.state.index < this.props.imgs.length - 1 ) {
                newIndex = this.state.index + 1;
                this.setState({
                    index: newIndex,
                    imgsrc: this.props.imgs[newIndex]
                })
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick('left')}>Left</button>
                <img src={this.state.imgsrc} alt="cool" style={{width: '100px'}}></img>
                <button onClick={() => this.handleClick('right')}>Right</button>
            </div>
        )
    }
}


export default Carousel;