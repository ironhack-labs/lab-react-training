import './Random.css'

const Random = ({ min, max }) => {
    return (<p>Random value between {min} and {max} =&gt; {Math.floor(Math.random() * (max - min) + min)}</p>)
}

export default Random