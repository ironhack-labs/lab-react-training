function DriverCard({ name, rating, img, car }) {
  let rounded = Math.round(rating);
  let starsdisplay = '';

  if (rounded === 0) {
    starsdisplay = '☆☆☆☆☆';
  }
  if (rounded === 1) {
    starsdisplay = '★☆☆☆☆';
  }
  if (rounded === 2) {
    starsdisplay = '★★☆☆☆';
  }
  if (rounded === 3) {
    starsdisplay = '★★★☆☆';
  }
  if (rounded === 4) {
    starsdisplay = '★★★★☆';
  }
  if (rounded === 5) {
    starsdisplay = '★★★★★';
  }
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'blue',
        color: 'white',
        margin: '5px',
        borderRadius: '10px',
        justifyContent: 'center',
        width: '900px',
      }}
    >
      <div>
        <img
          src={img}
          style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          alt=""
        ></img>
      </div>
      <div>
        <h3>{name}</h3>
        <h3>{starsdisplay}</h3>
        <h3>
          {car.model} {car.licensePlate}
        </h3>
      </div>
    </div>
  );
}

export default DriverCard;
