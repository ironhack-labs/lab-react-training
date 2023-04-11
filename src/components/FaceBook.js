import profiles from '../data/berlin.json';

const FaceBook = () => {
  const selectedCard = (e) => {
    const country = e.target.innerText;
    const cards = document.querySelectorAll('.facebook-card');
    cards.forEach((card) => {
      if (card.dataset.country === country) {
        card.style.backgroundColor = '#a3d2e2';
      } else {
        card.style.backgroundColor = 'white';
      }
    });
  };

  const faceCard = [...profiles].map((face) => {
    return (
      <div
        className="facebook-card"
        key={face.firstName}
        data-country={face.country}
      >
        <div className="profile-picture">
          <img src={face.img} alt="a person's face" />
        </div>
        <div className="face-text">
          <span>
            <strong>First name: </strong>
            {face.firstName}
          </span>
          <span>
            <strong>Last Name: </strong>
            {face.lastName}
          </span>
          <span>
            <strong>Country: </strong>
            {face.country}
          </span>
          <span>
            <strong>Type: </strong>
            {face.isStudent ? 'Student' : 'Teacher'}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <button onClick={selectedCard}>USA</button>
        <button onClick={selectedCard}>England</button>
        <button onClick={selectedCard}>Malaysia</button>
        <button onClick={selectedCard}>Germany</button>
        <button onClick={selectedCard}>Sweden</button>
        <button onClick={selectedCard}>Nigeria</button>
        <button onClick={selectedCard}>Italy</button>
        <button onClick={selectedCard}>Scotland</button>
        <button onClick={selectedCard}>Kazakhstan</button>
        <button onClick={selectedCard}>Russia</button>
        <button onClick={selectedCard}>Catalonia</button>
        <button onClick={selectedCard}>France</button>
      </div>
      {faceCard}
    </div>
  );
};

export default FaceBook;
