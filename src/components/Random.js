import styles from './Random.module.css';

const Random = ({ min, max }) => {
  const randNum = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <p className={styles.random}>
      Random value between {min} and {max} {'=>'} {randNum}
    </p>
  );
};

export default Random;
