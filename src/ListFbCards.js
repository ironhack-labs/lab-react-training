import React, { useState } from 'react';
import FbCard from './FbCard';
import Button from './Button';
import { generateKey } from './generateUniqueKey';
import {students} from './data/studentData.js';

import './ListFbCards.css';

const ListIdCards = ({ title }) => {
  // const handleClickEvent = () => {
  //   console.log('clicking');
  // };
  const [displayStudents, setDisplayStudents] = useState(false);
  const [displayUsaStudents, setDisplayUsaStudents] = useState(false);
  const [displayGermanyStudents, setDisplayGermanyStudents] = useState(false);
  const [displayFranceStudents, setDisplayFranceStudents] = useState(false);
  const [displayTaiwanStudents, setDisplayTaiwanStudents] = useState(false);

  return (
    <div className="ListFbCards">
      <h2 className="ListFbCards__title">{title}</h2>
      <section className="ListFbCards_button__wrapper">
        <Button
          onClick={() =>
            setDisplayStudents((prevDisplayStudents) => !prevDisplayStudents)
          }
          type="Primary"
        >
          All
        </Button>
        <Button
          onClick={() => {
            setDisplayStudents({ prevDisplayStudents: false });
            setDisplayUsaStudents(
              (prevDisplayUsaStudents) => !prevDisplayUsaStudents
            );
          }}
          type="Primary"
        >
          USA
        </Button>
        <Button
          onClick={() => {
            setDisplayStudents({ prevDisplayStudents: false });
            setDisplayGermanyStudents(
              (prevDisplayGermanyStudents) => !prevDisplayGermanyStudents
            );
          }}
          type="Primary"
        >
          Germany
        </Button>
        <Button
          onClick={() => {
            setDisplayStudents({ prevDisplayStudents: false });
            setDisplayFranceStudents(
              (prevDisplayFranceStudents) => !prevDisplayFranceStudents
            );
          }}
          type="Primary"
        >
          France
        </Button>
        <Button
          onClick={() => {
            setDisplayStudents({ prevDisplayStudents: false });
            setDisplayTaiwanStudents(
              (prevDisplayTaiwanStudents) => !prevDisplayTaiwanStudents
            );
          }}
          type="Primary"
        >
          Taiwan
        </Button>
      </section>
      {!displayStudents &&
        students.map((student) => (
          <FbCard
            key={generateKey(student.firstName)}
            {...student}
          />
        ))}
      {!displayUsaStudents &&
        students
          .filter((student) => student.country === 'USA')
          .map((filteredStudent) => (
            <FbCard
              key={generateKey(filteredStudent.firstName)}
              {...filteredStudent}
              // firstName={filteredStudent.firstName}
              // lastName={filteredStudent.lastName}
              // img={filteredStudent.img}
              // country={filteredStudent.country}
              // isStudent={filteredStudent.isStudent}
              // lang={filteredStudent.lang}
            />
          ))}
      {!displayGermanyStudents &&
        students
          .filter((student) => student.country === 'Germany')
          .map((filteredStudent) => (
            <FbCard
              key={generateKey(filteredStudent.firstName)}
              firstName={filteredStudent.firstName}
              lastName={filteredStudent.lastName}
              img={filteredStudent.img}
              country={filteredStudent.country}
              isStudent={filteredStudent.isStudent}
              lang={filteredStudent.lang}
            />
          ))}
      {!displayFranceStudents &&
        students
          .filter((student) => student.country === 'France')
          .map((filteredStudent) => (
            <FbCard
              key={generateKey(filteredStudent.firstName)}
              firstName={filteredStudent.firstName}
              lastName={filteredStudent.lastName}
              img={filteredStudent.img}
              country={filteredStudent.country}
              isStudent={filteredStudent.isStudent}
              lang={filteredStudent.lang}
            />
          ))}
      {!displayTaiwanStudents &&
        students
          .filter((student) => student.country === 'Taiwan')
          .map((filteredStudent) => (
            <FbCard
              key={generateKey(filteredStudent.firstName)}
              firstName={filteredStudent.firstName}
              lastName={filteredStudent.lastName}
              img={filteredStudent.img}
              country={filteredStudent.country}
              isStudent={filteredStudent.isStudent}
              lang={filteredStudent.lang}
            />
          ))}
    </div>
  );
};
 
export default ListIdCards;