const BoxColor = ({ r, g, b }) => {

    const styleBox = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: 200,
        height: 100


    }
    
    return (<div style={styleBox}>r:{r},g:{g},b:{b}</div>)



}

export default BoxColor 