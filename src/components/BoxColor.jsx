import PropTypes from 'prop-types';

function BoxColor(props) {
    const { r, g, b } = props;

    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    
    return (
        <div style={boxStyle}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    );
}

BoxColor.propTypes = {
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
}

export default BoxColor;