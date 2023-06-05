import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

function Rating( {children} ) {
    const childrenRounded = Math.round(children);
    const emptyStar = <IoMdStarOutline />;
    const fullStar = <IoMdStar />;

    let starsDisplayed;
    switch(childrenRounded){
        case 0:
            starsDisplayed  = `${emptyStar}${emptyStar}${emptyStar}${emptyStar}${emptyStar}`
        break;
        case 1:
            starsDisplayed  = `${fullStar}${emptyStar}${emptyStar}${emptyStar}${emptyStar}`
        break;
        case 2:
            starsDisplayed  = `${fullStar}${fullStar}${emptyStar}${emptyStar}${emptyStar}`
        break;
        case 3:
            starsDisplayed  = `${fullStar}${fullStar}${fullStar}${emptyStar}${emptyStar}`
        break;
        case 4:
            starsDisplayed  = `${fullStar}${fullStar}${fullStar}${fullStar}${emptyStar}`
        break;
        case 5:
            starsDisplayed  = `${fullStar}${fullStar}${fullStar}${fullStar}${fullStar}`
        break;
       
    }


    return (
      <div className="">
        <p>{starsDisplayed}</p>
      </div>
    );
  }
  
  export default Rating;