import './SingleColorPicker.css';

const SingleColorPicker = ({ color, value, onChange }) => {

  return (
    <div>
      <div className="Square" style={{ backgroundColor: color }}>
        C
      </div>
      <div>
        <label htmlFor="color">R:</label>
        <input type="number" id="color" value={value} onChange={onChange} />
        <label htmlFor="color">G:</label>
        <input type="number" id="color" value={value} onChange={onChange} />
        <label htmlFor="color">B:</label>
        <input type="number" id="color" value={value} onChange={onChange} />
      </div>
      <div className="footer">fin serafin</div>
    </div>
  );
};

export default SingleColorPicker;
