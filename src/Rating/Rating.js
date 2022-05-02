import './Rating.css'


const Rating = ({ children }) => {

    let value = Math.round(children);
    let stars = value

    switch (value) {

        case 0:
            stars = '☆☆☆☆☆'

        case 1:
            stars = '★☆☆☆☆'

        case 2:
            stars = '★★☆☆☆'

        case 3:
            stars = '★★★☆☆'

        case 4:
            stars = '★★★★☆'

        case 5:
            stars = '★★★★★'

    }

    return (
        <div className="rating">

            {stars}

        </div>

    )
}

export default Rating



        // if (value === 0) {
        //     stars = <p>☆☆☆☆☆</p>
        // }

        // if (value === 1) {
        //     stars = <p>★☆☆☆☆</p>
        // }

        // if (value === 2) {
        //     stars = <p>★★☆☆☆</p>

        // }

        // if (value === 3) {
        //     stars = <p>★★★☆☆</p>
        // }

        // if (value === 4) {
        //     stars = <p>★★★★☆</p>
        // }

        // if (value === 5) {
        //     stars = <p>★★★★★</p>
        // }
