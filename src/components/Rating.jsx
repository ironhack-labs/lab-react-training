import React from 'react'

function Rating(props) {
  
    const { children } = props;

    function stars (children) {
        if (children >= 4.5) return '★★★★★'
        else if (children >= 3.5) return '★★★★☆'
        else if (children >= 2.5) return '★★★☆☆'
        else if (children >= 1.5) return '★★☆☆☆'
        else if (children >= 0.5) return '★☆☆☆☆'
        else if (children >= 0) return '☆☆☆☆☆'
    }
  
    return (
        <p>{stars(children)}</p>
  )
}

export default Rating