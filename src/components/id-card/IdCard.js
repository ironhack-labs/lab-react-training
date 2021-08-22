function IdCard(props) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={props.picture}
            className="img-fluid rounded m-2"
            alt="..."
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <p className="card-text m-0">
              {' '}
              <b>First name:</b> {props.firstName}
            </p>
            <p className="card-text m-0">
              {' '}
              <b>Last name:</b> {props.lastName}
            </p>
            <p className="card-text m-0">
              {' '}
              <b>Gender:</b> {props.gender}
            </p>
            <p className="card-text m-0">
              {' '}
              <b>Height:</b> {props.height}
            </p>
            <p className="card-text m-0">
              {' '}
              <b>Birht date:</b> {props.birth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
