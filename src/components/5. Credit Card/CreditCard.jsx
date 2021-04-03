import '../5. Credit Card/CreditCard.css';
import CreditCardInfo from './CreditCardInfo';
import { cardInfo } from '../../data/Data';

const CreditCard = () => {
  return (
    <div>
      {cardInfo.map((info) => {
        return(
        <CreditCardInfo {...info} key={info.number} />
        )
      })}
    </div>
  );
};
export default CreditCard;
