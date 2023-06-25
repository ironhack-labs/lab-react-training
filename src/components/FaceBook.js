import { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleClick = (index) => {
    setClickedIndex(index === clickedIndex ? -1 : index);
  };

  return (
    <div>
      {profiles.map((profile, index) => {
        const isClicked = index === clickedIndex;
        return (
          <div
            key={index}
            className="flex flex-col my-2 rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row"
          >
            <div className="flex-none w-48 relative">
              <img
                onClick={() => handleClick(index)}
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={profile.img}
                alt={profile.firstName}
              />
            </div>
            {isClicked && (
              <div className="flex flex-col justify-start p-6">
                <p>First name: {profile.firstName}</p>
                <p>Last name: {profile.lastName}</p>
                <p>Country: {profile.country}</p>
                {profile.isStudent && <p>Type: Student</p>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
