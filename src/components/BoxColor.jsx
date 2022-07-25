import styled from 'styled-components'

const BoxColor = ({ r, g, b }) => {
  return (
    <Wrapper r={r} g={g} b={b}>
      <h3>
        rgb({r}, {g}, {b})
      </h3>
    </Wrapper>
  )
}

export default BoxColor

const Wrapper = styled.div`
  margin: 0.5rem;
  text-align: center;
  width: 60%;
  border: 2px solid black;
  background-color: ${({ r, g, b }) => `rgb(${r > 255 ? 255 : r}, ${g > 255 ? 255 : g}, ${b > 255 ? 255 : b})`};
`
