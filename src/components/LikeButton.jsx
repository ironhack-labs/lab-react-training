import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

export default function LikeButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

  return (
    <Button>
        <button onClick={handleClick}>{count} Likes</button>
    </Button>
  )
}

const Button = styled.button`
padding: 10px;

`