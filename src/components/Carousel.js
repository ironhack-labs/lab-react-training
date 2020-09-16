import React, {useState} from 'react'

const Carousel = (props) => {

    let [index, setIndex] = useState(0);

    const leftClick = () => 
    {
        index--;
        index = index < 0 ? props.imgs.length - 1 : index
        setIndex(index)        
    }    
    
    const rightClick = () => 
    {
        index++;
        index = index >= props.imgs.length ?  0 : index
        setIndex(index)        
    }

    return (
        <div>
            <button onClick={leftClick}>Left</button>
            <img src={props.imgs[index]} alt=""/>
            <button onClick={rightClick}>Right</button>
        </div>
    )
}

export default Carousel
