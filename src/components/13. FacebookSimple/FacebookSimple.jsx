import { useState } from 'react';
import berlin from '../../data/berlin.json';
import FacebookUserBox from './FacebookUserBox';

const FacebookSimple = () => {
  const [students, setStudents] = useState([...berlin])
  return (
    <>
      <div>
        {students.map((s) => 
          <FacebookUserBox {...s} key={s.firstName} />
        ).slice(0,6)}
        
      </div>
    </>
  );
};

export default FacebookSimple;
