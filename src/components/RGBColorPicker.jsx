import { useState } from "react"
import SingleColorPicker from "./SingleColorPicker"

const RGBInitialState = {
  rValue: 255,
  gValue: 150,
  bValue: 0,
}

function RGBColorPicker() { 
  const [RGBValues, setRGBValues] = useState(RGBInitialState)

  const updateRGBValues = (identifier, value) => {
    value > 255 ? value = 255 : value < 0 ? value = 0 : void 0
    
    setRGBValues(prevRGBValues => ({ ...prevRGBValues, [identifier]: value }))
  }

  const { rValue, gValue, bValue } = RGBValues

  const backgroundStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
  }

  return (
    <div className="RGBColorPicker">
      <SingleColorPicker
        identifier={'rValue'}
        value={rValue}
        updateRGBValues={updateRGBValues}
      />
      <SingleColorPicker
        identifier={'gValue'}
        value={gValue}
        updateRGBValues={updateRGBValues}
      />
      <SingleColorPicker
        identifier={'bValue'}
        value={bValue}
        updateRGBValues={updateRGBValues}
      />

      <div
        style={{
          width: 400,
          display: 'flex',
          textAlign: 'center',
          margin: 10,
          alignItems: 'center',
        }}
      >
        <div className="color-box" style={backgroundStyle}></div>
        <div style={{ marginLeft: 10 }}>
          rgb(
            {RGBValues.rValue === '' ? 0 : RGBValues.rValue},
            {RGBValues.gValue === '' ? 0 : RGBValues.gValue},
            {RGBValues.bValue === '' ? 0 : RGBValues.bValue}
          )
        </div>
      </div>
    </div>
  );
}

export default RGBColorPicker