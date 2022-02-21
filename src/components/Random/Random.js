import './random.css'

const Random = (props) => {
    const { min, max } = props

    function randomNumber(min, max) {
        let random = Math.floor(Math.random() * max) + min
        return random
    }

    return (
        <>
            <p className="nums">Random value between {min} and {max} = {randomNumber(min, max)} </p>
        </>
    )
}

export default Random