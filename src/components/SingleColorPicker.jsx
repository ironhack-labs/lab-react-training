import { nanoid } from 'nanoid';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      SingleColorPicker
      <div
        style={{
          width: '20px',
          height: '20px',
          border: '1px black solid',
          backgroundColor: 'red',
        }}
      ></div>
      RGBColorPicker
      <input
        type="number"
        min={0}
        max={255}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SingleColorPicker;
