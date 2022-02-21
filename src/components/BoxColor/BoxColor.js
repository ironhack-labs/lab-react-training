import './boxcolor.css'

const BoxColor = (props) => {
    const { r, g, b, } = props
    const styleClass = {background:`rgb(${r} ${g} ${b})`} 


    return (

        <p className="box" style={styleClass}>r={r} g={g} b={b}</p>
        
    )
}

export default BoxColor