function Rating(props){

  //ensuring whatever we get is a number versus string, to which we can then round.. 
  let rating = Number(props.children);

  //and here we ensure it is a whole integer by rounding... 
  let starNumber = Math.round(rating)

  const myFilledStarArray = [];

  for(let i = 0; i < starNumber; i++) {
    myFilledStarArray.push(<div>★</div>)
  }

  const myEmptyStarArray = [];

  for(let i = 0; i < 5 - starNumber; i++) {
    myFilledStarArray.push(<div>☆</div>)
  }

  return (
    <div style={{
      display: 'flex',

    }}>
      {myFilledStarArray}{myEmptyStarArray}
    </div>
  )
}

export default Rating;