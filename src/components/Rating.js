function Rating({ children }) {
    const stars = (children < 0) ? 0 : (children > 5) ? 5 : Math.round(children)
    const outPut = 5 - stars

    return (

        <div className="Rating">
            {'★'.repeat(stars)}
            {'☆'.repeat(outPut)}
        </div>
    )

}




export default Rating