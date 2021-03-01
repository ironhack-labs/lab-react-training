
function Random({min, max}) {
    let result = Math.floor(Math.random() * (max - min)) + min;

    return (
        <h4>Random value between {min} and {max} => {result}</h4>
    );
}

export default Random;