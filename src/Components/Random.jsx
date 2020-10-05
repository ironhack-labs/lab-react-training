import React from 'react'

const Random = (props) => {
        return <React.Fragment><p>Random value between 1 and 6: {Math.floor(Math.random()* (6 - 1) + 1)}</p>
        <p>Random value between 1 and 100: {Math.floor(Math.random()* (100 - 1) + 1)}</p></React.Fragment>
}

export default Random;