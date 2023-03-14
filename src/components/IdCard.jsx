function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="flex justify-center">
      <div className="card border-4 bg-slate-200 border-slate-600 rounded-full flex px-10 py-5 my-5 hover:bg-green-200 hover:border-green-600 hover:cursor-pointer hover:shadow-2xl transition duration-300 hover:scale-110">
        <div>
          <img src={picture} alt="UserPhoto" className="rounded-full border-4 border-white" />
        </div>
        <div className="text-start px-10">
          <p><b>First Name: </b>{firstName}</p>
          <p><b>Last Name: </b>{lastName}</p>
          <p><b>Gender: </b>{gender}</p>
          <p><b>Height: </b>{height.toFixed(2) / 100}</p>
          <p><b>Birth: </b>{birth.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}

IdCard.defaultProps = {
  lastName: '',
  firstName: '',
  gender: '',
  height: '',
  birth: '',
  picture: ''
}

export default IdCard;