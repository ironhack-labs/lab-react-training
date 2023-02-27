import './Random.css'

const Random = ({ min, max }) => {

    let num = Math.floor(Math.random() * (max - min + 1) + min)



    return <p className="Random"> Random value between {min} and {max}= {num}</p>
}

export default Random