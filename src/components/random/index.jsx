function Random (props){

    let min = props.nm.min;
    let max = props.nm.max;

    let number = Math.floor(Math.random() * max) + min;

    return(
        <div>
            <p>Random value between {min} and {max} => {number}.</p>
        </div>
    )
}
export default Random;