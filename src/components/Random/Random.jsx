const Random = ({ min, max }) => {
    const number = Math.random() * (max - min) + min
    const message = `Random value between ${min} and ${max} => ${number.toFixed()}`

    return (
        <div className="GreetingsCard">
            <h3>{message}</h3>
        </div>
    )
}

export default Random