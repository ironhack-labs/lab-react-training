import { AiOutlineStar } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

function Rating({ children }) {
  const numberRound = Math.round(children);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) =>
        numberRound >= value ? (
          <BsFillStarFill key={value} />
        ) : (
          <AiOutlineStar key={value} />
        )
      )}
    </div>
  );
}

export default Rating;
