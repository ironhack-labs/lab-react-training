function DriverCard(props) {

    const { name, rating, img, car } = props

    let score = ''

    if (Math.round(rating) === 0) {
        score = '🌕🌕🌕🌕🌕'
    }
    else if (Math.round(rating) === 1) {
        score = '🌕🌕🌕🌕🌑'
    }
    else if (Math.round(rating) === 2) {
        score = '🌕🌕🌕🌑🌑'
    }
    else if (Math.round(rating) === 3) {
        score = '🌕🌕🌑🌑🌑'
    }
    else if (Math.round(rating) === 4) {
        score = '🌕🌑🌑🌑🌑'
    }
    else if (Math.round(rating) === 5) {
        score = '🌑🌑🌑🌑🌑'
    }


    return (
        <article>
            <div>
                <img src={img} alt="card-pic"></img>
            </div>
            <div className="text">
                <h4>
                    {name}
                </h4>
                <br></br>
                <h4>
                    {score}
                </h4>
                <br></br>
                <h2>
                    {car.model}
                </h2>
                <h2>
                    {car.licensePlate}
                </h2>
            </div>
        </article>
    )
}

export default DriverCard

