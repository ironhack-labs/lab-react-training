function Random(props) {
    let randomNum = Math.random();

    let newNumber = randomNum * ((props.max) - (props.min));

    let roundedNum = Math.floor(newNumber) + (props.min);

    return(
        <p>{roundedNum}</p>
    )
};


export default Random;
