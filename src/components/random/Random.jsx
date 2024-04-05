import "./Random.css";

function Random({ min, max }) {

    return (
        <div>
            <h4 className="borderRandom">{`Random value between ${min} and ${max} => ${Math.floor(Math.random() * (max - min) + min)}`}</h4>
        </div>
      )
    }


 export default Random;