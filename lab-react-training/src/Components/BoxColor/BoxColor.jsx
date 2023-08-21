import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;

    return (
        <p style={{ backgroundColor }}>{backgroundColor}</p>
    );
}

export default BoxColor;
