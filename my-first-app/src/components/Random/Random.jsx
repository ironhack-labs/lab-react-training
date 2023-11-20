import "./Random.css"

const Random = ({ min, max }) => {

    return (
        <div className="randomNumbers">
            Random value between {min} and {max} :   {Math.floor(Math.random() * (max - min) + min)}
            <br />
        </div>
    )
}


export default Random