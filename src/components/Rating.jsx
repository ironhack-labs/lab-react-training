import React from 'react'

function Rating(props) {
    const {children} = props;


  const rounded = Math.round(children) 
    return (
    <div>
        {'★'.repeat(rounded) + '☆'.repeat(5-rounded)}
    </div>
    ) 
}

export default Rating