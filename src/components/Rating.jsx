import React from 'react'

function Rating(props) {
const {children} = props

    function star(children) {
        if(children < 0.49) return "☆☆☆☆☆"
        else if(children <= 1.49) return "★☆☆☆☆"
        else if(children <= 2.49) return "★★☆☆☆"
        else if(children <= 3.49) return "★★★☆☆"
        else if(children <= 4.49) return "★★★★☆"
        else if(children > 4.49) return "★★★★★"
    }

  return (
    <div>
        {star(children)}
    </div>
  )
}

export default Rating