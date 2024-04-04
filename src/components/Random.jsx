
function Random (props) {
    const { min, max } = props;

    const randomResult = Math.floor(Math.random() * max + min);

    return (
        <div class="random-box">
            <p>Random value between {min} and {max} equals to {randomResult}</p>
        </div>
    );
}

export default Random;