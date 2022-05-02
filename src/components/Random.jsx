import "../styles/Greetings.css"

const Random = ({min,max})=>{
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    return(
        <p className="greeting">Número aleatorio entre {min} y {max}: {randomNum} </p>
    )
}
export default Random