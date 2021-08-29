import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Rating.css';

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab);

export default class Rating extends React.Component {
  render() {
    const { children } = this.props;
    function getStars(number) {
      const round = Math.round(number);
      const stars = [];
      for (let i = 0; i < round; i++) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={['fas', 'star']}
            style={{ width: '35px', height: '35px' }}
          />
        );
      }
      for (let j = round; j < 5; j++) {
        stars.push(
          <FontAwesomeIcon
            key={j}
            icon={['far', 'star']}
            style={{ width: '35px', height: '35px' }}
          />
        );
      }
      return stars;
    }
    return <div className="Rating">{getStars(children)}</div>;
  }
}
