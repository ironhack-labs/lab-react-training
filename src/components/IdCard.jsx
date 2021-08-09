import Iter1 from "./Iter1";

const idCard = (props) => {
    return (
        
        <Iter1>
            <img src={props.picture} alt=""/>
            <p><b>lastName:</b> {props.lastName}</p>
            <p><b>firstName:</b> {props.firstName}</p>
            <p><b>gender:</b> {props.gender}</p>
            <p><b>height:</b> {props.height}</p>
            <p><b>birth:</b> {props.birth.toString()}</p>
        </Iter1>
       
    );
};

export default idCard;