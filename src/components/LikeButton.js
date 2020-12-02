import React from 'react'

class LikeButton extends React.Component {

    // let colors = ['purple','blue','green','yellow','orange','red']
    // function getRandom ( (color) => {
    //     var random = Math.floor(Math.random()*this.length);
    //     if (color && random in this) {
    //         return this.splice (random,1)[0];
    //     }
    //     return this[random]
    // })  

    state = {
        clickCount: 0,
    }

    clickHandler = () => {
        this.setState((state, props) => ({
            clickCount: (state.clickCount + 1 )
        }));
        console.log(this.state.clickCount)
    }

    render() {
        return (
            <div>
                <button class="likeButton"  
                // style = {{this}}
                onClick= {this.clickHandler}> {this.state.clickCount} Likes </button>
            </div>
        )
    }
}


export default LikeButton;

// {backgroundColor : getRandom(colors))}