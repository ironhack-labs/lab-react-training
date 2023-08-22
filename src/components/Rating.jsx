function Rating(props){

  function stars(){
    const roundedChildren = Math.round(props.children)

    if(roundedChildren === 0) return '☆☆☆☆☆'
    else if(roundedChildren === 1 ) return '★☆☆☆☆' 
    else if(roundedChildren === 2 ) return '★★☆☆☆' 
    else if(roundedChildren === 3 ) return '★★★☆☆'
    else if(roundedChildren === 4 ) return '★★★★☆'
    else if(roundedChildren === 5 ) return '★★★★★'
  }
  return (
    <div>
      {stars()}
    </div>
  )
}

export default Rating