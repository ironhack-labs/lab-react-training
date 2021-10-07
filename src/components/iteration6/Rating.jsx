import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Rating = (props) => {
  const { children, shadow } = props;
  return (
    <li
      className={classNames(
        shadow && 'shadow',
        'col-span-1 bg-white rounded-lg p-5 flex'
      )}
    >
      {[0, 1, 2, 3, 4].map((star) => (
        <StarIcon
          key={star}
          className={classNames(
            children > star ? 'text-yellow-400' : 'text-gray-200',
            'h-5 w-5 flex-shrink-0'
          )}
          aria-hidden="true"
        />
      ))}
    </li>
  );
};

export default Rating;
