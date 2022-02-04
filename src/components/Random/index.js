function Random(props){
    const {min, max } = props;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return( 
        <div className="Random">
            <p>Random value between {min} and {max} => {randomNumber}</p>
        </div>
    );

}

export default Random;