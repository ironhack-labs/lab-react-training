import styled from "styled-components"

export const IdCard = styled.div`
    width: 80%;
    margin: 2% auto;
    box-sizing: border-box;
    position: relative;
    border: 1px black solid;
    & div {
        position:absolute;
        top: 10%;
        display: inline-block;

        & p {
            margin: 0;
            
        }
    }

`;

export const GreetingsC = styled.div`
    width: 80%;
    margin: 2% auto;
    box-sizing: border-box;
    border: 1px black solid;
    font-size: 30px;
    & p{
        margin-left:20px;
    }
`;

export const RandomN = styled.div`
    width: 80%;
    margin: 2% auto;
    box-sizing: border-box;
    border: 1px black solid;
    font-size: 30px;
    & p{
        margin-left:20px;
    }
`;

export const BoxC = styled.div`
    width:100%;
    height: 400px;
    border: 1px black solid;
    font-size: 30px;
    color: black;
    & p{
        text-align:center;
    }
`;

export const Tarjeta  = styled.div`
    width: 30%;
    border-radius: 10px;
    padding: 1% 2%;
    box-sizing: border-box;
    height:200px;
    & img {
        width:50px;
        margin-left: 50px;
    }
`;

export const Rates  = styled.div`
    width: 40%;
    border: 1px solid black;
`;
export const DriverLicense = styled.div`
    width: 80%;
    margin: 2% auto;
    box-sizing: border-box;
    position: relative;
    border: 1px black solid;
    background-color: #455eb5;
    border-radius: 10px;

    & img {
        width: 150px;
        border-radius: 50%;
    }
    & div {
        position:absolute;
        top: 10%;
        display: inline-block;
        color: #fff;
        
        & p {
            margin: 0;
            
        }
    }
`;

export const LikesBut = styled.button``;

export const clickPhoto  = styled.div``;

export const Dices = styled.figure`
    width: 20%;
    & img {
        width: 100%;
    }
`;