import "./index.css"

function BoxColor({r,g,b}){

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
    }

    return (
        <div className="boxcolor" style={divStyle}>
        <p>rgb({r},{g},{b})</p>
        </div>
    );
};

export default BoxColor;