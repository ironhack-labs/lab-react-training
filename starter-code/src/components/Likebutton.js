import React from 'react'

class Likebutton extends React.Component{
    state = {
        like: 0
    }

    addLike = () => {
        this.setState({like: this.state.like + 1})
    }

    render(){
        return (
            <div>
                <button onClick={this.addLike}>Add like {this.state.like}</button>
            </div>
        )
    }
    }

export default Likebutton
