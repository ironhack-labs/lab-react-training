import { IoIosStar } from 'react-icons/io'
import styled from 'styled-components'

const Rating = ({ children, size = '100', color = 'black' }) => {
  const rating = Math.round(children)
  const starsArr = [
    <Icon key={0} strokeWidth={10} fill="none" size={size} />,
    <Icon key={1} strokeWidth={10} fill="none" size={size} />,
    <Icon key={2} strokeWidth={10} fill="none" size={size} />,
    <Icon key={3} strokeWidth={10} fill="none" size={size} />,
    <Icon key={4} strokeWidth={10} fill="none" size={size} />,
  ]

  return (
    <Wrapper>
      {starsArr.map((star, index) => {
        if (index + 1 <= rating) {
          return <Icon key={index} strokeWidth={10} fill={color} size={size} />
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
  color: ${({ color }) => color};
`
