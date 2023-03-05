import React from 'react';
import './index.css'

class LikeButton extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            count: 0,
            color: 'red'
        }
    }

    

    render () {
        return (
            <div className='LikeButton'>

            </div>
        )
    }
}
export default LikeButton;