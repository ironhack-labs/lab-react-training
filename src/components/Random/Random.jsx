import './Random.css'

const Random = (props) => {

    const { min, max } = props
    const random = Math.floor(Math.random() * (max - min) + min)

    return (
        <div className="card">
            <div className="text">
                <p>Random value between {min} and {max} --- {random}</p>
            </div>
        </div>
    )

}

export default Random