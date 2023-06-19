function BoxColor(props) {
  console.log(props);
  return (
    <div className="boxColor">
      <div>
        <p>
          rgb({props.r}, {props.g}, {props.b})
        </p>
      </div>
    </div>
  );
}

export default BoxColor;
