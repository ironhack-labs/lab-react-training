import React, { useState } from 'react';
import "./LikeButton.css";

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);
    let [plural, setPlural] = useState("s");

    const colors = ['purple','blue','green','yellow','orange','red'];

    const addLike = () => {
        setCount(count + 1);

        if (count !== 0) {
            setPlural(plural = "s");
        } else {
            setPlural(plural = "");
        };

        if ((color >= 0) && (color <= 4)) {
            setColor(color + 1);
        } else {
            setColor(color - 5);
        };
    };
  
    return (
        <button className="likes" onClick={addLike} style={{backgroundColor: colors[color]}}>{count} Like{plural}</button>
    );
}

export default LikeButton;