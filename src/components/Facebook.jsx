import { useState } from 'react';
import { useEffect } from 'react';
import profiles from '../data/berlin.json';
import FacebookCard from './FacebookCard';
import FacebookListButtons from './ListButtons';

function Facebook(props) {
  const uniqueCountriesKey = profiles
    .map((element) => element.country)
    .filter((value, index, arr) => arr.indexOf(value) === index);

  const [btnCountry, setBtnCountry] = useState('');

  const [renderList, setRenderList] = useState(profiles);

  const [sortedByName, setSortedByName] = useState(false);

  const [searchName, setSearchName] = useState('');

  useEffect((_) => searchInput(), [searchName]);

  function sortByName(arr) {
    const aux = sortedByName
      ? [...arr].sort((a, b) => b.firstName.localeCompare(a.firstName))
      : [...arr].sort((a, b) => a.firstName.localeCompare(b.firstName));
    setSortedByName(!sortedByName);
    setRenderList(aux);
  }

  function searchInput() {
    let aux = profiles.filter((value) => {
      if (searchName === '') {
        return value;
      } else if (
        value.firstName.toLowerCase().includes(searchName.toLowerCase())
      ) {
        return value;
      }
    });

    setRenderList(aux);
  }
  return (
    <div>
      <FacebookListButtons
        list={uniqueCountriesKey}
        setCountry={setBtnCountry}
        countryValue={btnCountry}
      />
      <button onClick={(_) => sortByName(renderList)}>Sort By Name</button>
      <input
        value={searchName}
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      />
      <FacebookCard profiles={renderList} countryValue={btnCountry} />
    </div>
  );
}

export default Facebook;
