import profiles from '../data/berlin.json';

function Facebook() {
  return (
    <>
      {profiles.map((elem) => {
        return (
          <div className='facebookBox'>
            <img src={elem.img} alt={`${elem.firstName} ${elem.lastName}`} width={150} />
            <div className='facebookData'>                
                    <span className='bolden'>First name: </span>
                    <span>{elem.firstName}</span>
                    <br />
                    <span className='bolden'>Last name: </span>
                    <span>{elem.lastName}</span>
                    <br />
                    <span className='bolden'>Country: </span>
                    <span>{elem.country}</span>
                    <br />
                    <span className='bolden'>Type: </span>
                    { elem.isStudent && <span>Student</span> }
                    { !elem.isStudent && <span>Teacher</span> }
                
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Facebook;
