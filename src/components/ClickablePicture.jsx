import React, { useState } from 'react'

function ClickablePicture (props) {

    const [state,setState] = useState ({
        glasses: false,
        displayedImg: props.img,
        })
    
    const setGlasses=()=> {
        if(state.glasses) {
            setState({glasses:false});
            setState({displayedImg:props.img});
        }
        else  {
            setState({glasses:true});
            setState({displayedImg:props.imgClicked});
        }
    }

        return (
            <div>
                <img onClick={setGlasses} src={state.displayedImg} alt="glasses on click"/>
            </div>
        );
    

    
}

export default ClickablePicture; 