const Rating = ({ children }) => {

    let stars
    return (

        <div>
            <p>{Math.round(children) === 0 ? stars = '☆☆☆☆☆' : undefined}</p>
            <p>{Math.round(children) === 1 ? stars = '★☆☆☆☆' : undefined}</p>
            <p>{Math.round(children) === 2 ? stars = '★★☆☆☆' : undefined}</p>
            <p>{Math.round(children) === 3 ? stars = '★★★☆☆' : undefined}</p>
            <p>{Math.round(children) === 4 ? stars = '★★★★☆' : undefined}</p>
            <p>{Math.round(children) === 5 ? stars = '★★★★★' : undefined}</p>
        </div>
    )
}

export default Rating 