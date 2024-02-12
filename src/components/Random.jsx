import PropTypes from "prop-types";

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Random(props) {
  const { min, max } = props;
  const randomValue = getRandomInteger(min, max);

  return (
    <p>
      Random value between {min} and {max} ={">"} {randomValue}
    </p>
  );
}

Random.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Random;
