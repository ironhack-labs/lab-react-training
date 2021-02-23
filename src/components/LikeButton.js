import React from 'react'

class LikeButton extends React.Component {
    //console.log(state.counter)
    
    state = {
        counter: 0, 
        backgroundColor: 'purple'
    }

    clickHandler = () => {
        const colors = ['purple','blue','green','yellow','orange','red']; 
        this.setState((state, props) =>({
            counter: state.counter +1,
            backgroundColor: colors[Math.floor(Math.random()*colors.length)]


            
            
        })) 
        console.log('THIS ONE', this.state.counter)
    }

    render() {
        
       // const styleButton = colors[counter]

        return (
            <button style={{backgroundColor: this.state.backgroundColor}}onClick={this.clickHandler}> {this.state.counter} Likes</button>
        )
    }
}


export default LikeButton