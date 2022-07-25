import styled from 'styled-components'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Greetings from './components/Greetings'
import IdCard from './components/IdCard'
import Random from './components/Random'
import Rating from './components/Rating'

function App() {
  return (
    <>
      <h1>Iteration 1:</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Iteration 2:</h1>
      <Box>
        <Greetings lang="de">Ludwig</Greetings>
      </Box>
      <Box>
        <Greetings lang="fr">François</Greetings>
      </Box>
      <h1>Iteration 3:</h1>
      <Box>
        <Random min={1} max={6} />
      </Box>
      <Box>
        <Random min={1} max={100} />
      </Box>
      <h1>Iteration 4:</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1>Iteration 5:</h1>
      <Cards>
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
      </Cards>
      <h1>Iteration 5:</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>Iteration 6:</h1>
    </>
  )
}

export default App

const Box = styled.div`
  width: 60%;
  border: 2px solid black;
  margin: 0.5rem;
`
const Cards = styled.div`
  display: flex;
  column-gap: 15px;
`
