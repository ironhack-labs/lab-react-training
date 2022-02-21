import "./Random.css"

const Random = (props) =>{
let {min, max} = props
let random = min + Math.random()*(max-min)
    return (
        <div className="card">
        <p>
            Random value between {min} and {max} ={'>'} {random}
        </p>
        </div>
    )
}

export default Random