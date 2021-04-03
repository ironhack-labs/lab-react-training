import React from 'react';
import '../assets/css/SingleColorPicker.css'

const SingleColorPicker = (props) => {
    return(
        <div className="SingleColorPicker">
            <label for='color'>{props.name}</label>
            <input
                id='color'
                min='0' 
                type='number'
                value={props.value}
                onChange={props.onChange}
            />
            <br />
        </div>
    )
}

export default SingleColorPicker;