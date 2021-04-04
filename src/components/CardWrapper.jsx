import cardData from '../data/cards.json';
import CreditCard from './CreditCard';

const CardWrapper = () => {
  return (
    <div className="row d-flex justify-content-center ">
      {cardData.map((card) => {
        return (
          <div
            className="col-xl-4"
            style={{ maxWidth: '380px' }}
            key={card.number}
          >
            <CreditCard {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default CardWrapper;
