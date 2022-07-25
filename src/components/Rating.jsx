const Rating = (props) => {
    let stars = Math.round(props.children)
    
    switch(Rating){
        case 0:
        stars='☆☆☆☆☆';
        break;
        case 1:
        stars='★☆☆☆☆';
        break;
        case 2:
        stars='★★☆☆☆';
        break;
        case 3:
        stars='★★★☆☆';
        break;
        case 4:
        stars='★★★★☆';
        break;
        default:
        stars='★★★★★';  
    }
    return ( 
      <div className="ratingContainer">
        <p> {stars} </p>
      </div>
    );
  }

  export default Rating;