import React from 'react';

export default function Carousel(props) {
  function left() {
    console.log('left');
    console.log(props.imgs[0]);
/*     for (let i = 0; i <= props.imgs; i++) {

    } */
  };

  const caru = props.imgs.map(item => {


  })



  console.log(props)
  return (
    <div>
      <button onClick={left}>Left</button>
            <img src={props.imgs} alt=""/>
      <button >Right</button>
    </div>
  );
}

{
  /*         <img src={this.state.imgs} alt=""/> */
}

