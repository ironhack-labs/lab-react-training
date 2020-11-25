import { useState } from 'react'




    const ClickablePicture = (props) => {
        const [noGlasses, setGlasses] = useState(true);
    
        return (

            <div>
                <img style={{margin : "5px"}}
                onClick={() => setGlasses(!noGlasses)}
                src={noGlasses ? props.img : props.imgClicked}>
            </img>
            </div>
            
        )
            
}
export default ClickablePicture