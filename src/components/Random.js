import React from 'react'

const Random = (props) => {
    const {min, max} = props
    return (
    <div><p>Random value between 1 and 6 =&gt; {Math.floor(Math.random() * max) + min} </p></div>
    )
}

export default Random