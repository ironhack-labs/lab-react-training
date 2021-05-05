import React from 'react';
import LikeButton from './LikeButton';

export default function LikeButtonSection() {
  return (
    <div>
      <h1>Like Buttons</h1>

      <div className="Col">
        <LikeButton />
        <LikeButton />
      </div>
    </div>
  );
}
