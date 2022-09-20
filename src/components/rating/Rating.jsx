function Rating({ children }) {

    const s = {
        0: "☆☆☆☆☆",
        1: "★☆☆☆☆",
        3: "★★☆☆☆",
        4: "★★★★☆",
        5: "★★★★★"
    }

    let stars = Math.round(children)


    // switch (stars) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }


    return (
        <div className="starts">
            {s[stars]}
        </div>
    )
    // let starsEmpty = 5 - stars
    // let arr = []

    // for (stars; stars > 0; stars--) {
    //     arr.push("★")
    // }
    // for (starsEmpty; starsEmpty > 0; starsEmpty--) {
    //     arr.push("☆")
    // }
}
export default Rating;