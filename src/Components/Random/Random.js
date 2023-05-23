function Random({min , max}) {
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    let result = `Random value between ${min} and ${max} => ${randomNum}`
    return(
        <h1>{result}</h1>
    )
}

export default Random;