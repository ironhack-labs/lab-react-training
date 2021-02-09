import React from 'react';
import Rating from '../../components/Rating/Rating';

class RatingClass extends React.Component{
  getRating(children){
    let stars = Math.round(children)
    const ratingStar = {
      0: '☆☆☆☆☆',
      1: '★☆☆☆☆',
      2: '★★☆☆☆',
      3: '★★★☆☆',
      4: '★★★★☆',
      5: '★★★★★'
    }
    return ratingStar[stars]
     
  }
  render(){
    return (
      <div className='margin'>{this.getRating(this.props.children)}</div>
    )
  }
}

export default RatingClass