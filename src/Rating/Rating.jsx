import './Rating.css'

const Rating = ({ children }) => {

    let result = ''

    let rating = Math.round(children)
    let starVoid = '☆'
    let starFill = '★'

    result = starFill.repeat(rating) + starVoid.repeat(5 - rating)



    return (

        <div className="stars" >
            <h2>{result}</h2>
        </div>
    )

}


export default Rating