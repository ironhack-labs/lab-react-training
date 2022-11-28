import './BoxColor.css';
const BoxColor = ({ r, g, b }) => {
    return (
        <div className="boxcolor-container" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <h1>{`rgb(${r},${g},${b})`}</h1>
        </div>
    );
}

export default BoxColor;