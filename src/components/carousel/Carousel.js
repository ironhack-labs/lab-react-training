import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import './Carousel.css';

const totalSlides = 3;

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    
    // const imgCarousel = [
    //     'https://randomuser.me/api/portraits/women/1.jpg',
    //     'https://randomuser.me/api/portraits/men/1.jpg',
    //     'https://randomuser.me/api/portraits/women/2.jpg',
    //     'https://randomuser.me/api/portraits/men/2.jpg'
    // ];

    const next = () => {
        if(current >= totalSlides) return 
        else setCurrent(current + 1);
    }
    const prev = () => {
        if(current === 0){
            return
        } else {
            setCurrent(current - 1)
        }
    }
    const desired = e => {
        setCurrent(Number(e.target.id))
    }

    useEffect(() => {
        ref.current.style.transition = 'all 0.2sease-in-out';
        ref.current.style.transform = `translateX(-${current}00%)`;
    }, [current]);

    return(
        <div className='wrapper'>
            <p>{current}</p>
            <div className='frame'>
                <div 
                    className='box-container'
                    ref={ref}>
                        <div className='box'>
                            <img 
                                src='https://randomuser.me/api/portraits/women/1.jpg' 
                                alt='carousel img'
                            />
                        </div>
                        <div className='box'>
                            <img  
                                src='https://randomuser.me/api/portraits/men/1.jpg' 
                                alt='carousel img'
                            />
                        </div>
                        <div className='box'>
                            <img  
                                src='https://randomuser.me/api/portraits/women/2.jpg' 
                                alt='carousel img'
                            />
                        </div>
                        <div className='box'>
                            <img  
                                src='https://randomuser.me/api/portraits/men/2.jpg' 
                                alt='carousel img'
                            />
                        </div>
                    </div>
                    <div className='button-container'>
                        <div 
                            className='button' 
                            onClick={prev}>
                                Left
                        </div>
                        <div 
                            className='button' 
                            onClick={next}>
                                Right
                        </div>
                    </div>
                    <div className='button-2-container'>
                        {[0, 1, 2, 3].map(num => (
                        <div
                            className={`button-2 ${num === current && 'active'}`}
                            onClick={desired}
                            id={num}
                            key={num}
                        />
                        ))}
                    </div>
            </div>
        </div>
    )
}

ReactDOM.render( <Carousel/>, document.getElementById("root") )


export default Carousel;