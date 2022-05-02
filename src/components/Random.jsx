import './Random.css'

function Random({ min, max }) {

    let randomInt = 0
    randomInt = min + Math.floor(Math.random() * (max-min)) ;
    return (
        <p className = "random">{"Random value between" + min + " and " + max + " => " +randomInt}</p>

    )
}


export default Random