import { useState,useEffect } from 'react';


function LikeButton() {

  const [loader,setLoader] = useState(true)
  const [count,setCount] = useState(0)
  const [title,setTitle] = useState()

const onPressCount = (value)=>{
  if(value === 1){
    //voy a sumar
    setCount(prevState => prevState + 1)
  }else{
    setCount(prevState => prevState - 1)
    //restando
  }
}

  const handleChange = (e) =>{
    const {name,value} = e.target
    setTitle(value)
  }


  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },3000)
  },[])

  useEffect(()=>{
   console.log("me ejecuto con el count", count)
   if(title==="perro"){
    console.log("nova")
   }
  },[count, title])


  return (
   
    <div >
      <div className="likeB">
        <button onClick={()=>onPressCount(1)}><span>{count}Likes</span>  </button>
        
      </div>
      <div>
      </div>
    </div>

    
  );
}

export default LikeButton;

