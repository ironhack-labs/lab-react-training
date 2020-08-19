import React from 'react';

const SingleColorPicker = (props) => {
        return (
            <div className="colorPicker">
                <div style={{
                    backgroundColor: props.currentColor, 
                    border:"1px solid black",
                    width:"50px", 
                    height: "50px"}}></div>
                <div>{props.color}</div>
                <input onChange={(event) => props.onChange(event.currentTarget.value, props.color)} type="number" defaultValue={0} max={255}></input>
            </div>
        )

}

export default SingleColorPicker