import React, { useState } from 'react';
import './FaceBookButtons.css';

const btns = [];

const loadButtonsState = (profiles) => {
  profiles.forEach((profile) => {
    btns.some((button) => button.country === profile.country) ||
      btns.push({ country: profile.country, selected: false });
  });
};

const handleRenderButtons = (buttons, setButtons, profs, setProfs) => {
  if (buttons.length === 0) {
    return '';
  }
  return buttons.map((button, index) => (
    <button
      key={index}
      onClick={() => {
        button.selected = !button.selected;
        handleProfilesSelection(buttons, profs, setProfs);
        setButtons([...buttons]);
      }}
      style={{
        backgroundColor: button.selected ? 'rgba(150,150,255,0.75)' : 'inherit',
      }}
    >
      {button.country}
    </button>
  ));
};

const handleProfilesSelection = (buttons, profs, setProfs) => {
  profs.forEach((profile) => {
    const relatedButton = buttons.find(
      (button) => button.country === profile.country
    );
    profile.selected = relatedButton.selected;
  });
  setProfs([...profs]);
};

const FaceBookButton = ({ profs, setProfs }) => {
  btns.length > 0 || loadButtonsState(profs);

  const [buttons, setButtons] = useState([...btns]);

  return (
    <div className="facebook-buttons-container">
      <h2>Highlight by Country</h2>
      {handleRenderButtons(buttons, setButtons, profs, setProfs)}
    </div>
  );
};

export default FaceBookButton;
