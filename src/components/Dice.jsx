import { useState, useEffect } from "react";

function Dice() {
    const [dicePic, setDicePic] = useState(1)

    const imgStyle = {
        height: '80px',
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // to iterate in order
            // if (dicePic + 1 < 7) setDicePic(dicePic + 1);
            // else setDicePic(1);
            setDicePic(Math.floor(Math.random() * 6) + 1)

        }, 1000);
        return () => clearInterval(interval);
    }, [dicePic]);

    return (
        <div>
            <img style={imgStyle} src={
                'src/assets/images/dice' + dicePic + '.png'
            } alt="Dice picture" />
        </div>
    )
}

export default Dice;