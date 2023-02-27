
import "./Random.css"
function Random({ min, max }) {
    const randomNumber = (Math.random() * (max - min) + min).toFixed(0);
    const result = `Random value between ${min} and ${max} => ${randomNumber}`
    return (
        <div className="RandomContainer">
            <p>{result}</p>
        </div>
    );
}

export default Random;