import profilesArray from '../data/berlin.json';

function FaceBook() {
  //   console.log(profiles);

  /*
[
  {"firstName": "Aaron", 
  "lastName": "Newell", 
  "country": "England", 
  "img": "https://i.imgur.com/CFgX3Xx.png", 
  "isStudent": false},
  */

  return profilesArray.map((element) => {
    return (
      <div className="facebook-container" key={element.img}>
        <div className="facebook-image-container">
          <img className="facebook-image" src={element.img} alt="" />
        </div>
        <div className="facebook-information-container">
          <ul>
            <li>
              <span className="facebook-list-headline">First Name:</span>
              {element.firstName}
            </li>
            <li>
              <span className="facebook-list-headline">Last Name: </span>
              {element.lastName}{' '}
            </li>
            <li>
              <span className="facebook-list-headline">Country: </span>
              {element.country}
            </li>
            <li>
              <span className="facebook-list-headline">Type: </span>
              {element.isStudent ? 'Student' : 'Teacher'}
            </li>
          </ul>
        </div>
      </div>
    );
  });
}
export default FaceBook;
