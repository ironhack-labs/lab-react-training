import BoxColor from './BoxColor';
import ColorPickerSingleColor from './../components/ColorPickerSingleColor';

function ColorPickerRGB() {
  return (
    <div className="colorpicker grid">
      <BoxColor r={150} g={150} b={255} />
      <div>
        <ColorPickerSingleColor
          color="r"
          /*value={rValue}*/ onChange={() => {}}
        />
        <ColorPickerSingleColor
          color="g"
          /*value={gValue}*/ onChange={() => {}}
        />
        <ColorPickerSingleColor
          color="b"
          /*value={bValue}*/ onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default ColorPickerRGB;
