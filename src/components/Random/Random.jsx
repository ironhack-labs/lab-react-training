

function Random(props){
    const { min, max } = props

        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    console.log(randomNumber)
    return(
        <div>
            {randomNumber}
        </div>
    )
}

export default Random