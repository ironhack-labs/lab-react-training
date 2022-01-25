import './BoxColor.css'


export const BoxColor = ({r,g,b})=>{
    const zeroPad = (num, places) => num.padStart(places, '0')
    return (
        <div className = 'box-color-div' style={{backgroundColor: `rgb(${r},${g},${b}`}}>
            <p>rgb({r},{g},{b})</p>
            <p>#{zeroPad(r.toString(16),2)}{zeroPad(g.toString(16),2)}{zeroPad(b.toString(16),2)}</p>
        </div>
    )
}
