import './Random.css'

const Random = ({ min, max }) => {

    let num = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <section className="Random">
            <p>Random value between 1 and 6: {num}</p>
        </section>
    )
}

export default Random
