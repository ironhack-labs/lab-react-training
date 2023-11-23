import "./randomNum.css"

const Random = ({ min, max }) => {
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className="random">
            <p>Random value between {min} and {max} => {randomNum}</p>
        </div>
    )
}
export default Random