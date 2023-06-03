import { AiOutlineStar } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

function Rating({ children }) {
  const numberRound = Math.floor(children);
  console.log(numberRound);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((value, index) =>
        numberRound >= index + 1 ? <BsFillStarFill /> : <AiOutlineStar />
      )}
    </div>
  );
}

export default Rating;
