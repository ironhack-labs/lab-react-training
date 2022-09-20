const IdCard = (props) => {
    return (
        <>
            <div className="id-card" key={props.lastName}>
                <div>
                    <h2>{props.firstName}</h2>
                    <h3>{props.gender}</h3>
                    <h3>{props.height}</h3>
                    <h3>{props.birth}</h3>
                </div>
                <div>
                    <img src={props.picture} alt="" />
                </div>
            </div>
        </>
    );
};

export default IdCard;