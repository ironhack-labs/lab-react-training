import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {

    const [showGlases, setShowGlases] = useState(false)
    return (
        <img onClick={() => setShowGlases(!showGlases)} src={showGlases ? img : imgClicked} alt="img boy" />

    );
}

export default ClickablePicture;

// const ClickablePicture = ({ img, imgClicked }) => {
//     const [picture, setPicture] = useState(img);

//     const pictureChange = () => {
//         if (picture === img) {
//             setPicture(imgClicked);
//         } else {
//             setPicture(img);
//         };
//     };

//     return <button className="clickable-picture" onClick={pictureChange}><img src={picture} alt="img" /></button>

