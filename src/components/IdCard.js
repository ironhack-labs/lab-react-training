import Datas from './Datas';
import Image from './Image';
import './IdCard.css';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  console.log(props);
  return (
    <div className="IdCard">
      <Image 
        picture={picture}
      />
      <Datas
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        height={height}
        birth={birth}
      />
    </div>
  );
}

export default IdCard;
