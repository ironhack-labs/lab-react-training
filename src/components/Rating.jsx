const Rating = ({ children }) => {
    const starsRate = ( number ) => {
    number = number > 5 ? 5 : number
    let rateNumber = Math.round(number)

    let options = {
            '0': '☆☆☆☆☆',
            '1': '★☆☆☆☆',
            '2': '★★☆☆☆',
            '3': '★★★☆☆',
            '4': '★★★★☆',
            '5': '★★★★★'
    }     
    return options[rateNumber]

    }

    return(
        <div className="Raiting">
            <h2 className="display-2">
                {starsRate(children)}           
            </h2>
        </div>
    )
}

export default Rating