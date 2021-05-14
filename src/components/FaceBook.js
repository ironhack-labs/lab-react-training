import React from 'react';
import profiles from '../data/berlin.json';

export default function FaceBook() {
  const [showProfiles, setShowProfiles] = React.useState(profiles.slice(0, 28));

  return <div>{setShowProfiles}</div>;
}
