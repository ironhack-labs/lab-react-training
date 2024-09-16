export function IdCard({lastName, firstName, gender, height, birth, picture}){
    return (
      <div className="d-flex p-1 border border-dark">
      <img className="profile" src={picture} alt="" />
       <div>
        <p className="my-0 fw-bold">First name: <span className="fw-normal">{firstName}</span></p>
        <p className="my-0 fw-bold">Last name: <span className="fw-normal">{lastName}</span></p>
        <p className="my-0 fw-bold">Gender: <span className="fw-normal">{gender}</span></p>
        <p className="my-0 fw-bold">Height: <span className="fw-normal">{height}</span></p>
        <p className="my-0 fw-bold">Birth: <span className="fw-normal">{birth.toLocaleDateString()}</span></p>
       </div>
      </div>
    );
}