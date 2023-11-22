function Random({ min, max }) {

    let number = Math.floor(Math.random() * (max - min))


    return (
        <p>Random value between {min} and {max} : {number}</p>
    )
}

export default Random

