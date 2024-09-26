import './Box-color.css'

const BoxColor = ({ r, g, b }) => {
    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '200px',
        height: '100px',
        marginBottom: '10px',
    };

    return <div class="divisor" style={boxStyle}></div>;
};

export default BoxColor;