import React from 'react';

export default function Random({ min, max }) {
  const random = min + Math.round(Math.random() * (max - min));
  return (
    <div>
      Random value between {min} and {max} ={'>'} {random}
    </div>
  );
}
