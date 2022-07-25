import { IoIosStar } from 'react-icons/io'
import styled from 'styled-components'

const Rating = ({ children }) => {
  const rating = Math.round(children)
  const starsArr = [
    <Icon key={0} strokeWidth={10} fill="none" />,
    <Icon key={1} strokeWidth={10} fill="none" />,
    <Icon key={2} strokeWidth={10} fill="none" />,
    <Icon key={3} strokeWidth={10} fill="none" />,
    <Icon key={4} strokeWidth={10} fill="none" />,
  ]

  return (
    <Wrapper>
      {starsArr.map((star, index) => {
        if (index + 1 <= rating) {
          return <Icon key={index} strokeWidth={10} fill="black" />
        } else {
          return star
        }
      })}
    </Wrapper>
  )
}

export default Rating

const Wrapper = styled.div``
const Icon = styled(IoIosStar)`
  font-size: 7rem;
`
