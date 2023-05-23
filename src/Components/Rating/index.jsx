function Rating({children}){
    const emptyStar = "☆";
    const fullStar = "★";
    const maxStars = 5;

    const rounded = Math.round(children);
    const filledStars = fullStar.repeat(rounded);
    const emptyStars = emptyStar.repeat(maxStars - rounded);
  
    return <div>{filledStars}{emptyStars}</div>;
  };




   


export default Rating;