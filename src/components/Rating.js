function Rating(props){

    const { children } = props

    const roundNumber = Number(Math.round(children))

    const emptyStarPath = "../empty_star.svg"
    const fillStarPath = "../fill_star.svg"

    console.log(roundNumber)

    return (
        <div className="rating">

            { roundNumber >= 1 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 2 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 3 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 4 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }
            { roundNumber >= 5 ? <img src={fillStarPath} alt=""/> : <img src={emptyStarPath} alt=""/> }

        </div>
    )

}

export default Rating
