import { useState } from 'react';
import profiles from '../data/berlin.json';
import FacebookProfile from './FacebookProfile';

function Facebook() {
  const [selectCountry, setSelectCountry] = useState('');
  function handleClick(event) {
    setSelectCountry(event.target.value);
  }

  return (
    <div class="facebook">
      <button value="All" onClick={handleClick}>
        All
      </button>
      <button value="England" onClick={handleClick}>
        England
      </button>
      <button value="USA" onClick={handleClick}>
        USA
      </button>
      <button value="Malaysia" onClick={handleClick}>
        Malaysia
      </button>
      <button value="Germany" onClick={handleClick}>
        Germany
      </button>
      <br />
      <FacebookProfile profiles={profiles} selectCountry={selectCountry} />
    </div>
  );
}

export default Facebook;