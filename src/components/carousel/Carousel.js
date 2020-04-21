import React, {Component} from 'react'
import '../carousel/Carousel.css'


class Carousel extends Component {
  state = {
    index : 0
  }
  nextImg = (imgs) => {
    let {index} = this.state;
    if(index>=imgs.length-1){
      index = -1
    } else {
      this.setState({
        index : index + 1 
      })
    }

  }

  previousImg = () => {
    let {index} = this.state;
    if(index===0){
      index = -1
    } else {
      this.setState({
        index : this.state.index - 1 
      })
    }

  }

  render(){
    const {index} = this.state;
    const {imgs} =this.props;
    return(
      <div key={index}>  
        <button className="previous round" onClick={this.previousImg}>&#8592;	</button>
        <img className="carousel" src={imgs[index]} alt="Carousel" onClick={this.changeImg} />
        <button className="next round" onClick={()=>this.nextImg(imgs)}>&#8594;</button>
      </div>
    )
  }
}

export default Carousel

