import {PropTypes} from 'prop-types';

function BoxColor({ r, g, b }) {
const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '100%',
    height: '100%',
};

  return (
    <div className="w-full h24 mb-4 flex items-center justify-center" style={divStyle}>
        rgb({r}, {g}, {b})
    </div>
  );
}

BoxColor.propTypes = {
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
};

export default BoxColor;