import React from 'react'

class Carousel extends React.Component {

    state = {
        indexImgs: 0 
    }

    clickLeft = () => {
        if(this.state.indexImgs > 0)
        this.setState((state, props) => ({
            indexImgs : state.indexImgs -1

        }))
    }

    clickRight = () => {
        if (this.state.indexImgs < 3) {
            this.setState((state, props) => ({
                indexImgs : state.indexImgs + 1
            }))
        }
    }

    render () {
        return (
            <div>
                <img style={{width:'100px'}} src={this.props.imgs[this.state.indexImgs]} alt="img"/>
                <button onClick={this.clickLeft}>Left</button>
                <button onClick={this.clickRight}>Right</button>
            </div>
           
        )
    }

}

export default Carousel