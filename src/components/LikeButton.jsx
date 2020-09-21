import React from 'react'

let num = 0
let color = ['#455eb4', 'salmon', 'yellowgreen', 'darkslateblue', 'orange', 'tomato']

export default class LikeButton extends React.Component {

    state = {
        count: 0,
        background: color[num]
    }

    addLikes = () => {
        let newCount = this.state.count + 1
        num++

        if (num === 6) {
            this.setState({background: this.background})
            num = 0
        } else {
            this.setState({background: this.background})
        }

        this.setState({
            count: newCount,
            background: `${color[num]}`
        })
    }

    render() {
        return (
            <button className="like-me" style={{background: this.state.background}} onClick={() => this.addLikes}> {this.state.count} Likes</button>
        )
    }

}