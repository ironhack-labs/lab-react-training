import React from 'react';

function ClickablePicture ({img, imgClicked}) {
    //faltaria toggle con las dos fotos
    const [image, setImage] = React.useState(img)

    const handleImage = () => {
        setImage((picture) => picture = imgClicked) 
    }

    return (
        <div>
            <img src={image} alt='DriverCard' onClick={handleImage} />
        </div>
    )
}

export default ClickablePicture;