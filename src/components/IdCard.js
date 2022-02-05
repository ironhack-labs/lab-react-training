import './idCard.css'

function  IdCard(props) {
    console.log(props)
    const {picture, firstName, lastName, gender, height, birth} = props;
    return (
        <div >
            <div className="card">
                <img src={picture} alt =""/>
                <p> First name <span> {firstName}</span></p>
                <p> Last name <span> {lastName}</span></p>
                <p> Gender <span> {gender}</span></p>
                <p> Height <span> {height}</span></p>
                <p> birth <span> {birth}</span></p>
            </div>

        </div>
    );
};

export default IdCard;