import React from 'react'

class LikeButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <button onClick={this.handleClick}>
                    {this.state.count}Like
            </button>
    }
}

export default LikeButton