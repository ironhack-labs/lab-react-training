import './box-color.css'

function BoxColor({r, g, b}) {
return <>
    <div className="box-color" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
        <p>rgb({r}, {g}, {b})</p>
        <p>
            #{r.toString(16)}{g.toString(16)}{b.toString(16)}
        </p>
    </div>
</>

}

export default BoxColor;