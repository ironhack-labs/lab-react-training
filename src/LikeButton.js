import React from 'react'

export default class LikeButton extends React.Component {

    state =  {
        counter1: 0,
        counter2: 0
    }

    clickHandler1 = () => {
        this.setState((state, props) => ({
            counter1: state.counter1 + 1,
        }))
    }

    clickHandler2 = () => {
        this.setState((state, props) => ({
            counter2: state.counter2 + 1
        }))
    }

    render() {
        return (
            <div style={{}}>
                <button onClick={this.clickHandler1} style={{margin:'10px',padding:`10px 50px`, borderRadius: '5px'}}>{this.state.counter1} Like</button>
                <button onClick={this.clickHandler2} style={{margin:'10px',padding:`10px 50px`, borderRadius: '5px'}}>{this.state.counter2} Like</button>
            </div>
        )
    }
}
