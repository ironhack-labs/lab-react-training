function IdCard(props) {
  return (
    <section className="idCard">
      <div className="idPic">
        <img src={props.picture} alt="" />
      </div>
      <div>
        <p>
          {' '}
          <span>Last name</span>: {props.lastName}{' '}
        </p>
        <p>
          {' '}
          <span>First name</span>: {props.firstName}{' '}
        </p>
        <p>
          <span>Gender</span>: {props.gender}{' '}
        </p>
        <p>
          {' '}
          <span>Height</span>: {props.height}{' '}
        </p>
        <p>
          {' '}
          <span>Birth</span>: {props.birth.toDateString()}{' '}
        </p>
      </div>
    </section>
  );
}

export default IdCard;
