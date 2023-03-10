import Random from '../components/Random';
import React from 'react';

function Iteration3() {
    return (
        <div className="Iteration3">
            <Random min={1} max={6}> </Random>
            <Random min={1} max={100}> </Random>
        </div>
    );
}

export default Iteration3;