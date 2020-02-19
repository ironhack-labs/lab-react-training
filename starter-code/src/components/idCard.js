import React from "react";

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
 return (
     <div className="idCard" style={{border: '1px black solid', display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
     <div><img src={picture} alt={firstName} style={{height: "100%"}}/></div>
     <div style={{display: "flex", flexDirection: "column", margin: "10px"}}>
     <p><b>First name:</b>{firstName}</p>
     <p><b>Last name:</b>{lastName}</p>
     <p><b>Gender:</b>{gender}</p>
     <p><b>Height:</b>{height}</p>
     <p><b>Birth:</b>{birth.toLocaleString()}</p>
     </div>
       
     </div>
 )
}

export default IdCard
/*

       
       
      
       
*/