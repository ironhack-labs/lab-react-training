const Random = ({min,max}) => {

    let result = Math.floor(Math.random() * (max - min) + min);
    return (
        <div>
        <p style={{border:"1px solid Black", width: "300px"}}>
        Random value between {min} and {max} => {result}
        </p>
        </div>
    );
}

export default Random;
