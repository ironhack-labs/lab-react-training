import React from 'react'

function Random(props) {
    const {min, max} = props;

    let random = () => {
        let range = max - min + 1;
        return Math.floor(Math.random() * range) + min;
    }
  return (
    <div>
        <p>{random()}</p>
    </div>
  )
}

export default Random