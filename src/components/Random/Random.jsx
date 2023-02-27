const random = ({ min, max, children }) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min)
    children = `Random value between ${min} and ${max} => ${number}`
    return children
}

export default random