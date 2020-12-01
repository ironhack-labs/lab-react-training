import React from 'react'

function Rating(props) {
const number = Math.round(props.children)
return <div>{stars(number)}</div>
}
function stars(number) {
    return '★'.repeat(number) + '☆'.repeat(5 - number)
}
export default Rating
