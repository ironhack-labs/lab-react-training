import { useEffect, useState } from "react"

const Random = (props)=> {
  const [result,setResult] = useState(0)
  const changeResult = () =>{
    const randomNumber = Math.floor(Math.random()*(props.max - props.min + 1) + props.min)
    setResult(randomNumber)
  }
  useEffect(()=>{
    changeResult()
  },[])
  return(
    <div className='m-2' style={{border:'2px solid black'}} >
        <h4 className='p-1' >Random value between {props.min} and {props.max} = {result}</h4>
    </div>
  )
}
export default Random