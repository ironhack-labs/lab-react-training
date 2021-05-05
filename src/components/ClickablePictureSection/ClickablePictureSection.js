import React from 'react';
import ClickablePicture from './ClickablePicture';
import './ClickablePicture.css';

export default function ClickablePictureSection() {
  return (
    <div>
      <h1>Clickable Picture</h1>

      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}
