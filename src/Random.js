function Random(props) {

    let min = props.min;
    let max = props.max;
    
    let result = Math.floor(Math.random() * (max - min) + min);

    return (
        <div className="randomNum">
          <p>Random value between {props.min} and {props.max} ={">"} {result}</p>
        </div>
    );

}

export default Random;