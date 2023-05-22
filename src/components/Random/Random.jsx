
const Random = ({ min, max }) => {

    const result = Math.floor(Math.random() * (max - min + 1) + min)
    return `Random value between ${min} and ${max} => ${result} `
}

export default Random