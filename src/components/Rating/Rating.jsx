import './Rating.css'



function Rating(props) {
    let stars = Math.round(props.children)
    let starsEmpty = 5 - stars
    let arrayStars = []
    for (stars; stars > 0; stars--) {
        arrayStars.push("★")
    }
    for (starsEmpty; starsEmpty > 0; starsEmpty--) {
        arrayStars.push("☆")
    }
    return arrayStars
}
export default Rating;