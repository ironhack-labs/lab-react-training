function Greetings (props) {
let greeting="";
if(props.lang==="de"){greeting="Hallo"
}
if(props.lang==="fr"){greeting="Bonjour"
}
if(props.lang==="es"){greeting="Hola"}
if(props.lang==="en"){greeting="Hello"}
    return ( 
<div>
   <p>{greeting} {props.children}</p>
</div>
    
     );
}

export default Greetings;