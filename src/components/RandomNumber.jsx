import {PropTypes} from 'prop-types';

function RandomNumber({ num1, num2 }) {
  return (
    <>
        <p>Random number between {num1} and {num2} is {Math.floor(Math.random() * (num2 - num1 + 1)) + num1}</p>
    </>
)
}

RandomNumber.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired,
};

export default RandomNumber