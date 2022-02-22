import { useState } from "react";

const Carousel = ({images}) => {    

    const [picture, setPicture] = useState(0)

     return(
         <article>
             <img src={images[picture]} />
             <button onClick={() =>setPicture((newPicture) => picture < 3 ? newPicture + 1 : newPicture = 0   )}>+</button>
             <button onClick={() =>setPicture((newPicture) => picture > 0 ? newPicture -1 : newPicture =3)}>-</button>
         </article>
         
     )
       
   

}

export default Carousel

