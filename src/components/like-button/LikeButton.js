import { Component } from "react";

class LikeButton extends Component {

    state = {
        likes : 0
    }

    colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'white', 'cyan', 'magenta', 'beige']

    onCount = (amount) => {
        this.setState((state, props) => {
            const likes = state.likes + amount
            this.bgColor = {backgroundColor : this.colors[(Math.floor(Math.random(this.colors) * this.colors.length))]}
            return{
                likes
            }
        })
    }
   
    render(){

        const {likes} = this.state

        let thumbs = ''

        if (likes >= 0){
            thumbs = "fa fa-thumbs-up"
        } else {
            thumbs = "fa fa-thumbs-down"
        }

        return(
            <div>
                <button className="btn btn-light border m-5" onClick={() => { this.onCount(1) }} onAuxClick={() => { this.onCount(-1) }} style={this.bgColor}><i className={thumbs}></i> {likes} Likes</button>
            </div>
        );
    }
};

export default LikeButton;