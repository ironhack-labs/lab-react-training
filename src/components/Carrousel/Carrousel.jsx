import React, { useState } from "react";
import './Carrousel.css';

const Carrousel = ({ pictures }) => {
    const [counter, setCounter] = useState(0);
    const actualPict = pictures[counter];

    const left = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            setCounter(pictures.length - 1)
        }

    };

    const right = () => {
        if (counter < pictures.length - 1) {
            setCounter(counter + 1)
        } else {
            setCounter(pictures.length - pictures.length)
        }

    };

    return (
        <section>
            <button onClick={left}>left</button>
            <img src={actualPict} alt="" />
            <button onClick={right}>right</button>
        </section>
    );
};

export default Carrousel;
