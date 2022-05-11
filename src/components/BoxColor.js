import "./styles.css"

const BoxColor = (props) =>{
    const {r,g,b} = props

    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        padding: "20px",
        border: "1px solid black",
        margin: "20px 10px",
        color: "white",

    }

    return(
        <div className="box-color" style={style}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor