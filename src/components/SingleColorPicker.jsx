import { useState } from "react";

function SingleColorPicker(props) {
    /*
    color: A string that is either "r", "g" or "b"
    value: A number between 0 and 255
    onChange: A method that is triggered when the input is changed
    */

    function handleChange(event) {
        props.onChange(event.target.value);

    }


    return (
        <div>

            <label htmlFor="colorNumber" style={{ textTransform: 'uppercase' }}>{props.color} </label>
            <input type="number" id="colorNumber" onChange={handleChange} />
        </div >
    )
}

export default SingleColorPicker;