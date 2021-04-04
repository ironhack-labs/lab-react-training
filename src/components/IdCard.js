import '../assets/css/IdCard.css';
import moment from 'moment';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
      <div className="IdCard card mt-3 mb-3" style={{ 'maxWidth': '800px', 'margin': '0 auto' }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex p-1">
            <img className="img-fluid" src={picture} alt={picture} />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <p>
                <b>First Name: </b>
                {firstName}
              </p>
              <p>
                <b>Last Name: </b>
                {lastName}
              </p>
              <p>
                <b>Gender: </b>
                {gender}
              </p>
              <p>
                <b>Height: </b>
                {height}
              </p>
              <p>
                <b>Birth: </b>
                {moment(birth).format('dddd, MMMM Do YYYY')}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default IdCard;
