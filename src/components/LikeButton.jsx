// import React, {useState} from 'react';

// const LikeButton = () => {
//     const [likeNumber, setLikeNumber] = useState(0);

//     return (
//         <div>
//             <button onClick={() => setLikeNumber(likeNumber+1)} >{likeNumber} Likes</button>
//         </div>
//     )
// }

// export default LikeButton

import React, { Component } from 'react';
import './../views/LikeButton.css'

class LikeButton extends Component {
    state = {
        likeNumber : 0
    };

    render() {
        const {likeNumber} = this.state;
        const colors = ['purple','blue','green','yellow','orange','red'];
        const color = colors[likeNumber % colors.length];

        return (
            <div className="LikeButton">
               <button 
                    style={
                        {backgroundColor : color}
                    }
                    onClick={() => this.setState({likeNumber : likeNumber + 1})} 
                >
                    {this.state.likeNumber} Likes
                </button> 
            </div>
        )
    }
}

export default LikeButton


