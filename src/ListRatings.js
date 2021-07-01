import Rating from './Rating';

import './ListRatings.css';

const ListRatings = ({title}) => {
    return (
      <article className="ListRatings">
        <h2>Ratings</h2>
        <div className="Ratings__wrapper">
          <Rating >0</Rating>
          <Rating >1.49</Rating>
          <Rating >1.5</Rating>
          <Rating >3</Rating>
          <Rating >4</Rating>
          <Rating >5</Rating>
        </div>
      </article>
    );
}
 
export default ListRatings;