import React from 'react'

let colors = ['purple','blue','green','yellow','orange','red'];

class LikeButton extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            color: colors[Math.floor(Math.random()*colors.length)]
        }
    }
    
    countIncrease = () => {
        this.setState({
            count: this.state.count + 1,
            color: colors[Math.floor(Math.random()*colors.length)]
        })
    }

    render () {
        let styles = {
            backgroundColor: this.state.color  
        }

        return <button onClick={this.countIncrease} style={styles}>{this.state.count} Likes</button>
    }
}


export default LikeButton;

// colors[Math.floor(Math.random()*colors.length)]