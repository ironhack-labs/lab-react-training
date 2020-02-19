import styled from 'styled-components'

export const CreditCard = styled.div`
    background-color: ${({bg}) => bg || '#000'};
    border: 1px solid black;
    width: 400px;
    height: 300px;
`
