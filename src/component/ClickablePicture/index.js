import React from "react";
import './StyleClikable.css'

const ClickablePicture = (props) => {
    const { img, imgClicked } = props;
    console.log("the img", img)

    const [ clickImg, setClickImg ] = React.useState(false);

    const toggleClick= () => {
            setClickImg( !clickImg ? true : false )
    }
    return(
        <div className="ClickablePicture" onClick={toggleClick}>
            {clickImg
            ?
            <img src={imgClicked} alt="icon-glasses"/>
            :
            <img src={img} className="ProfilePictures"  alt="icon-profile"/>
            }
        </div>
    )
};

export default ClickablePicture;