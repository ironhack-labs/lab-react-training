import './random.css';

/* function GenerateRandomNum(min, max) {
  return (
    Math.floor(Math.random() *(max - min + 1) + min )
  )
} */
const Random = ({ min, max }) => {
  return (
    <p>Random value between {min} and {max} is { Math.floor(Math.random() *(max - min + 1) + min )}</p>
  )
}
export default Random;
