function Random() {

    const randomInteger = (max, min) => {
        return Math.floor(Math.random() * (((max - min) + 1)) + min);
    };

    return (
        <div>
            <h1>Random value between 1 and 6 => {randomInteger(6, 1)}</h1>
            <h1>Random value between 1 and 100 => {randomInteger(100, 1)}</h1>
        </div>

    )
}

export default Random;