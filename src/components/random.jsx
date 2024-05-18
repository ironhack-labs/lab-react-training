import PropTypes from 'prop-types';

import "./random.css"; 

function Random ({min, max}) {

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      return (
        <div className="random">
          Random value between {min} and {max} => {getRandomInt(min, max)}
        </div>
      );

}

Random.propTypes = {
    
   min: PropTypes.number,
   max: PropTypes.number,
   
  };

export default Random; 