import React from 'react';

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfLikes: 0,
        };
    }

    increaseCounter = () => {
        this.setState((prevState, props) => {
            return {numberOfLikes: prevState.numberOfLikes + 1};

        });
    };

render() {
    return(
        <>
        {/* <p>{this.state.numberOfLikes}</p> */}
        <button onClick={this.increaseCounter}> {this.state.numberOfLikes} LIKES</button>
        </>
    );
    
}
}




export default LikeButton;