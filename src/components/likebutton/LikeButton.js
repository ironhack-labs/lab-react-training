import { Component } from 'react';

class LikeButton extends Component {

    state = {
        likesCount: 0,
        colors: ['purple','blue','green','yellow','orange','red']
    }
    render() {

        return ( 
            
            <button className="btn btn-sm btn-primary"
            onClick={() => {
                this.setState({ likesCount: this.state.likesCount + 1})
            }}>Likes {this.state.likesCount}

            </button>
        )
       
    }
}

export default LikeButton