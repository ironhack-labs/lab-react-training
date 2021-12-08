function Random(props) {
      let calc = Math.floor(Math.random() * props.max) + props.min
      return (
        <div>
          <h1 className="box">Random value between {props.min} and {props.max} =  {calc}</h1>
        </div>
      );
}

export default Random
