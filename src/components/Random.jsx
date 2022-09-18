import React from 'react';
import { useState } from 'react';

function Random() {
  const [state, setState] = useState({ min: 0, max: 0, random: 0 });
  console.log(state);
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumberHandler = (event) => {
    event.preventDefault();
    const randomNumber = getRandomIntInclusive (state.min,state.max)
    setState((prevState) => {
      return { ...prevState, random: randomNumber };
    });
  };

  const changeHandler = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <div>
        <strong>Random Number :</strong>{ state.random}
      </div>
      <form onSubmit={randomNumberHandler}>
        <label>
          Min
          <input type="number" name="min" onChange={changeHandler} />
        </label>
        <label>
          Max
          <input type="number" name="max" onChange={changeHandler} />
        </label>
        <button type="submit">Get Random Number Between them </button>
      </form>
    </>
  );
}

export default Random;