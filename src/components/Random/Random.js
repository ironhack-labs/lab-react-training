
function Random(props) {

    const { max, min } = props

    let randomNumber = Math.random() * (max - min) + min
    
    return `Random value between ${min} and ${max} => ${randomNumber.toFixed(0)}`
}

export default Random
