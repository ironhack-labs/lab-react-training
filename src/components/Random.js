import "./Random.css";

function Random(props){
    const {min, max} = props;
    let array=[];

    for(let element= min+1; element < max; element++){
        array.push(element);
    }

    let randomValue = array[Math.floor(Math.random()*array.length)];

    return(
        <div className="Random">
            <p>Random value between {min} and {max} = {randomValue}</p>
        </div>
    )
}

export default Random;