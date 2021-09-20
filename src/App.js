import React, { useState } from 'react';

import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import FlexWrapper from './components/UI/FlexWrapper';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Iteration from './components/Iteration';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/Facebook/FaceBook';
import FaceBookAdvanced from './components/Facebook/FaceBookAdvanced';
import Login from './components/Login/Login';
import Userspace from './components/UserSpace/Userspace';

function App() {
  const [enteredUser, setUser] = useState('Jürgen!');
  const submitFormHanlder = (email) => {
    setUser(email);
  };
  const logoutHandler = () => {
    localStorage.removeItem('loggedIn');
    setUser(() => {
      '';
    });
  };
  return (
    <div>
      <Iteration number={1}></Iteration>
      <FlexWrapper>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        ></IdCard>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </FlexWrapper>
      <Iteration number={2}></Iteration>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Iteration number={3}></Iteration>
      <RandomNumber min={1} max={6} />
      <RandomNumber min={1} max={100} />
      <Iteration number={4}></Iteration>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <Iteration number={5}></Iteration>
      <FlexWrapper>
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
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </FlexWrapper>
      <Iteration number={6}></Iteration>
      <h5>font awesome icons..., still have to be done</h5>
      <Rating></Rating>
      <Iteration number={7}></Iteration>
      <h5>font awesome driver license has to be done</h5>
      <Iteration number={8}></Iteration>
      <FlexWrapper>
        <LikeButton></LikeButton>
        <LikeButton></LikeButton>
        <LikeButton></LikeButton>
      </FlexWrapper>
      <Iteration number={9}></Iteration>
      <FlexWrapper>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </FlexWrapper>
      <Iteration number={10}></Iteration>
      <FlexWrapper>
        <Dice />
      </FlexWrapper>
      <Iteration number={11}></Iteration>
      <FlexWrapper>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </FlexWrapper>
      <Iteration number={12}></Iteration>
      <FlexWrapper>
        <NumbersTable limit={31}></NumbersTable>
      </FlexWrapper>
      <Iteration number={13}>
        <p>Array shortened to 2 profiles for cleanup reasons</p>
      </Iteration>
      <FlexWrapper>
        <FaceBook></FaceBook>
      </FlexWrapper>
      <Iteration number={14}></Iteration>
      <FlexWrapper>
        <FaceBookAdvanced></FaceBookAdvanced>
      </FlexWrapper>
      <Iteration number={15}></Iteration>
      {localStorage.getItem('loggedIn') === '1' ? (
        <Userspace user={enteredUser} onLogoutClick={logoutHandler} />
      ) : (
        <Login onSubmitClick={submitFormHanlder} />
      )}
    </div>
  );
}

export default App;
