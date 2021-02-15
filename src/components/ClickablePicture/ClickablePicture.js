import React from 'react';

function ClickablePicture({ img ,imgClicked}) {
    const [show, setShow] = React.useState(true);

    
  
    return (
    <div>
      <div>
      {show ? <img src={img} alt="" />: <img src={imgClicked}/>}
      <button onClick={() => setShow(!show)}>click</button>
      </div>
    </div>
  );
}

export default ClickablePicture;
