import React, { useState } from 'react';



function Carousel(props) {
    
    
    const img1= props.images[0];
    const img2= props.images[1];
    const img3= props.images[2];
    const img4 = props.images[3];


    const [img, setImg] = useState(img1);


//is it efficient? no, but it works...
    function right() {
         if (img === img1){
               return setImg(img2);
            } else if (img === img2) {
               return setImg(img3);
            }else if(img === img3){
              return  setImg(img4);
            }else if(img === img4){
               return setImg(img1);
            }   
        }
    function left() {
        
            if (img === img1){
               return setImg(img4);
            } else if (img === img2) {
               return setImg(img1);
            }else if(img === img3){
              return  setImg(img2);
            }else if(img === img4){
               return setImg(img3);
            }    
    }


    
    return (
        <div>
            <img src={img} alt="imgPic" />
            <p><button onClick={left}>Left</button>
                <button onClick={right}>Right</button>
            </p>
        
        </div>
    )
   
    

}
export default Carousel;