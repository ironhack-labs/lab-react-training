import React from 'react';
import Random from '../../components/Random/Random';

class RandomClass extends React.Component{
  getRandom(min, max){
    let random = Math.floor(Math.random() * max) + min
    return random
  }
  render(){
    return(
      <article className='container-row'>
        <p>
          <span>Random value between {this.props.min} and {this.props.max} =&gt; {this.getRandom(this.props.min,this.props.max)}</span>
        </p>
      </article>
    )
  }
}

export default RandomClass


