import React from "react";

class Random extends React.Component {
    render(min, max) {
        let randomNum = Math.floor(Math.random() * max) + min;
        
        return(
            <div>
                <h3>
                   Random value between {min} and {max} = {randomNum} 
                </h3>
            </div>
        );
    };
}

export default Random;