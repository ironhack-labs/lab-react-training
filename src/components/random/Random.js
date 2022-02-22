import './Random.css'

const Random = ({ min, max }) => {

    const  randomNum = () => Math.floor(Math.random() * (max - min) + min) 


    return (
        <article>
            <p>Random value between {min} and {max} = {randomNum()} </p>
        </article>
    )
}

export default Random