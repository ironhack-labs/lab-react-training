import React from 'react'

function Random(props) {
    const {min, max} = props ;
     function random () {
        return  Math.floor(Math.random() * (max - min) + min);
     }
     return (
    <div> 
        <p> Randon value between {min} and {max} = {random()}</p>
    </div>
     )

}

export default Random