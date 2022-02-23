import { useState } from 'react';

export default function Random() {

    const [random, setRandom] = useState({
        min: 0,
        max: 0
    })
    const [result, setResult] = useState({
      random:0
    })

    const getRandom = (e) => {
      e.preventDefault()
      const res = Math.floor(Math.random()*(random.max-random.min+1)+random.min)
      return res
    }
      
    setResult({
      result
    })
   
    const handleChange = (event) =>{
      console.log(event.target.value)
     
      setRandom({
        ...random,
        [event.target.name]: event.target.value
      })

    }
    

  return (
    <>
      <form onSubmit={()=>{ getRandom() }}>
          <label>Minimo:</label>
          <input name="min" onChange={(ev)=>{ handleChange(ev)}} type="number" value={random.min} />
          <label>Maximo:</label>
          <input name="max" onChange={(ev)=>{ handleChange(ev)}} type="number" value={random.max}/>
          <button type="submit">Random</button>
      </form>
    </>
    
     
  )
}
