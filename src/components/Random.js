function Random({min, max}) {

    const compute = (min, max) => Math.floor(Math.random() * max) + min;
    return (
        <div className="wrapper">
            <span>Random value between {min} and {max} => {compute(min, max)}</span>
        </div>
    );
}

export default Random;