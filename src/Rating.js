import React from 'react'

export default function Rating(props) {
    let stars = ''
    switch (Math.round(props.children)) {
        case 0:
            stars = '☆☆☆☆☆';
            break;
        case 1:
            stars = '★☆☆☆☆';
            break;
        case 2:
            stars = '★★☆☆☆';
            break;
        case 3:
            stars = '★★★☆☆';
            break;
        case 4:
            stars = '★★★★☆';
            break;
        case 5:
            stars = '★★★★★';
            break;
    }
    return (
        <>
            <p>{stars}</p>
        </>
    )
}