import React,{Component} from 'react'  
import '../assets/css/LikeButton.css'

class LikeButton extends Component {
    state = {
      like: 0
    };

    clickIncrement = () => {
        this.setState({like: this.state.like+1 })
        
    };

  render() {

    return (
        <div className="Like">
            <button onClick={() => this.setState({ like: this.state.like + 1})}> {this.state.like} Likes</button>
        </div>
    )
  }
}

export default LikeButton