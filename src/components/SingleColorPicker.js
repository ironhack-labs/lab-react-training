import { useState } from "react";

const SingleColorPicker = ({color, value, onChange}) => {

    return <div>
        <span>{color}</span> <input type="number" value={value} onChange={onChange}></input>
    </div>
}

export default SingleColorPicker;