import React from 'react';
import Rating from '../iteration6/Rating';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div className="flex text-sm text-gray-500 space-x-4">
      <div className="flex-none py-10">
        <img src={img} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
      </div>
      <div
        className={classNames(
          rating === 0 ? '' : 'border-t border-gray-200',
          'flex-1 py-10'
        )}
      >
        <h3 className="font-medium text-gray-900">{name}</h3>

        <div className="flex items-center mt-4">
          <Rating>{rating}</Rating>
        </div>

        <div
          className="mt-4 prose prose-sm max-w-none text-gray-500"
          dangerouslySetInnerHTML={{ __html: car.model + car.licensePlate }}
        />
      </div>
    </div>
  );
};

export default DriverCard;
