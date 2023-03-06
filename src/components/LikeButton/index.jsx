import React from 'react';
import './index.css'

class LikeButton extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            count: 0,
            bgColor: 'purple'
        }
    }

    getColor = ()=>{
        const arrColor = ['purple','blue','green','yellow','orange','red']
        const currentColorIndex = arrColor.indexOf(this.state.bgColor);
        const nextColorIndex = (currentColorIndex + 1) % arrColor.length;
        return arrColor[nextColorIndex];
        
    }

    handleIncrementCLick = ()=>{
        this.setState( {
            count: this.state.count + 1,
            bgColor: this.getColor()

        })
    }

    render () {
        return (
            <div className='LikeButton' >
            <button onClick={this.handleIncrementCLick} style={{backgroundColor:`${this.state.bgColor}`}}>
            {this.state.count} Likes</button>
            </div>
        )
    }
}
export default LikeButton;