function IdCard({ card }) {
  return card.map((each) => {
    return (
      <>
        <div className="parent">
          <img src={each.picture} alt=""></img>
          <div>
            <ul>
              <li>First Name: {each.firstName}</li>
              <li>Last Name: {each.lastName}</li>
              <li>Gender: {each.gender}</li>
              <li>Height: {each.height}</li>
              <li>Birth: {each.birth}</li>
            </ul>
          </div>
        </div>
      </>
    );
  });
}

export default IdCard;
