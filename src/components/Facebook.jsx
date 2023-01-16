import Data from '../data/berlin.json';
export default function Facebook() {
  return (
    <div>
      {Data.map((person) => {
        return (
          <div className="user-card">
            <img src={person.img} width={120} alt="" />
            <div className="user-details">
              <div>
                <span>First name:</span>
                {person.firstName}
              </div>
              <div>
                <span>Last name:</span>
                {person.lastName}
              </div>
              <div>
                <span>Coutry:</span>
                {person.country}
              </div>
              <div>
                <span>Type:</span>
                {person.isStudent ? 'Student' : 'Teacher'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
