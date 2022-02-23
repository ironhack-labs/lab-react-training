import { useState } from 'react';

export default function Random(props) {

    const [random, useRandom] = useState({
        min: 0,
        max: 0,
        random:0
    })

    const random = () => {
        
    }


  return (
    <form onSubmit={}>
        <label>Minimo:</label>
        <input name="min" onChange="" type="number"/>
        <label>Maximo:</label>
        <input name="max" onChange="" type="number" />
        <button type="submit">Random</button>
    </form>
  )
}
