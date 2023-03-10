import "./randon.css";
import React from "react";

function Random({ min, max }) {
    const randomNum = Math.floor(Math.random() * (max - min) + min);

    return (
        <div className="Random">
            <p>
                Random value between {min} and {max} =&gt; {randomNum}
            </p>
        </div>
    );
}

export default Random;