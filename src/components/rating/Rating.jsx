function Rating({ children }) {

    let stars = Math.round(children)
    let starsEmpty = 5 - stars
    let arr = []

    for (stars; stars > 0; stars--) {
        arr.push("★")
    }
    for (starsEmpty; starsEmpty > 0; starsEmpty--) {
        arr.push("☆")
    }
    return arr
}
export default Rating;