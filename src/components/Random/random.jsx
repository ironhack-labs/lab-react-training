import './random.css'

const Random = ({ min, max }) => {

    let rand = min + (Math.random() * (max - min));
    let result = `Random number between ${min} and ${max} is ${Math.floor(rand)}`
    
    return (
        <article className="box">
           <p>{result}</p>
        </article>
    )
}
export default Random