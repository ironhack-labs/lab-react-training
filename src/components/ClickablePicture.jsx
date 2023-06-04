import { useState } from 'react';


function ClickablePicture(props) {
    const [glass, setGlasses] = useState(false);
    const man = props.img;
    const glasses = props.imgClicked;

    return (
        <div className="clickPic">
            {glass ? <img src={man} alt="man"onClick={
                () => { setGlasses(current => !current) }} />
                :<img src={glasses} alt="man with glasses"onClick={
                () => { setGlasses(current => !current) }} />
            
            }
            
            
        </div>


    )


}


export default ClickablePicture;