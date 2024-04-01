import './IdCard.css'
import Information from './Information';
import ImageAvatar from './ImageAvatar';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props.user;

  return (
    <section className='container_IdCard'>
      <ImageAvatar image={picture} />
      <Information 
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        height={height}
        birth={birth}
      />
    </section>
  );
}

export default IdCard;