
function Random ({min, max}) {
    let randomValue = min + Math.floor(Math.random() * (max + 1 - min));

    return (
    <div>
        <p> Random value between {min} and {max} = {randomValue}</p>
        <p> {max}</p>
    </div>
    )
}

export default Random;