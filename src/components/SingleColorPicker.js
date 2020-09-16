import React, {useState} from 'react'

const SingleColorPicker = (props) => {

    const initialStyle = () => {
        let R,G,B;
        R = props.color === "R" ? props.value : 0
        G = props.color === "G" ? props.value : 0
        B = props.color === "B" ? props.value : 0
        return { backgroundColor : `rgb(${R}, ${G}, ${B})`}
    }
    
    let [style, setStyle] = useState(initialStyle());

    const changeColorValue = (event) => {
        props.onChange(event.target.value)
        let R,G,B;
        R = props.color === "R" ? event.target.value : 0
        G = props.color === "G" ? event.target.value : 0
        B = props.color === "B" ? event.target.value : 0

        setStyle({ backgroundColor : `rgb(${R}, ${G}, ${B})`})
    }

    return (
        <div>
            <div style={style}>
            &nbsp;
            </div>
            <label htmlFor={props.color}>{props.color}</label>
            <input name={props.color} type="number" min={0} max={255} value={props.value} onChange={changeColorValue} />            
        </div>
    )
}

export default SingleColorPicker
