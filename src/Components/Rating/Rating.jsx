
const rating = ({ children }) => {

    let ren = Math.round(children)
    let pintar

    if (ren == 0) {
        pintar = "☆☆☆☆☆"
    }
    if (ren == 1) {
        pintar = "★☆☆☆☆"
    }
    if (ren == 2) {
        pintar = "★★☆☆☆"
    }
    if (ren == 3) {
        pintar = "★★★☆☆"
    }
    if (ren == 4) {
        pintar = "★★★★☆"
    }
    if (ren == 5) {
        pintar = "★★★★★"
    }

    return (
        <div>
            <p>{pintar}</p>



        </div>
    )
}

export default rating