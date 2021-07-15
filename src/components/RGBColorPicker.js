import React from 'react';
import { TextField, Button } from '@material-ui/core';

function RGBColorPicker({onChangeColor}) {
    return (
        <div>
            <form onSubmit={onChangeColor} className="color-form-container">
                <TextField type="number" variant="filled" color="primary" label="red" name="red"/>
                <TextField type="number" variant="filled" color="primary" label="green" name="green"/>
                <TextField type="number" variant="filled" color="primary" label="blue" name="blue"/>
                <Button type="sumbit">Submit</Button>  
            </form>
        </div>
    )
}

export default RGBColorPicker
