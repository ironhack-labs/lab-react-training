import profiles from '../data/berlin.json';

import FacebookCard from './FacebookCard';
export default function Facebook() {
  return profiles.map((el) => {
    return <FacebookCard profile={el} />;
  });
}
