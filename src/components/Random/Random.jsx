import './Random.css'

const Random = ({ min, max }) => {
    let num = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <div className="random">
            <p>El numer Random de {min} entre {max} es === {num}</p>
        </div>
    )
}
export default Random