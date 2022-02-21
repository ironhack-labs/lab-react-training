import "./BoxColor.css"

const BoxColor = (props) => {
let {r, g, b} = props

    return (
        <div className="card" style={{backgroundColor:`rgb(${r}, ${g}, ${b})`}}>
          <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor