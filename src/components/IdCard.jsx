import styled from 'styled-components'

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <Wrapper>
      <img src={picture} alt="profilrPic" />
      <div>
        <p>
          <strong>First Name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toLocaleDateString()}
        </p>
      </div>
    </Wrapper>
  )
}

export default IdCard

const Wrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  width: 60%;
  padding: 0.3rem;
  border: 2px solid black;
  margin: 0.5rem;
  img {
    width: 200px;
  }
`
