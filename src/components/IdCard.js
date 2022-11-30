import styles from './IdCard.module.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className={styles['id-card']}>
      <div>
        <img className={styles['id-img']} src={picture} alt="profile" />
      </div>
      <div>
        <h3>First name: {firstName}</h3>
        <h3>Last name: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {height}m</h3>
        <h3>Birth: {birth}</h3>
      </div>
    </div>
  );
};

export default IdCard;
