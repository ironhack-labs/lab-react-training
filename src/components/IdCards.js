function IdCards(props) {
  return (
    <div>
      <div class="card mb-3  " style={{ maxWidth: '540px' }}>
        <div class="row g-0 ">
          <div class="col-md-4">
            <img src={props.image} alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
                <strong>FirstName: </strong>
                {props.firstName} <br />
                <strong>LastName: </strong>
                {props.lastName} <br />
                <strong>Gender: </strong>
                {props.gender} <br />
                <strong>Heigth: </strong>
                {props.heigth} <br />
                <strong>Birth: </strong>
                {props.birth} <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCards;

// {[lastName = props.lastName, firstName = props.firstName, gender = <option>props.gender ? 'male' : 'female'</option>, heigth = props.heigth, birth = props.birth, picture = props.picture ]}
