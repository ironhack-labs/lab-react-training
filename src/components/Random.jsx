const Random = ({max, min}) => {
    function random(max, min){
        return Math.floor(Math.random() * (max - min) + min);
    } 
    return(
        <div className="random">
        <p>Random value between {min} and {max} => {random(max, min)}</p>

        </div>
    );

}

export default Random;