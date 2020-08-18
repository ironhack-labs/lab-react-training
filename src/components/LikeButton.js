import React from 'react';

class LikeButton extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            index: 0,
            count: 0,
            buttonStyle: {backgroundColor: "purple"}
        }
    }

    handleClick = () => {
        let colors = ['purple','blue','green','yellow','orange','red']
        let newIndex;
        this.state.index < colors.length-1? newIndex = this.state.index + 1 : newIndex = 0;
        let newColor = colors[newIndex]
        this.setState({
            count: this.state.count + 1,
            index: newIndex,
            buttonStyle: {backgroundColor: newColor}
        })
    }
    
    render() {
        return (
            <button onClick={this.handleClick} style={this.state.buttonStyle}>{this.state.count} {
                this.state.count > 1 ? "Likes": "Like"
            }</button>
        )
    }
}

export default LikeButton