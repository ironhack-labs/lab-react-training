import IdCard from './IdCard';
import { generateKey } from './generateUniqueKey';
import {students} from './data/studentData.js';

import './ListIdCards.css';

const ListIdCards = ({title}) => {
    return (
      <div className="ListIdCards">
        <h2 className="ListIdCards__title">{title}</h2>
        {students.map((student) => (
          <IdCard
            uniqueKey={generateKey(student.firstName)}
            firstName={student.firstName}
            lastName={student.lastName}
            img={student.img}
            country={student.country}
            isStudent={student.isStudent}
            lang={student.lang}
          />
        ))}
      </div>
    );
}
 
export default ListIdCards;