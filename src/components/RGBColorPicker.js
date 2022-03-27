import { useState } from "react";
import  {RGBSingleColorPicker} from "./RGBSingleColorPicker";

export const RGBColorPicker = () => {
    const [red,  setRed]   = useState(0);
    const [green,setGreen] = useState(0);
    const [blue, setBlue]  = useState(0);


    function single(color, value){

        switch (color){
            case "red" :
                return setRed(value)
            case "green" : 
                return setGreen(value)
            case "blue" :
                return setBlue(value)
            default:
                break;
        }
    };


    return(
        <div className="RGBALL"> 
            <div >
                <RGBSingleColorPicker color="red"    single={ single } />
                <RGBSingleColorPicker color="green"  single={ single } />
                <RGBSingleColorPicker color="blue"   single={ single } />
            </div>
       
            <div className="result" style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
            <p>rgb : {red},{green},{blue}</p>
            
            </div> 
        </div>
    )
}; 