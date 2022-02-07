import React from 'react'

class LikeButton extends React.Component {
   

    state = {
        count: 0
    }

    likeClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }    
    
    render() {
        return (
            <div>
            <button className='btn btn-primary' onClick={this.likeClick}>{this.state.count}</button>
        </div>
        )
    }

}



export default LikeButton


