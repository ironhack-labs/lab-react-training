const Random = (props) => {
    const {max,min} = props;

    return (
      <div className="cardProfile">
        <span>Random value between {min} and {max} =&gt; {Math.floor(Math.random() * (max - min) + min)} </span>
      </div>
    );
  };
  
  export default Random;