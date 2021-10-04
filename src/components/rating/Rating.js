import React from 'react';

const Rating = props => {
    let children = Math.round(props.children)
    switch (children) {
        case 0:
            return '☆☆☆☆☆';
            break;

        case 1:
            return '★☆☆☆☆';
            break;

        case 2:
            return '★★☆☆☆';
            break;

        case 3:
            return '★★★☆☆';
            break;

        case 4:
            return '★★★★☆';
            break;

        case 5:
            return '★★★★★';
            break;

        default:
            console.log('Please input a rating')

        return(
        <div>
            {children}
        </div>
        )
    }
}

export default Rating;