import { useState } from "react";

function ClickablePicture(props) {
    const { img, imgClicked } = props;

    const [image, setImage] = useState(img);

    const handleImgChange = () => {
        setImage(image === img ? imgClicked : img);
    }

    const buttonStyle = {
        margin: "0",
        padding: "0",
        border: "0",
        width: "25%"
    }

    const imgStyle = {
        width: "100%"
    }

    return (
        <div>
            <button style={buttonStyle} onClick={handleImgChange}>
                <img style={imgStyle} src={image}/>
            </button>
        </div>
    );
}

export default ClickablePicture;