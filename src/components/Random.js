function Random(props) {
    const { max, min } = props;
    let number = Math.floor(Math.random() * (max - min) + min);
    
    return (
        <p className="container">
            Random value between {min} and {max} => {number}
        </p>
    );
}

export default Random;