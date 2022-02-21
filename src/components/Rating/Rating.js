import "./Rating.css"

const Rating = (props) => {
    let { children } = props
    let stars = ""
    if (children === 0) {
        stars = 0
    }
    if (children > 0 && children < 1.5) {
        stars = 1
    }
    if (children >= 1.5 && children < 2.5) {
        stars = 2
    }
    if (children >= 2.5 && children < 3.5) {
        stars = 3
    }
    if (children >= 3.5 && children < 4.5) {
        stars = 4
    }
    if (children >= 4.5) {
        stars = 5
    }
    return (
        <div className="card">
            <h3>{stars} Stars</h3>
        </div>
    )
}

export default Rating