import { useState } from "react";

function Carousel ({images}){
    
    const [indexArray, setIndexArray] = useState(0)

    const handleClickRight = () => {
         setIndexArray(prevIndexArray=> (indexArray +1) % images.length)
          //siempre da de resto el numero por el que lo dividas hasta llegar a un numero dibisible que entonces dara cero 
    }
    const handleClickLeft = () => {
        setIndexArray(prevIndexArray=> (indexArray -1 + images.length) % images.length)
         
   }
    
    

return(
<div className="container row-cols-10">
    <button onClick={handleClickLeft}  className="btn btn-primary  col-2">Left</button>
    <img className="col-md-4" src={images[indexArray]} alt="" />
    <button onClick={handleClickRight} className="btn btn-primary col-2">Right</button>
</div>
)


}
export default Carousel