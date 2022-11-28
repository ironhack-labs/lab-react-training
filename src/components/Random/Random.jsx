const Random = props => {
    const { min, max } = props
    let randomNumber = Math.floor(Math.random() * (max - min) + min)
    return (
        <div>
            <p>Random value between {min} & {max} -&gt; {randomNumber}</p>
        </div>
    )
}

export default Random