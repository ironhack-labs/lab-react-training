const Random = ({ min, max }) => {

    return <p>Random value between {min} and {max} is {Math.floor(Math.random() * (max - min) + min)}</p>
}

export default Random 