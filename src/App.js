import './App.css';

import data from './data/berlin.json';
import FetchIdCard from './components/IdCards';
import { Greetings } from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor/BoxColor';
import { CreditCard } from './components/CreditCard/CreditCard';
import { Rating } from './components/Rating/Rating';
import { DriverCard } from './components/DriverCard/DriverCard';
import { LikeButton } from './components/LikeButton/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import clickPic from './assets/images/maxence.png';
import clickPicGlasses from './assets/images/maxence-glasses.png';
import { Dice } from './components/Dice';
import { Carousel } from './components/Carousel';
import { NumbersTable } from './components/NumbersTable';
import { FaceBook} from './components/FaceBook/FaceBook';
import { FaceBookAdv } from './components/FaceBook/FaceBookAdv';
import { SignupPage } from './components/SignupPage/SignupPage';
import { RGBColorPicker } from './components/ColorPicker/RGBColorPicker';

function App() {
  const iteration5={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    position:'relative',
    };
  return (
    <div className="App">
      <div>Environment: {process.env.NODE_ENV}</div>

      <div className="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label htmlFor="collapsible" className="lbl-toggle">
          Iteration 1
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <FetchIdCard allData={data} />
          </div>
        </div>
      </div>

      <div>
        <h2>Iteration 2</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <h2>Iteration 3</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h2>Iteration 4</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h2>Iteration 5</h2>
        <div style={iteration5}>
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
        </div>
      </div>
      <div>
        <h2>Iteration 6</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <h2>Iteration 7</h2>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 8</h2>
        <LikeButton />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 9</h2>
        <ClickablePicture
          clickPic={clickPic}
          clickPicGlasses={clickPicGlasses}
        />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 10</h2>
        <Dice />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 11</h2>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 12</h2>
        <NumbersTable limit={12} />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 13</h2>
        <FaceBook />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 14</h2>
        <FaceBookAdv />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 15</h2>
        <SignupPage />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Iteration 16</h2>
        <RGBColorPicker />
      </div>
    </div>
  );
}

export default App;
