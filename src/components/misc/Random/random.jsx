import './random.css';

const Random = ({min, max}) => {
    const randomNumber = Math.floor((Math.random() * (max - min)) + min);

    return (
        <div className="Random">
          Random value between {min} and {max} =&gt; {randomNumber}
        </div>
      )


}

export default Random;