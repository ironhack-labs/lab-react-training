import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className='flex justify-center items-center transition ease-in-out bg-blue-500 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl mx-8 py-4 mb-8 cursor-pointer hover:shadow-indigo-400 hover:shadow-lg'>
      <img src={img} alt="Driver" className='object-cover h-32 w-32 rounded-3xl ml-20' />
      <div className='w-3/5'>
        <span className='text-white font-bold text-2xl'>{name}</span>
        <Rating
          children={rating}
        />
        <span className='text-white'>{car.model} - {car.licensePlate}</span>
      </div>
    </div>
  )
}

DriverCard.defaultProps = {
  name: 'Write here the dirver name',
  rating: '0',
  img: 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png',
  car: ''
}

export default DriverCard;