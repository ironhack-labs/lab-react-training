import React, {Component} from 'react'
import '../random/Random.css'
// min: A number
// max: A number

class Random extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber : 0
    }
  }

  componentDidMount(){
    const {min, max} = this.props;
    const number = Math.floor(Math.random() * max) - min;
    this.setState({
      randomNumber : number
    })
  }

  render(){
    const {randomNumber} = this.state;
    const {min, max} = this.props;

    return (
      <div className="Random">
        Random value between {min} and {max} => {randomNumber} 
      </div>
    )
  }
}

export default Random