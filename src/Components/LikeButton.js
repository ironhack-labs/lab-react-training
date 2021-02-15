import React from 'react'

export default class LikeButton extends React.Component {

    state = {
        colorbg: ['green','purple','grey','blue','orange','red', 'black', 'pink'],
        count: 0
    }

    countButton = () =>{
        let newCount = this.state.count;
        this.setState({
            count: this.state.count + 1
        })
        console.log(newCount)
    }
    render() {
    const colorChange = (this.state.colorbg[this.state.count])
    return (
        <div>
            <button onClick={this.countButton} style={{backgroundColor: `${colorChange}`}}>{this.state.count} Likes</button>
        </div>
    )}
}