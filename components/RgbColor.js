import React from 'react';

function RgbColor({onChangeColor}){
    return (
        <div>
            <form onSubmit={onChangeColor} className="color-form-container">
                <TextField type="number" variant="filled" color="primary" label="red" name="red"/>
                <TextField type="number" variant="filled" color="primary" label="green" name="green"/>
                <TextField type="number" variant="filled" color="primary" label="blue" name="blue"/>
                <Button type="submit"> Submit </Button>
            </form>
        </div>
    )
}

export default RgbColor