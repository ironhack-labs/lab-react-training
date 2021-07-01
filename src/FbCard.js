import './FbCard.css';

const FbCard = ({firstName, lastName, country, img, isStudent, uniqueKey}) => {
    return (
      <article key={uniqueKey} className="FbCard">
        <div className="FbCard__wrapper">
          <div className="FbCard_img__wrapper">
            <img src={img} alt="student profile" />
          </div>
          <div className="FbCard_body__wrapper">
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
      </article>
    );
}
 
export default FbCard;