import React from 'react'

function ClickablePicture(props) {
        function image(){
                let img = document.getElementById('img');
               
                if(img.getAttribute("src") === props.img){
                        img.setAttribute("src",props.imgClicked)
                }else{
                        img.setAttribute("src",props.img)
                }
        }
        return (
                <div className="addImg">
                        <img src={props.img} onClick={image} id="img" alt="img"/>
                </div>
        )
}

export default ClickablePicture
