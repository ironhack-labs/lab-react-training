import React, { useState } from 'react'

export default function SingleColorPicker({color, value, onChange}) {
  const [valueColor, setValueColor] = useState(value);

  const changeBackground = (event) => {
      onChange(color, event.target.value);
      setTimeout(() => {setValueColor(event.target.value)}, 1);
    //   console.log({value: valueColor, event: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="single-color" onSubmit={handleSubmit}>
        <form>
            {color == "r" && 
                <div>
                    <div style={{backgroundColor: `rgb(${valueColor},0,0)`}} className="square"></div>
                    <label>R: </label>
                    <input type="number" value={value} onChange={changeBackground} min="0" max="255"/>
                </div>
            }
            {color == "g" && 
                <div>
                    <div style={{backgroundColor: `rgb(0,${valueColor},0)`}} className="square" min="0" max="255"></div>
                    <label>G: </label>
                    <input type="number" value={value} onChange={changeBackground}/>
                </div>
            }
            {color == "b" && 
                <div>
                    <div style={{backgroundColor: `rgb(0,0, ${valueColor})`}} className="square" min="0" max="255"></div>
                    <label>B: </label>
                    <input type="number" value={value}  onChange={changeBackground}/>
                </div>
            }
        </form>
    </div>
  )
}
