import { IoIosStar } from 'react-icons/io'
import styled from 'styled-components'

const Rating = ({ children }) => {
  const rating = Math.round(children)
  const starsArr = [
    <Icon strokeWidth={10} fill="none" />,
    <Icon strokeWidth={10} fill="none" />,
    <Icon strokeWidth={10} fill="none" />,
    <Icon strokeWidth={10} fill="none" />,
    <Icon strokeWidth={10} fill="none" />,
  ]

  return (
    <Wrapper>
      {starsArr.map((star, index) => {
        if (index + 1 <= rating) {
          return <Icon strokeWidth={10} fill="black" />
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
