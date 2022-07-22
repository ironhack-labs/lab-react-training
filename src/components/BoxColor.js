import React from 'react';

const BoxColor =({r, g, b}) => {
    const backgroundColor =`rgb(${r}, ${g}, ${b})`
    return (
        <div className="box-color" style={{backgroundColor}}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}
export default BoxColor;

// Create a BoxColor component that displays a rectangle with a background color based on props. For this, you will need to add inline styles (documentation).

// The component should take 3 props:

// r: A number between 0 and 255 representing the amount of red
// g: A number between 0 and 255 representing the amount of green
// b: A number between 0 and 255 representing the amount of blue