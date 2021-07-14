import React from 'react'

class likeButton extends React.Component {

    state = {
        counter: 0,
        liked: false
    }
    clickHandler = () => {
        this.setState((state) => ({
          counter: state.counter + 1
        }));
    }

    // likeHandler = () => {
    //     this.setState(state => ({
    //       liked: !state.liked
    //     }))
    // }

    render() {
        console.log(this.state);
      
        return (
            <>
            {/* <h1>{this.state.liked ? 'I like it 👍' : 'I do not yet like it 👎'}</h1>
            <button onClick={this.likeHandler}>{this.state.liked ? 'Unlike' : 'Like'}i</button> */}
            <button onClick={this.clickHandler}>Click me for {this.props.name}👇 {this.state.counter}</button> 
            </>
        );
      }
}
export default likeButton;