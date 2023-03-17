import IdCard from './IdCard';
import Greetings from './Greetings';


function IdCardList() {
  return <section>
    <IdCard
    lastName='Doe'
    firstName='John'
    gender='male'
    height='178'
    birth="1992-07-14"
    picture="https://randomuser.me/api/portraits/men/44.jpg"
  />

  <Greetings lang="de">Ludwig</Greetings>

  <IdCard
    lastName='Delores '
    firstName='Obrien'
    gender='female'
    height='172'
    birth="1988-05-11"
    picture="https://randomuser.me/api/portraits/women/44.jpg"
  />

  <Greetings lang="fr">François</Greetings>

  </section>
}

export default IdCardList;