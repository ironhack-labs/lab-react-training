import React from 'react'

export default class LikeButton extends React.Component {

    state =  {
        counter: 0,
    }

    clickHandler = () => {
        this.setState((state, props) => ({
            counter: state.counter + 1,
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} style={{margin:'10px',padding:`10px 50px`, borderRadius: '5px'}}>{this.state.counter} Like</button>
            </div>
        )
    }
}
