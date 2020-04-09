import React, {Component} from 'react'
import '../random/Random.css'
// min: A number
// max: A number

class Random extends Component {
  avg(props){
    const result = props.min+props.max
    return result
  }
  render(){
    const {min, max} = this.props;
    return (
      <div className="Random">Random value between {min} and {max} => {this.avg(this.props)} </div>
    )
  }
}

export default Random