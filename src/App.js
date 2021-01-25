import React, { useState } from 'react';
import "./index.css"

function LikeButton() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);
  const [count_1,setCount_1] = useState(0);

//   const colors =['purple','blue','green','yellow','orange','red'];


  return (

    <div>
       <div className="It"> 
      <p>Iteration 8 </p>
      </div>
      <button className="color"onClick={()=> setCount(count + 1 )}>
        Likes {count}
      </button>
      <button className="color_1"onClick={()=> setCount_1(count_1 + 1 )}>
        Likes {count_1}
      </button>
      <div className="It_1"> 
      <p>Iteration 9 </p>
      </div>
     
      </div>

   
  );
}

export default LikeButton;

function ClickablePicture() {


  return (
    <div >
      <img src="https://mecheng.ucl.ac.uk/wp-content/uploads/2018/07/Cossin-Estelle-200px-x-300px.jpg"/>
    </div>
  )
}
// export default ClickablePicture;