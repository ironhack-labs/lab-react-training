import Moment from 'moment';

function IdCard(props) {
  return (
    <div className="idCard">
      <div className="row mx-1 my-2">
        <div className="col">
          <div className="card flex-row border-dark p-2">
            <img
              className="card-img-left"
              height="200px"
              width="200px"
              src={props.picture}
              alt="portrait-img"
            />
            <div className="card-body text-start">
              <h5 className="card-text">
                <b>First name: </b>
                {props.firstName}
              </h5>
              <h5 className="card-text">
                <b>Last name: </b>
                {props.lastName}
              </h5>
              <h5 className="card-text">
                <b>Gender: </b>
                {props.gender}
              </h5>
              <h5 className="card-text">
                <b>Height: </b>
                {props.height}
              </h5>
              <h5 className="card-text">
                <b>Birth: </b>
                {Moment(props.birth).format('ddd MMM DD YYYY')}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
