import React from 'react'
import Square from './Square'

const genSquares = (max) => {
  const listArr = []
  for (let index = 0; index < max; index++) {
    listArr.push(<Square key={index} index={index}>{index}</Square>)
  }
  return listArr
}

export default function NumbersTable(props) {
  return (
    <ul style={{ marginTop: '20px' }}>
      {genSquares(props.limit)}
    </ul>
  )
}
