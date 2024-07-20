import PropTypes from 'prop-types';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="border border-gray-300 p-4 flex items-center mb-4">
        <img src={picture} alt="profile" className="rounded-full mr-4 w-24 h-24 object-cover"/>
        <div className="id-card-details">
            <p className="mb-2">Last Name: {lastName}</p>
            <p className="mb-2">First Name: {firstName}</p>
            <p className="mb-2">Gender: {gender}</p>
            <p className="mb-2">Height: {height}</p>
            <p className="mb-2">birth: {birth}</p>
        </div>
    </div>
  )
}

IdCard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  birth: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default IdCard