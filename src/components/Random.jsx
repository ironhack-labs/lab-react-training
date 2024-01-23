function Random(props) {
  const { min, max } = props;
  const getRandNum = (_min, _max) => Math.floor(Math.random() * (_max - _min) + _min);
  return (
      <p className="text-output">
        Random value between {min} and {max} ={'>'} {getRandNum(min, max)}
      </p>
  );
}
export default Random;
