import React from 'react';


//State represents information that the components are in charge of
//State is always an object
//State changes affect the component rendering
//State can only exist on Class Components

class LikeButton extends React.Component {
    
    state = {
        likes: 0,
    };

    handleIncrementCounter = () => {
        this.setState((previousState) => {
            return {
                likes: previousState.likes + 1,
            };
        });
    };

    handleIncrementColor = () => {
        const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        let random = Math.floor(Math.random() * (colorArray.length - 0 + 1) + 0)
        const divStyle = {
            backgroundColor: `${colorArray[random]}`,
        };
        return divStyle;
    }
    
  




    render() {
        const {likes} = this.state;
       
        return (
            <>
                <button id="btn" style={this.handleIncrementColor()} onClick={this.handleIncrementCounter}>{likes} Likes</button>
            </>
        )
    }
}

export default LikeButton;

