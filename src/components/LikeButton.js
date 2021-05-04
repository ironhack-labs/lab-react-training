import React from 'react';
import '../components/LikeButton.css'

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.backgroundColors= ['red', 'orange', 'yellow', 'green', 'blue']
    }

    state = {
        counter: 0,
    }


    addLike= () => {

        this.setState(
            (state) => ({
                counter: state.counter + 1,
            })
        )
        
    ;
    }
    render() {
        return (               
                <button className="likeButton" onClick={this.addLike} style={{backgroundColor: this.backgroundColors[this.state.counter % this.backgroundColors.length]}}><span>{this.state.counter}</span> Likes</button>
        )
    }
} 

export default LikeButton;