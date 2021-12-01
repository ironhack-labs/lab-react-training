import './BoxColor.css'

const BoxColor =(props)=>{

    const {r, g, b} = props

    const style = {backgroundColor:`rgb(${r},${g},${b})`}

    let rhex=Number(r).toString(16)
    let ghex=Number(g).toString(16)
    let bhex=Number(b).toString(16)
    return (
        <div className="BoxColor" style={style}>
            <p>rgb({r},{g},{b})</p>
            <p>#{rhex}{ghex}{bhex}</p>
        </div>
    )
}


export default BoxColor