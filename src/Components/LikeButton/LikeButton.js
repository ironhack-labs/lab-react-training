import React, {Component} from 'react'
import './LikeButton.css'


class LikeButton extends Component {
    state = {
        counter: 0,
        bgColor: undefined
    }
    
    increment= (e) => {
        let num = Math.floor(Math.random() * (Number(5) - Number(0)) + Number(0));
        let col = ['purple','blue','green','yellow','orange','red']
        this.setState({
          counter: this.state.counter + 1,
          bgColor: col[num]
        });
    };

 
    render(){
        return(
            <div className="likes">
                <button style={{backgroundColor: this.state.bgColor}} onClick={this.increment}> {this.state.counter} likes </button>
            </div>
        )
    }


}


export default LikeButton