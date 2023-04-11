function Rating(props) {
let { children } = props

const randomNumb =  Number(Math.round(children))
const emptyStarPath = "./empty_star.svg"
    const fillStarPath = "./fill_star.svg"

    return (
        <div>
            {randomNumb >= 1 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 2 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 3 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 4 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 5 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }

        </div>
    )

}

export default Rating