import Rating from './Rating'
import '../assets/css/DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {
    return (
      <div
        className="DriverCard border border-light rounded-3 d-flex align-items-center justify-content-center p-4 my-4"
        style={{
          backgroundColor: '#455eb5',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#fff',
        }}
      >
        <div className="imgWrapper">
          <img className="driverPicture" src={img} alt="driver" />
        </div>
        <div className="d-flex flex-column align-items-start justify-content-center ms-4">
          <h4 className="m-0"> { name } </h4>
          <Rating>{ rating }</Rating>
          <p className="m-0"> { car.model } - { car.licensePlate } </p>
        </div>
      </div>
    );
}

export default DriverCard