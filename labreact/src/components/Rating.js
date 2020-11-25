import React from 'react';
const Rating = (props) => {
    return <div className="profile">{starRating(Math.round(props.children))}</div>;
};

function starRating(rating) {
    switch (rating) {
        case 0:
            return '☆☆☆☆☆';

        case 1:
            return '★☆☆☆☆';

        case 2:
            return '★★☆☆☆';

        case 3:
            return '★★★☆☆';

        case 4:
            return '★★★★☆';

        case 5:
            return '★★★★★';
    }
}



export default Rating;
// ------------------------------------------------------


