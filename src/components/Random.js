
function Random(props) {
    const {min, max} = props
    return (
        <div className="Box">
            <p>Random value between {min} and {max} = {Math.floor(Math.random() * (max)) + (min)}</p>      
        </div>
    );
}

export default Random;