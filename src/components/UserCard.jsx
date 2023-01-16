export default function UserCard({ person, country, isSelected }) {
  return (
    <div
      className="user-card"
      style={{
        backgroundColor:
          person.country === country && isSelected ? 'lightblue' : 'white',
      }}
    >
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
}
