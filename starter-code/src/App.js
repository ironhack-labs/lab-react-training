import React, { Component } from 'react';
import IdCard from './components/idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import Box from './components/Box';
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriveCard from './components/DriveCard';
import CkPic from './components/ClickeablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import profiles from './data/berlin.json'
import ButtonCountry from './components/ButtonCountry'


class App extends Component {
  state = {
    listOfProfiles: profiles.slice(0, 28)
  }

  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
          <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" lastname="Doe" firstname="John" gender="male" height={1.78} birth="Mon Jul 13 1992"/>
          <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" lastname="Delores" firstname="Obrien" gender="female" height={1.72} birth="Mon May 10 1993"/>
      
        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de" children="Ludwig"/>
        <Greetings lang="fr" children="François" />

        <h1>Random</h1>
        {/* TODO: Use the Random component */}
        <Random min={1} max={6}/>
        <Random min={1} max={100} />

        <h1>Box</h1>
        {/* TODO: Use the Box component */}
        <Box r={255} g={0} b={0} color="black"/>
        <Box r={128} g={255} b={0} color="white"/>

        <h1>Credit Card</h1>
        {/* TODO: Use the Credit Card component */}
        <CreditCard type="Visa" number="•••• •••• •••• 4309" expirationMonth={3} expirationYear={2027} bank="Ardbank" owner="Karen A. Sato" bgColor="#11aa99" color="white" />
        <CreditCard type="Master Card" number="•••• •••• •••• 9000" expirationMonth={3} expirationYear={2021} bank="Leonbank" owner="Leon T. Dua" bgColor="#eeeeee" color="black" />
        <CreditCard type="Visa" number="•••• •••• •••• 1071" expirationMonth={3} expirationYear={2023} bank="Karbank" owner="Jony M. Tiga" bgColor="#ddbb55" color="white" />

        <h1>Rating</h1>
        {/* TODO: Use the Rating component */}
        <Rating children={0}/>
        <Rating children={1}/>
        <Rating children={1.5}/>
        <Rating children={3}/>
        <Rating children={4}/>
        <Rating children={5}/>

        <h1>DriveCard</h1>
        {/* TODO: Use the Rating component */}
        <DriveCard driver="Travis Kalanick" car="Toyota Corolla Altis" plate="CO42DE"  color="white" picture="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"/>
        <DriveCard driver="Travis Kalanick" car="Toyota Corolla Altis" plate="CO42DE"  color="white" picture="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"/>

        <h1>ClickeablePicture</h1>
        {/* TODO: Use the ClickeablePicture component */}
        <CkPic click="false" />

        <h1>Dice</h1>
        {/* TODO: Use the Dice component */}
        <Dice click="false" />

        <h1>Carousel</h1>
        {/* TODO: Use the Carousel component */}
        <Carousel click={1}/>

        <h1>NumbersTable</h1>
        {/* TODO: Use the NumbersTable component */}
        <NumbersTable limit={12}/>
        
        <h1>FaceBook</h1>
        {/* TODO: Use the FaceBook component */}
        <ButtonCountry init="All"/>
        {
          this.state.listOfProfiles.map((profiles, i)=> {
            return <FaceBook llave={i} img={profiles.img} firstName={profiles.firstName} lastName={profiles.lastName} country={profiles.country} isStudent={profiles.isStudent}/>
          })
        }

      </div>
    );
  }
}

export default App;
