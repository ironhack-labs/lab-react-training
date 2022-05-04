import { useState } from 'react'


const ClickablePicture = ({ img, imgClicked }) => {
    const [toggled, setToggled] = useState(false);

    return (
        <img src={toggled ? img : imgClicked} onClick={() => setToggled(prevToggled => !prevToggled)} />

    );
}
export default ClickablePicture