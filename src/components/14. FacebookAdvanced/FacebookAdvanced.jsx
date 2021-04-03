import { useState } from 'react';
import berlin from '../../data/berlin.json';
import FacebookAdvancedBox from './FacebookAdvancedBox';
import './FacebookAdvanced.css';
import FacebookAdvancedButtons from './FacebookAdvancedButtons';

const FacebookSimple = () => {
  const [students, setStudents] = useState([...berlin]);

  const arrCountries = (country) => {
    setStudents(
      [...berlin].filter((c) => c.country.includes(`${country}`))
    );
  };
  return (
    <>
    <p className="textoFiltrado">FILTER BY COUNTRY !</p>
      <div className="buttonbar "><FacebookAdvancedButtons arrCountries={arrCountries} /></div>

      {students
        .map((s) => <FacebookAdvancedBox {...s} key={s.firstName} />)
        .slice(0, 6)}
    </>
  );
};

export default FacebookSimple;
