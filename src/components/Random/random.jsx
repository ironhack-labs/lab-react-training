import './random.css'

const Random = ({ min, max }) => {
    let firstRandom = Math.floor(Math.random() * 6 + 1)
    let secondRandom = Math.floor(Math.random() * 100 + 1)

    return (
        <>
            <p> Random Value Between 1 and 6 : {firstRandom} </p>
            <p> Random Value Between 1 and 100: {secondRandom} </p>
        </>


    )
}

export default Random;