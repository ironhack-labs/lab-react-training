function Rating({ children }) {
    // const stars = {
    //     0: '☆☆☆☆☆',
    //     1: '★☆☆☆☆',
    //     2: '★★☆☆☆',
    //     3: '★★★☆☆',
    //     4: '★★★★☆',
    //     5: '★★★★★'
    // }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.round(children)) {
            stars.push(<i className="fa-solid fa-star"></i>);
        } else {
            stars.push(<i className="fa-regular fa-star"></i>);
        }
    }

    // return (
    //     <div className="border">
    //         {/* <div className="rating"> */}
    //         <p>{stars2.join('')}</p>
    //         {/* </div> */}
    //     </div>
    // )

    return (
        <div>
            {stars.map((star, index) => {
                return <span key={index} className="star">{star}</span>
            })}
        </div>
    )
}

// const aux = Math.round(children);
// return (
//     <div>
//         {stars[Math.round(children)]}
//     </div>
// )
// }

export default Rating