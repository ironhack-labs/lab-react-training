import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

function Rating( {children} ) {
    const childrenRounded = Math.floor(children);
    // const emptyStar = <IoMdStarOutline />;
    // const fullStar = <IoMdStar />;
    // console.log(`empty star ${emptyStar} full star ${fullStar} `);

    // let starsDisplayed;
    // switch(childrenRounded){
    //     case 0:
    //         starsDisplayed  = `${emptyStar}${emptyStar}${emptyStar}${emptyStar}${emptyStar}`
    //     break;
    //     case 1:
    //         starsDisplayed  = `${fullStar}${emptyStar}${emptyStar}${emptyStar}${emptyStar}`
    //     break;
    //     case 2:
    //         starsDisplayed  = `${fullStar}${fullStar}${emptyStar}${emptyStar}${emptyStar}`
    //     break;
    //     case 3:
    //         starsDisplayed  = `${fullStar}${fullStar}${fullStar}${emptyStar}${emptyStar}`
    //     break;
    //     case 4:
    //         starsDisplayed  = `${fullStar}${fullStar}${fullStar}${fullStar}${emptyStar}`
    //     break;
    //     case 5:
    //         starsDisplayed  = `${fullStar}${fullStar}${fullStar}${fullStar}${fullStar}`
    //     break;
       
    // }


    return (
      <div className="">
        {[1, 2, 3, 4, 5].map((value, index) =>
        childrenRounded >= index + 1 ? <IoMdStar /> : <IoMdStarOutline />
      )}
      </div>
    );
  }
  
  export default Rating;