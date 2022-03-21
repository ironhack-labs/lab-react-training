const Rating = ({ children }) => {

    let starsNumbers = Math.round(Number(children));

    let stars = '';

    if(starsNumbers === 0) {
        stars = <p>☆☆☆☆☆</p>
    }
    if(starsNumbers === 1) {
        stars = <p>★☆☆☆☆</p>
    }
    if(starsNumbers === 2) {
        stars = <p>★★☆☆☆</p>
    }
    if(starsNumbers === 3) {
        stars = <p>★★★☆☆</p>
    }
    if(starsNumbers === 4) {
        stars = <p>★★★★☆</p>
    }
    if(starsNumbers === 5) {
        stars = <p>★★★★★</p>
    }
    return (
      <div>
          {stars}
      </div>
    )
  }
  
  export default Rating 
