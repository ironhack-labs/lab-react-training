import React from 'react'

class LikeButton extends React.Component {
  
    state = {
      counter: 0,
      liked: false
    }
    
    clickHandler = () => {

      this.setState((state) => ({
        counter: state.counter + 1
      }));
    }
   
    render() {
      //console.log(this.state);

      return (
        <div className="App" >
          <header className="App-header">
            <button onClick={this.clickHandler}> {this.state.counter} Likes</button>
          </header>
        </div>
      );
    }
  }

export default LikeButton;
