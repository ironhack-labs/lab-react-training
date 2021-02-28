import React from 'react';

const componentToHex = c => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

const BoxColor = ({ min, max }) => {
    const randomR = Math.floor(Math.random() * (max-min) + min);
    const randomG = Math.floor(Math.random() * (max-min) + min);
    const randomB = Math.floor(Math.random() * (max-min) + min);
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body" style={{ backgroundColor: `rgb(${randomR}, ${randomG}, ${randomB})`}}>
                        rgb ({randomR},{randomG},{randomB})
                        <br/>
                        #{componentToHex(randomR)}{componentToHex(randomG)}{componentToHex(randomB)}   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxColor; 



