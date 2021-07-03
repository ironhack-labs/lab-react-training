import './Rating.css';
import {renderStars} from './ratingHelpers.js';

const Rating = ({children, style}) => {
    return (
      <section className="Rating">
        <div style={style}>
          {/* pass each child through renderStars */}
          {renderStars(children)}
        </div>
      </section>
    );
}
 
export default Rating;