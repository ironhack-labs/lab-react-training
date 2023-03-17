function IdCard({lastName, firstName, gender, height, birth, picture}) {

  return <section class='d-flex flex-row'>
    <img class='img-fluid'  style={{"width": "128px", "height": "128px"}} src={picture} alt={picture} />
    <div class='flex-column'>
      <div class="d-flex flex-row">
        <h5 class='m-0'>First Name:</h5><h5 class="fw-light m-0">{lastName}</h5>
      </div>
      <div class="d-flex flex-row">
        <h5 class='m-0'>Last Name: </h5><h5 class="fw-light m-0">{firstName}</h5>
      </div>
      <div class="d-flex flex-row">
        <h5 class='m-0'>Gender: </h5><h5 class="fw-light m-0">{gender}</h5>
      </div>
      <div class="d-flex flex-row">
        <h5 class='m-0'>Height: </h5><h5 class="fw-light m-0">{height}</h5>
      </div>
      <div class="d-flex flex-row">
        <h5 class='m-0'>Birth: </h5><h5 class="fw-light m-0">{birth}</h5>
      </div>
    </div>
  </section>;
}

export default IdCard;