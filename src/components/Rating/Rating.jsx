import React from 'react'

const Rating = (props) => {
  const starNumber = Math.ceil(props.children)

        if (starNumber === 0 ) {
            return (<p>☆☆☆☆☆</p>)
        }
        if (starNumber === 1 ) {
            return (<p>★☆☆☆☆</p>)
        }
        if (starNumber === 2 ) {
            return (<p>★★☆☆☆</p>)
        }
        if (starNumber === 3 ) {
            return (<p>★★★☆☆</p>)
        }
        if (starNumber === 4 ) {
            return (<p>★★★★☆</p>)
        } if (starNumber === 5 ) {
            return (<p>★★★★★</p>)
        }
}

export default Rating
