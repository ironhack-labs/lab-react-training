import './BoxColor.css'

const BoxColor = (props) => {

    const { r, g, b } = props
    const divStyle = {
        background: `rgb(${r} ${g} ${b})`
    }
    return (
        <article className="rgb">
            <div style={divStyle}>
                <p>{r} {g} {b}</p>
            </div>
        </article>
    )
}

export default BoxColor