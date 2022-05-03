import './Rating.css'

const Rating = ({ children }) => {
    let star = Math.round(children)
    let stars

    if (star === 0) {
        stars = <h1>💩💩💩💩💩</h1>
    } if (star === 1) {
        stars = <h1>⭐💩💩💩💩</h1>
    } if (star === 2) {
        stars = <h1>⭐⭐💩💩💩</h1>
    } if (star === 3) {
        stars = <h1>⭐⭐⭐💩💩</h1>
    } if (star === 4) {
        stars = <h1>⭐⭐⭐⭐💩</h1>
    } if (star === 5) {
        stars = <h1>⭐⭐⭐⭐⭐</h1>
    }
    return stars


}

export default Rating

// Random Shit
// import './Rating.css'

// const Rating = () => {
//     let stars = Math.round(Math.random() * (5 - 0))

//     if (stars === 0) {
//         stars = <div>
//             <h1>💩💩💩💩💩</h1>
//         </div>
//     } else if (stars === 1) {
//         stars = <div>
//             <h1>⭐💩💩💩💩</h1>
//         </div>
//     } else if (stars === 2) {
//         stars = <div>
//             <h1>⭐⭐💩💩💩</h1>
//         </div>
//     } else if (stars === 3) {
//         stars = <div>
//             <h1>⭐⭐⭐💩💩</h1>
//         </div>
//     } else if (stars === 4) {
//         stars = <div>
//             <h1>⭐⭐⭐⭐💩</h1>
//         </div>
//     } else if (stars === 5) {
//         stars = <div>
//             <h1>⭐⭐⭐⭐⭐</h1>
//         </div>
//     }
//     return stars


// }

// export default Rating