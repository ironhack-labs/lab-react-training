import Greeting from './Greeting';
import Random from './Random';
import './IdCard.css';

const IdCard = ({firstName, lastName, country, img, isStudent, lang, uniqueKey}) => {
    return (
      <article key={uniqueKey} className="IdCard">
        <section className="IdCard__content">
          <div className="IdCard_header">
            <p>
              <Greeting lang={lang} firstName={firstName} />
              and my favorite number is <Random min={1} max={5} />!
            </p>
          </div>
          <div className="IdCard__wrapper">
            <div className="IdCard_img__wrapper">
              <img src={img} alt="student profile" />
            </div>
            <div className="IdCard_body__wrapper">
              <p>
                <b>First Name :</b> {firstName}
              </p>
              <p>
                <b>Last Name :</b> {lastName}
              </p>
              <p>
                <b>Country :</b> {country}
              </p>
              {isStudent && (
                <p>
                  <b>Currently enrolled :</b> Yes
                </p>
              )}
              {!isStudent && (
                <p>
                  <b>Currently enrolled :</b> No
                </p>
              )}
            </div>
          </div>
        </section>
      </article>
    );
}
 
export default IdCard;