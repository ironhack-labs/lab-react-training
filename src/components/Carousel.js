import { useState } from 'react'

const Carousel = (props) => {
const [current, setCurrent] = useState(0)

return <div>
    <img src={props.imgs[current]}></img><br/>
    <button onClick={() => {
        if(current == props.imgs.length-1){
            setCurrent(0)
        }else{
            setCurrent(current + 1)
        }
        
        }}>Previous</button>
    <button onClick={() => {
        if(current == 0){
            setCurrent(props.imgs.length-1)
        }else{
            setCurrent(current - 1)
        }
        
        }}>Next</button>
</div>
}

export default Carousel