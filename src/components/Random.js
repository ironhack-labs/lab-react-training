
function Random(props) {

    const {
        min,
        max
    } = props

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    return (
        <div className="box">
            <p>Random value between {min} and {max} => {getRandomArbitrary(min, max)}</p>
        </div>
    )
}

export default Random;