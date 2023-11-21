const Random = (({ max, min }) => {

    const numeroRandom = Math.random() * (max - min) + min

    return (
        <div className="Random">
            <p>Random value between {min} and {max} ={">"} {Math.trunc(numeroRandom)}</p>
        </div>
    )
})

export default Random