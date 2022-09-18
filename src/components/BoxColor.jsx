import React, {useState} from 'react';

function BoxColor() {

  const [state, setState] = useState({R:0,G:0,B:0}); 
  const colorHandler = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value}
    })
  }
  const color = `rgb(${state.R},${state.G},${state.B})`;

  return (
    <>
      <div
        style={{
          border: '1px solid black',
          width: '100%vw',
          height: '10rem',
          marginTop: '3rem',
          backgroundColor: color,
        }}
      >
        <h1 style={{ color: color }}>BoxColor</h1>
      </div>
        <form>
          <label>
            R
            <input name="R" type="number" onChange={colorHandler} />
          </label>
          <label>
            G
            <input name="G" type="number" onChange={colorHandler} />
          </label>
          <label>
            B
            <input name="B" type="number" onChange={colorHandler} />
          </label>
        </form>
    </>
  );
}

export default BoxColor;