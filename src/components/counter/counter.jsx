import { useState } from "react";


function Counter () {
  // const state = useState(0)
  // const num = state[0]
  // const setNum = state[1]
  let [num, setNum] = useState(0);
  let otherNum = 0; 
  return ( 
    <div id="counter">
      <div>num: {num}</div> 
        <button 
          onClick={() => {
            setNum(num + 1)
          }}
        > inc. state using setNum
        </button>
        <div>otherNum: {otherNum}</div>
        <button 
          onClick={() => {
            otherNum++
          }}
        > inc. state of otherNum
        </button>
    </div>
  );

}

export default Counter;