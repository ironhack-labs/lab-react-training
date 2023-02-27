export const Rating = (props) => {

    let numOfStars = Math.round(props.children)

    function makeStars(num) {
        if (num < 1) {
            return <h2>☆☆☆☆☆</h2>
        } else if (num < 2) {
            return <h2>★☆☆☆☆</h2>
        } else if (num < 3) {
            return <h2>★★☆☆☆</h2>
        } else if (num < 4) {
            return <h2>★★★☆☆</h2>
        } else if (num < 5) {
            return <h2>★★★★☆</h2>
        } else if (num === 5) {
            return <h2>★★★★★</h2>
        }
    }

    return (
        <div>


            <h2>{makeStars(numOfStars)} </h2>

        </div>

    )
}