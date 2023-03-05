import "./index.css"



function BoxColor({r,g,b}){

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
    }

    return (
        <div className="BoxColor" style={divStyle}>

        <h4>rgb({r},{g},{b})</h4>
            
        </div>
    );
};

export default BoxColor;