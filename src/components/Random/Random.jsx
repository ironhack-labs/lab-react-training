import './Random.css'

const Random = ({ min, max }) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return <div class='divisor'>{randomNum}</div>;
};

export default Random;