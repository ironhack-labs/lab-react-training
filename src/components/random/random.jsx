function Random({ min, max }) {
    const randomValue = Math.floor(Math.random() * (max - min +1)) + min;

    return (
        <div>
            <h1> Random number between {min} and {max}: {randomValue}</h1>
        </div>
    )
}

export default Random;