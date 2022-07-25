import React from 'react'


function Rating(props) {
    const {children} = props

    function stars(children){
        const numberOfStars = Math.round(children)
        let newstarString = "★".repeat(numberOfStars)

        while (newstarString.length < 5){
            newstarString += "☆"
        }

        return newstarString
    }

  return (

    <div>{stars(children)}</div>
  )
}

export default Rating