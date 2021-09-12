import React from 'react';
import './ClickablePicture.css';

const ClickablePicture = ({ img01Path, img02Path }) => {
  const [state, setState] = React.useState(true);
  return (
    <div className="clickable-picture-container">
      {state ? (
        <img src={img01Path} alt="clickable" onClick={() => setState(!state)} />
      ) : (
        <img src={img02Path} alt="clickable" onClick={() => setState(!state)} />
      )}
    </div>
  );
};

export default ClickablePicture;
