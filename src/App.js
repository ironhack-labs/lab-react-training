import styled from 'styled-components'
import Greetings from './components/Greetings'
import IdCard from './components/IdCard'

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
    </>
  )
}

export default App

const Box = styled.div`
  width: 60%;
  border: 2px solid black;
  padding: 0.3rem;
  margin: 0.5rem;
`
