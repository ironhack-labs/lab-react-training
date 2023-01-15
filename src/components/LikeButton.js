import React, { useState } from "react";
 
function LikesButton() {
  const [count, setCount] = useState(0);
 
  function increaseCount(count) {
    if (count % 1 === 1) {
      return <button className="purple">{count} Likes</button>;
    } else if (count % 2 === 1) {
      return <button className="blue">{count} Likes</button>;
    } else if (count % 3 === 1) {
        return <button className="green">{count} Likes</button>;
    } else if (count % 4 === 1) {
        return <button className="yellow">{count} Likes</button>;
    } else if (count % 5 === 1) {
        return <button className="orange">{count} Likes</button>;
    } else {
      return <button className="red">{count} Likes</button>;
    }
  }

  return (
    <div className="Counter">

      <span onClick={() => setCount(count + 1)}> {increaseCount(count)} </span> 
 
    </div>
  );
}
 
export default LikesButton;