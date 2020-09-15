import React, {Component} from "react"

class Rating extends Component{
  render(){
    let stars = ""
    for(let i=0; i<5; i++){
      if(Math.round(this.props.children) > i){
        stars += "★"
      }else{
        stars += "☆"
      }
    }
    return(
      <div>
        {stars}
      </div>
    )
  }
}

export default Rating