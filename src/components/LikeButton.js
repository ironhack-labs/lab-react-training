import React from 'react';
 
let arr = ['purple','blue','green','yellow','orange','red']

class LikeButton extends React.Component {

  state = {
    count: 0
  };
 
  handleIncrementClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleEscrementClick = () => {
      if (this.state.count >=1 )
    this.setState({
      count: this.state.count - 1
    });
  };


 
  render() {
    return (
      <div  >
        <div className=' color1' style={{backgroundColor: `${arr[([this.state.count]%6)]}`, width: "150px"}}>
            <h2>{this.state.count} Likes </h2>
        </div>
        <div  >
            <button className=' btn ' onClick={this.handleIncrementClick}>+</button>
            <button className='btn ' onClick={this.handleEscrementClick}>-</button>
        </div>
      </div>
    );
  }
}
 
export default LikeButton;