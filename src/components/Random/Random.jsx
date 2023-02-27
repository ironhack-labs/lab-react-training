

import './../Random/Random.css'


const Random = ({ min, max }) => {


    const random = Math.round(Math.random() * (max - min + 1) + min)

    return (
        <div className="random">
            <p>Random value between {min} and {max} {random}</p>
        </div>

    )

}



export default Random