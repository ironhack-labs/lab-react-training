const Random = props => {
    const { min, max } = props
    let randomNumber = Math.floor(Math.random() * (max - min) + min)

    return (
       <div className='Random'>
            <p className="min"> Random value between {min} and {max} => {randomNumber}</p>
        </div>
    )
}

export default Random