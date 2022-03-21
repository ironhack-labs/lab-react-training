import React from 'react';
import img from '../../../src/assets/images/maxence.png';
import glassesImg from '../../../src/assets/images/maxence-glasses.png';
import IdCard from '../IdCard/Idcard';
import Greetings from '../Greetings/Greetings';
import Random from '../Random/Random';
import BoxColor from '../BoxColor/BoxColor';
import CreditCard from '../CreditCard/CreditCard';
import Rating from '../Rating/Rating';
import DriverCard from '../DriverCard/DriverCard';
import LikeButton from '../LikeButton/LikeButton';
import ClickablePicture from '../ClickablePicture/ClickablePicture';
import Dice from '../Dice/Dice';
import Carousel from '../Carousel/Carousel';
import NumbersTable from '../NumbersTable/NumbersTable';

function AllIterations() {
  return (
    <>
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
      </div>
      <div>
          <LikeButton/>
      </div>
      <div>
          <ClickablePicture
          img={img}
          imgGlasses={glassesImg}
          />
     </div>
     <div>
         <Dice/>
     </div>
     <div>
         <Carousel
         images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}/>
     </div>
     <div>
     <NumbersTable limit={12} />
     </div>
    </>
  );
}

export default AllIterations;
