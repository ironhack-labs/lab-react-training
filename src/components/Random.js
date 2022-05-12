const Random = (props) => {
    const {min, max} = props

    const number = Math.round(Math.random() * (max - min) + min);

    return (
        <div className="random">
            Random number from {min}
            to {max}
            = {number}
        </div>
    )

}

export default Random;