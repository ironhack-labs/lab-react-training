// import './Random.css'

const Random = ({ min, max }) => {

    let round = Math.floor((Math.random() * (max - min + 1)) + min)
    console.log(round)

    let result = `Ramdom value between ${min} and ${max} = ${round}`

    return (<p>{result}</p>)

}

export default Random