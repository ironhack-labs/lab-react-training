const Random = (props) => {
  const myRandomNumber =
    Math.floor(Math.random() * (props.max - props.min)) + props.min;
  console.log(myRandomNumber);
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '6px',
        textAlign: 'left',
        fontSize: '2rem',
      }}
    >
      <p>
        {/* gt is the arrow */}
        Random value between {props.min} and {props.max} =&gt; {myRandomNumber}{' '}
      </p>
    </div>
  );
};

export default Random;
