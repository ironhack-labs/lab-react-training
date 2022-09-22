import "./style.css"

function Random(props) {
    const {min, max} = props
    const result = Math.round(Math.random() * (max - min) + min)
    return (<p className="caja">{`Random value between ${min} and ${max} => ${result}`}</p>)
}

export default Random