/* eslint-disable react/prop-types */
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
  <div className="border border-2 border-black d-flex flex-wrap p-2 mb-2">
    {/* IMG */}
    <div>
        <img src={picture} alt={`Picture ${firstName}`} />
    </div>
    {/* INFO */}
    <div className="text-start mx-2">
        <p className="m-0"><strong>First Name</strong>: {firstName}</p>
        <p className="m-0"><strong>Last Name</strong>: {lastName}</p>
        <p className="m-0"><strong>Gender</strong>: {gender}</p>
        <p className="m-0"><strong>Height</strong>: {height}</p>
        <p className="m-0"><strong>Birth</strong>: {birth.toDateString()}</p>
    </div>
  </div>
  )
};

export default IdCard;
