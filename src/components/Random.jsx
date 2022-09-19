function Random({ min, max }) {
    const value = Math.floor(Math.random() * (max - min)) + min;
    return <p className="random border">
        Random value between {min} and {max} ={">"} {value}
    </p>
}

export default Random;