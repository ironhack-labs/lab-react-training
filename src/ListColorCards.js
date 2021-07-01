import ColorCard from './ColorCard';

import './ListColorCards.css'

const ListColorCards = ({title}) => {
    return (
      <article className="ListColorCards">
        <h2>{title}</h2>
        <section className="ListColorCards__wrapper">
          <ColorCard r={204} g={26} b={151} />
          <ColorCard r={179} g={25} b={171} />
          <ColorCard r={185} g={0} b={120} />
          <ColorCard r={158} g={25} b={77} />
          <ColorCard r={163} g={33} b={0} />
          <ColorCard r={104} g={25} b={22} />
          <ColorCard r={100} g={55} b={5} />
        </section>
      </article>
    );
}
 
export default ListColorCards;