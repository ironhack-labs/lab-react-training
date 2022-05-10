function Random(props){
    const {min, max} = props

    const randomNum = Math.floor(Math.random()*(max-min)+ min)

    return(
        <div className="textCard">
            <p>Random value between {min} and {max} ={">"} {randomNum}</p>
        </div>
    )
}

export default Random