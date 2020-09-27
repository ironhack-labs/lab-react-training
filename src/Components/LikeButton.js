import React from 'react';

class LikeButton extends React.Component {
    state = {
        index: 0,
        count: 0
    }
    handleClick = () => {
        let newIndex = this.state.index + 1;
        this.setState ({ index: newIndex , count: this.state.count + 1})
    }


    render() {
 
       return (
            <div>
                <button onClick={this.handleClick}> {this.state.count} {
                this.state.count > 1 ? "Likes": "Like"}
                </button>
            </div>
        )
    }
}
   
export default LikeButton