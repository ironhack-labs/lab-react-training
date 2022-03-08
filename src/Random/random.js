import './Random.css'
function Random(props) {

    function randomValue({min, max}) {
        return Math.floor(Math.random() * (max-min)) + min;
    }
     return (
      <div className = 'card'>
        <h1> Random value between {props.min} and {props.max} => {randomValue(props)} </h1>
      </div>
    );
}

export default Random;
