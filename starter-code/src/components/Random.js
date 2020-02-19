import React from "react";
const Random =({min, max}) =>{

    let random = Math.ceil(Math.random()* max)

    return (
        <div>
            <p>Random value between {min} and {max} => {random}</p>
        </div>
    )

}
export default Random