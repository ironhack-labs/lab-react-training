import { useState } from 'react'
import Num from './Num.js'

const NumbersTable = (props) => {
    //const [numb, setCurrentNumber] = useState(0)
    const arr = [];
    for(let i =1; i <= props.limit; i++){
        //numb = i
        console.log(props.limit)
        arr.push(<Num num={i} key={i}/>);
    }
    console.log(arr)
    
    return <div className="div-numberstable"> {arr} </div>
}

export default NumbersTable