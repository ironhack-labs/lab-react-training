import { render } from '@testing-library/react'
import React from 'react'

export default class LikeButton extends React.Component {

    state = {
        colorbg: ['purple','blue','green','yellow','orange','red'],
        count: 0
    }



    countFunc = () =>{
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
            <button onClick={this.countFunc} style={{backgroundColor: `${colorChange}`, padding: '10px',margin: '10px', fontSize: '24px'}}>{this.state.count} Likes</button>
        </div>
    )}
}
