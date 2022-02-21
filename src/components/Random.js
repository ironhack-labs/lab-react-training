function Random(props) {
    let random= Math.floor(Math.random()*props.max)+props.min

    return (
        <>
        <p>
        Random value {props.min} and {props.max} = {random}
        </p>
        </>
      );
}

export default Random;