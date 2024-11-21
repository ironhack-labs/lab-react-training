import React from 'react';

function Greetings(props){
    let greetingOne = "";
    let greetTwo = "";
    if(props.lang === "de"){
        greetingOne = "Hello " + props.children;
    }
    if(props.lang === "fr"){
        greetTwo = "Borjon " + props.children;
    }
    return(
        <>    
        
            {greetingOne}
            {greetTwo}
        </>
        
        
        
        
        

    )
}


export default Greetings