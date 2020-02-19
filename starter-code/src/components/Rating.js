import React from 'react'
import { render } from 'react-dom'

function Rating (props) {

let rating = Math.round(props.children)
let render = []

for (let i = 0; i <= rating - 1; i++)
render.push('★')

}

for (let i = render.length; i < 5; i++){
    render.push('☆')
}

return (
    <div>
        <h1>{render.join(" ")} </h1>
    </div>
)

// eslint-disable-next-line no-unreachable
export default Rating;