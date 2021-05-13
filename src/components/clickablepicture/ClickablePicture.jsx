import React from 'react'

function ClickablePicture(props) {
    const {img, imgClicked} = props;
    const [imageChanged, setImage] = React.useState(img);

    function imageClicked() {
        (imageChanged===img)?(setImage(imgClicked)):(setImage(img))
    }

    return (
        <div>
            <br></br>
            <img onClick={imageClicked} src={imageChanged} alt="Clickable picture"></img>
            <br></br>
       </div>
    )
}

export default ClickablePicture
