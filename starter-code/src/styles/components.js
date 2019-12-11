import styled from "styled-components";

export const IdCard = styled.div`
    width:80%;
    position: relative;
    margin: 2% auto;
    padding: 2%;
    box-sizing: border-box;
    border:  1px solid black;
    & div{
        position: absolute;
        top: 15%;
        display: inline-block;
        margin-left: 2%;
        & p{
            margin: 0;
        }
    }
`;

export const Greeting = styled.div`
    width: 80%;
    margin: 1% auto;
    padding: 1%;
    box-sizing: border-box;
    border:  1px solid black;
    font-size: 1.5em;
`;

export const Random = styled.div`
    width: 80%;
    margin: 1% auto;
    padding: 1%;
    box-sizing: border-box;
    border:  1px solid black;
    font-size: 1.5em;
`;

export const BoxColor = styled.div`
    width: 80%;
    margin: 1% auto;
    padding: 5% 1%;
    border:  1px solid black;
    text-align: center;
    font-weight: 800;
    font-size: 1.5em;
`;

export const CreditCard = styled.div`
    width: 30%;
    margin: 2%;
    border-radius: 10px;
    padding: 1% 2%;
    box-sizing: border-box;
    height: 200px;
    & img {
        width:20%;
        margin-top: 10%;
        margin-left:75%;
    }
`;

export const Rating = styled.div`
    width: 50%;
    border:  1px solid black;
    margin: 0 auto;
`;

export const DCard = styled.div`
    width: 80%;
    margin: 2% auto;
    padding: 1% 2%;
    box-sizing: border-box;
    background-color: blue;
    color: white;
    text-align: center;
    border-radius: 10px;
    & img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    };
`;

export const LikeButton = styled.button`
    width: 15%;
    height: 50px;
    font-size: 1.3em;
    margin: 1% ;
    background-color: blue;
    border-radius: 10px;
    color: white;
`;

export const ClickPicture = styled.figure`
    width: 20%;
    & img {
        width: 100%;
    }
`;

export const Dice = styled.figure`
    width: 20%;
    & img {
        width: 100%;
    }
`;