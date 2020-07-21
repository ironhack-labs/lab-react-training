import React, { Component } from 'react';


class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nbLimit: props.limit,
          index: 0,
        };
      }


render() {
    const cases=[]
    for (let index = 1; index <= this.state.nbLimit; index++) {
    cases.push(index)
    }

    return (
        <div className="cases">
{cases.map((e,i)=><div style={{height:"50px", width:"50px", backgroundColor:i%2===0? "red":""}}>{e}</div>)}
</div>
    );
  }
}

export default Carousel;
