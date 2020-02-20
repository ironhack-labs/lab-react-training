import React from 'react'
function Likes() {
let     counter= 0
let     colors= ["purple", "blue", "green", "yellow", "orange", "red"]
const  updateCounter = (e) => {
    console.log("sí entro");
    
      counter++
      let random = Math.floor(Math.random() * colors.length);
    }
    let random = Math.floor(Math.random() * colors.length);

    return (
        <div>
        <button onClick={updateCounter} style={{ 
            backgroundColor: colors[random] }}
            >
        {counter} Likes
      </button>
        </div>
    
    )
    
}
export default Likes
