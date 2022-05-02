const Random = ({ min, max }) => {

    return `Random value between ${min} and ${max} => ${Math.floor(Math.random() * (max - min) + min)}`
}

export default Random