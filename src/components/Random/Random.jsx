import './Random.css';

const Random = ({ min, max }) => {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div>
            <h1 className="randomText"> {`Random value between ${min} and ${max} => ${getRandomIntInclusive(min, max)}`}</h1>
        </div>
    );

}

export default Random;