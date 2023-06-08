import { nanoid } from 'nanoid';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '1px  solid black',
          backgroundColor: 'red',
          margin: '5px',
        }}
      ></div>
      <input
        style={{
          width: '70px',
          height: '25px',
          border: '1px  solid lightgrey',
          margin: '5px',
        }}
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
