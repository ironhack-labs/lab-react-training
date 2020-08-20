import React from 'react'

function LikeButton(props){

    let myStyle = {
        width: "100px",
        height: "auto",
        borderRadius: "5px",
        backgroundColor: "#455EB5",
        color: "white",
        padding: "20px",
        fontSize: "15px",
        margin: "10px"
    }
   
    
    let nbrLikes = 0;             

    function handleClick(event) {
        event.preventDefault();
        console.log("Btn clicked");
        nbrLikes += 1;
    }
       

    return ( 
        <div >
            <button onClick={handleClick} style={myStyle}>{nbrLikes} Likes</button> 
        </div>       
        
    )


}

export default LikeButton;
