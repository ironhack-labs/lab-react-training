import './Random.css'

const Random = (props) => {
    console.log(props);
    const randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

    return (
        <>
            <p className='idRandom'>
                Random value between {props.min} and {props.max} is {randomNumber}
            </p>


        </>
    )

}

export default Random;
