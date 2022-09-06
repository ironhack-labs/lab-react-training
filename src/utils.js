function getRandomNumber(lowBound, highBound) {
  const rand = Math.floor(Math.random() * (highBound - lowBound) + lowBound);
  return (rand);
}

export default getRandomNumber;
