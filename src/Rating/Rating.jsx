import './Rating.css'

const Rating = ({children}) => { 

    let value = Math.round(children)
    let stars = value

    if (value === 0){
        stars = <h1>☆☆☆☆☆</h1>
    }
    if (value === 1){
        stars = <h1>★☆☆☆☆</h1>
    }
    if (value === 2){
        stars = <h1>★★☆☆☆</h1>
    }
    if (value === 3){
        stars = <h1>★★★☆☆</h1>
    }
    if (value === 4){
        stars = <h1>★★★★☆</h1>
    }
    if (value === 5){
        stars = <h1>★★★★★</h1>
    }


    return (
        <div className="card">
           {stars}
        </div>

    )
}

export default Rating

