// importaciones
import React from "react";

//Exportación de la función
export default function IdCard(props){
    

    return(
        <>
        
        
               
                    <article >
                        <ul>
                            <li>Last Name: {props.lastName}</li> 
                            <li>First Name: {props.firstName}. </li>
                            <li>Gender {props.gender}</li>
                            <li>Height {props.height}</li>
                            <li>Birth {props.birth.toString()}</li>
                            <li><img src={props.picture}/></li> 
                        </ul>
                    </article>
                
            
        
        </>
    )

}

//función