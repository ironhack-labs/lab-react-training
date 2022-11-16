import { useState } from "react";


function LikeButton() {

    const [counter, setCounter] = useState(0);
    const [changeColor, setChangeColor] = useState("purple");

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const handleColorChange = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setChangeColor(randomColor);
    };
    console.log("color", changeColor)

    const increment = () => {
        setCounter((old) => old + 1);
        console.log("hola");
    };

    return (
        <>
            <div>
                <button onClick={() => {
                    handleColorChange();
                    increment();
                }} style={{
                    padding: "15px 25px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "20px",
                    backgroundColor: `${changeColor}`
                }}>{counter} Likes</button>
            </div>
        </>
    );
};

export default LikeButton;