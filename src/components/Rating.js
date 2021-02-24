import React from 'react'

export default function Rating(props) {

  function valor (value) {
    const children = Math.round(value)
    if (children === 0) {
      return '☆☆☆☆☆'
    } else if (children === 1 ){
      return '★☆☆☆☆'
    } else if (children===2){
      return '★★☆☆☆'
    } else if (children ===3) {
      return '★★★☆☆'
    } else if (children ===4){
      return '★★★★☆'
    } else  {
      return '★★★★★'
    }
  }
  return (
    <div>
      <p>{valor (props.children)}</p>
    </div>
  )
}
