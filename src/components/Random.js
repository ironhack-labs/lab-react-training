

function Random({min,max}) {
    let calculateRandom;
    calculateRandom = (min,max) => Math.floor(Math.random() * (max - min) + min);
    return <div>
        <p>Random value between 1 and {max} is {calculateRandom(min,max)}</p>
    </div>
}

export default Random;