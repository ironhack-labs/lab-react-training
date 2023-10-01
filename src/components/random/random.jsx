import "./random.css";


function RandomValue(props) {
    const { min, max} = props;
    const randomNumber= Math.floor(Math.random() * (max - min + 1)) + min;

    return <>
        <div className='randomCard'>
                <p> value between {min} and {max}: {randomNumber}</p>
        </div>
       </>
   }

   export default RandomValue;   
