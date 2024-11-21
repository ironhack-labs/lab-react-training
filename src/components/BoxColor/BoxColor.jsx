import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    return (
        <div className="boxColor" style={{ height: "50px", widht: "50px", backgroundColor: `rgb(${r},${g},${b})`, border: "1px black solid" }} >
            <p>rgb({r},{g},{b})</p>
        </div >


    )
}
export default BoxColor;
