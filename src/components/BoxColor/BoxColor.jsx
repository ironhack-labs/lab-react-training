

const BoxColor = ({ r, g, b }) => {


    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`, // Con , y backsticks porque es un objeto
        height: 200,
        width: 300,
        margin: 10
    };


    return (
        <div style={divStyle}>

        </div>
    )

}


export default BoxColor