import './Random.css'


const GenerateRandom = (props) => {
    const min = props.min
    const max = props.max



    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="randomNumber">
            <p>Random value between {min} and {max} {'=>'} {randomNumber}</p>
        </div>)
}

export default GenerateRandom