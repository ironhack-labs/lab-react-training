import './Random.css'

const Random = ({min, max}) =>{

    let random = min + Math.random() * (max - min)

    return (
    <article className="random">
        <p> Random value between {min} and {max} = {random} </p>
    </article>
    )
}

export default Random