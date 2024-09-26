const Random = ({ min, max }) => {
    return `Random number between ${min} and ${max} is ${Math.floor(Math.random() * (max - min + 1) + min)}`
}
export default Random