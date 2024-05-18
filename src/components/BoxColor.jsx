import PropTypes from 'prop-types';


const BoxColor = ({ r, g, b }) => {
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
      color: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };
  
    return (
      <div style={divStyle}>
        rgb({r}, {g}, {b})
      </div>
    );
  };
  
  BoxColor.propTypes = {
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
  };
  
  export default BoxColor;