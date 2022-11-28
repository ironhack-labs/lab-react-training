const Random = ({ min, max }) => {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (
        <div>
            <p>Random value between {min} and {max} = {getRandomIntInclusive(min, max)}</p>
        </div>
    )
}

export default Random