import React from 'react';
import '../assets/css/Intro.css'
import CardBox from '../components/CardBox'
import Greetings from '../components/Greetings'
import Random from '../components/Random'
import BoxColor from '../components/BoxColor';

const Intro = () => {
    return (
        <div className="Intro">
            <h1>Iteration 1</h1>
            <CardBox/>
            <h1>Iteration 2</h1>
            <Greetings
                lang = 'en'
                text = 'Alex'
            />
            <Greetings
                lang='es'
                text='Edu'
            />
            <h1>Iteration 3</h1>
            <Random
                min={5}
                max={20}
            />
            <Random
                min={70}
                max={100}
            />
            <h1>Iteration 4</h1>
            <BoxColor
                r={255}
                g={0}
                b={0}
            />
            <BoxColor
                r={128}
                g={255}
                b={45}
            />
        </div>
    )
}

export default Intro