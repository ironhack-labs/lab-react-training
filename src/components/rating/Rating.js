import React, {Component} from 'react'
import '../rating/Rating.css'


class Rating extends Component {

  render(){
    const {stars} = this.props
    const numOfStars = Math.round(stars)

    const array = []
    for(let i=0; i<5; i++){
      if(i<numOfStars){
        array.push(<span>☆</span>)
      }
      else{
        array.push(<div>☆</div>)
      }
    }

    return(
      <div className="rating" key={stars}>
        {array}
      </div>

    )
  }
}

export default Rating