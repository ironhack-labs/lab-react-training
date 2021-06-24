import React, {useState} from 'react'



export default function Carousel(props) {
    const [count, setCount] = useState(0)

    let left = '<'
    let right = '>'

    function mod(n, m) {
        return ((n % m) + m) % m;
      }
      
    console.log('length',props.imgs.length)
    return (
        <div className='carousel'>
            <button onClick={()=> setCount(count - 1)}>
                {left}
            </button>
            <img src={props.imgs[mod(count, props.imgs.length)]}/>
            <button onClick={() => setCount(count + 1)}>
                {right}
            </button> 
        </div>
    )
}
