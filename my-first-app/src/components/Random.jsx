
const Random = ({ min, max }) => {

    let number = Math.floor(Math.random() * (max - min))
    return (
        <section>
            <h4> Random value between {min} y {max} = {number}</h4>
        </section>
    )
}

export default Random