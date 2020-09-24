import React from 'react'

const Random = (props) => {
    const { min, max } = props;
    const randomNum = min + Math.floor(Math.random() * max);
    return (
        <div className="box">
            {`Random value between ${min} and ${max} => ${randomNum}`}
        </div>
    );
};

export default Random;