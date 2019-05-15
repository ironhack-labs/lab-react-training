import React from 'react';

const ClickablePicture =(props)=>{
let {img, imgClicked, clickPhoto, click_pic}= props;

const a = function (){
    if (click_pic){return imgClicked} 
    else {return img}
}

let imagen = a();
    return (

        <div> 
            <img width='200px' height ='200px' src={imagen} onClick ={clickPhoto} />
        </div>
    )


}

export default ClickablePicture;