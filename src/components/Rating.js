function Rating(props){

    let ratingNumber = Number(props.children);
  
    let starNumber = Math.round(ratingNumber);
  
    const myFilledStarArray = [];
  
    for(let i = 0; i < starNumber; i++){
      myFilledStarArray.push(<div>★</div>)
    }
  
    const myEmptyStarArray = [];
  
    for(let i = 0; i < 5 - starNumber; i++){
      myEmptyStarArray.push(<div>☆</div>)
    }
  
    return (
      <div style={{
        display: "flex",
        fontSize: '2rem',
      }}>
        {myFilledStarArray}{myEmptyStarArray}
      </div>
    )
  
  }
  
  export default Rating;