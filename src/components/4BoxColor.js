import React from 'react'

const Color = (props) => {
    const style = {
        padding: '15px',
        border: '2px solid black', 
        color: 'white',
        lineHeight: '5px',
        marginTop: '15px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: `rgb(${props.red},${props.green},${props.blue})`,
        maxWidth: '600px'
    }

    let red, green, blue, hex
    if (props.red > 255 || props.red < 0 || props.green > 255 || props.green < 0 || props.blue > 255 || props.blue < 0) {
        return (
            <div>
                <p>Invalid color code</p>
            </div>
        )
    } else {
        red = (props.red).toString(16)
        green = (props.green).toString(16)
        blue = (props.blue).toString(16)

        if (red.length === 1) 
            red = "0" + red
        if (green.length === 1)
            green = "0" + green
        if (blue.length === 1)
            blue = "0" + blue
        
        hex = "#" + red + green + blue

        //source: https://css-tricks.com/converting-color-spaces-in-javascript/
    }

    return (
        <div style={style}>
            <p>rgb({props.red},{props.green},{props.blue})</p>
            <p>{hex}</p>
        </div>
    )
}

export default Color 