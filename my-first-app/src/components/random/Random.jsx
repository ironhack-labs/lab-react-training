import './Random.css'

const Random = ({ min, max }) => {
    const random = Math.floor(Math.random() * (max - min) + min)
    return (
        <>
            <p>Random between {min} and {max}: {random}</p>
        </>
    )
}

export default Random