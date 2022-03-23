import React, { Component} from 'react'
import './LikedButton.css'



class LikedButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: 'yellow'
        }
        this.colorBg= ['yellow','red', 'blue', 'green','pink','orange','purple','grey','brown']
    }

    handleColorAndCounter = ()=> {
        let randomColor = Math.round(Math.random()* (this.colorBg.length-1)+1)
        this.setState({
            count: this.state.count + 1,
            color: this.colorBg[randomColor]
        })

    }
    

        
    render(){

        return (
            <div>
              <button
              className='likedButton'
                style={{ backgroundColor: `${this.state.color}` }}
                onClick={() => {
                  this.handleColorAndCounter();
                }}
              >
               { this.state.count ===1 
               ? <div> {this.state.count} Like </div> 
               : <div> {this.state.count} Likes </div>}
              </button>
            </div>
        )
    }

}

export default LikedButton

