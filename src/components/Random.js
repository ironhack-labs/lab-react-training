function Random({ min, max }) {
  let num = Math.ceil(Math.random() * (max - min) + min);
  return `Random value between ${min} and ${max} => ${num}`;
}

export default Random;
