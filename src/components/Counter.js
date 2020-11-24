import React, { useState } from 'react'

const Counter = (props) => {
  const [count, setCount] = useState(props.initialValue)

  return (
    <div style={{textAlign: 'center'}}>
      <h3>Count: {count}</h3>
      <div>
        <button style={{width: '50px'}} onClick={() => setCount(count - 1)}>-</button>
        <button style={{width: '50px'}} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )

}

export default Counter