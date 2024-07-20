import PropTypes from 'prop-types';

function SingleColorPicker({ color, value, onChange }) {
  const handleInputChange = (e) => {
    const newValue = Math.max(0, Math.min(255, Number(e.target.value)));
    onChange(color, newValue);
  };

  return (
    <div className="flex items-center mb-4">
      <label className="block text-gray-700 text-sm font-bold mr-2">
        {color.toUpperCase()}:
      </label>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        min="0"
        max="255"
      />
    </div>
  );
}

SingleColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SingleColorPicker;