import './IdCard.css'
import '../../App'

const IdCard = ({lastName, firstName, gender, height, picture}) => {
        return (
            <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-2">
              <img src={picture} alt={`${firstName} ${lastName}`} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height} cm</p>
                </div>
              </div>
            </div>
          </div>
          );
        }
        

export default IdCard