import React from 'react';

function Rating(props) {
  let { rating } = props;

  let result = () => {
    switch (rating) {
      case rating  === 0:
        return '☆☆☆☆☆';

      case rating  === 1:
        return '★☆☆☆';

      case rating === 2:
        return '★★☆☆☆';

      case  rating  === 3:
        return '★★★☆☆';

      case  rating  === 4:
        return '★★★★☆';

      case  rating  === 5:
        return '★★★★★';

      default:
        return '☆☆☆☆☆';
    }
  };
  return <div>
    {result({rating})}
  </div>;
}

export default Rating;
