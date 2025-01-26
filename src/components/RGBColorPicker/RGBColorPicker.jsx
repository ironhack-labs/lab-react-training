import { useState } from 'react';
import './RGBColorPicker.css'
import SingleColorPicker from './SingleColorPicker';
function RGBColorPicker () {
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)
    
    return (
        <div className='color-picker'> 
        <div className='single-color'>
        <SingleColorPicker
        color="r"
        value={red}
        onChange={ (e) => {setRed(e.target.value)}  }/>
        <SingleColorPicker
        color="g"
        value={green}
        onChange={ (e) => {setGreen(e.target.value)}  }/>
        <SingleColorPicker
        color="b"
        value={blue}
        onChange={ (e) => {setBlue(e.target.value)}  }/>
        </div>
      
            <div className='rgb-picker'>
                <div className='box-color' style={{backgroundColor:`rgb(${red},${green},${blue})`}}></div>
                <p htmlFor="red">rgb ({red},{green},{blue})</p>
            </div>
            
        </div>
    )
}

export default RGBColorPicker;