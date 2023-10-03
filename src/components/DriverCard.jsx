

const DriverCard = ({ name, rating, img, car }) => {
  const renderStars = () => {
    if (rating < 1) {
      return '☆☆☆☆☆';
    } else if (rating === 1 || rating < 2) {
      return '★☆☆☆☆';
    } else if (rating === 2 || rating < 3) {
      return '★★☆☆☆';
    } else if (rating === 3 || rating < 4) {
      return '★★★☆☆';
    } else if (rating === 4 || rating < 5) {
      return '★★★★☆';
    } else if (rating === 5 || rating < 6) {
      return '★★★★★';
    }
  };
  return (
    <div
      className="flex gap-2 border-solid border-2 border-blue-800 p-2
    m-2 justify-center bg-blue-600 text-white rounded-xl"
    >
      <img className="w-40 rounded-full" src={img} alt={name} />
      <div className='flex flex-col items-start'>
        <h3 className='text-bold text-2xl '>{name}</h3>
        <p>{renderStars()}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
