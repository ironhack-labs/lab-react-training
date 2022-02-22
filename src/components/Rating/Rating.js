import "./Rating.css"


const Rating = ({children}) => {

let star = ""
const rating = Math.round(children)

if (rating === 0) {
    star = "☆☆☆☆☆"
    return (<p>{star}</p>)
}else if (rating === 1) {
    star = "⋆☆☆☆☆"
    return (<p>{star}</p>)
}else if (rating === 2) {
    star = "⋆⋆☆☆☆"
    return (<p>{star}</p>)
}else if (rating === 3) {
    star = "⋆⋆⋆☆☆"
    return (<p>{star}</p>)
}else if (rating === 4) {
    star = "⋆⋆⋆⋆☆"
    return (<p>{star}</p>)
}else if (rating === 5) {
    star = "⋆⋆⋆⋆⋆"
    return (<p>{star}</p>)
}

}


// ⋆
// ☆

export default Rating