import './ClickablePicture.css';
import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(!state);
    }

    return (
        <>
            <div className="clickable-picture">
                <img src={state ? imgClicked : img} alt="person" onClick={handleClick} />
            </div>
        </>
    )
}

export default ClickablePicture;