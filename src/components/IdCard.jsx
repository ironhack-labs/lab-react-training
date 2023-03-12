function IdCard(user) {
  return (
    <div className="flex justify-center font-[Poppins]">
      <div className="card border-4 bg-slate-200 border-slate-600 rounded-full flex px-10 py-5 my-5 hover:bg-green-200 hover:border-green-600 hover:cursor-pointer hover:shadow-2xl transform transition duration-500 hover:scale-105">
        <div>
          <img src={user.picture} alt="UserPhoto" className="rounded-full border-4 border-white" />
        </div>
        <div className="text-start px-10 mt-2">
          <p><b>First Name: </b>{user.firstName}</p>
          <p><b>Last Name: </b>{user.lastName}</p>
          <p><b>Gender: </b>{user.gender}</p>
          <p><b>Height: </b>{user.height.toFixed(2) / 100}</p>
          <p><b>Birth: </b>{user.birth.toDateString()}</p>
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

