import React from 'react';

export default function Rating(props) {
    const stars = {
        0:"☆☆☆☆☆",
        1:"★☆☆☆☆",
        2:"★★☆☆☆",
        3:"★★★☆☆",
        4:"★★★★☆",
        5:"★★★★★"
        }
    return 
    (
    <div>
        <p>{stars[Math.round({props.children})]}</p>
    </div>
    );
}
