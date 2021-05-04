import React from 'react'

class Carousel extends React.Component{
    state = {
        imgs: this.props.imgs,
        counter: 0
    }

    render() {
        console.log(this.state.imgs)
        return(
            <div className="Carousel">
              <button onClick={() => this.setState({...this.state, counter: this.state.counter < 1 ? this.state.counter = 3 : this.state.counter - 1 })}> Left </button>

                <img src={this.state.imgs[this.state.counter]} alt="Crousel"/>

                <button onClick={() => this.setState({...this.state, counter: this.state.counter > 2 ? this.state.counter = 0 : this.state.counter + 1})}> Right </button>
            </div>
        )
    }
}

export default Carousel


