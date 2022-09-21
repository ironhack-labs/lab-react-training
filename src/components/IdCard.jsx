const Person = (props) => {
    return (
        <>
            < div  >
                <p>
                    {props.firstName}
                    {props.lastName}
                    {props.gender}
                    {props.height}
                    {props.birth}
                    <img src={props.picture} alt="" />
                </p>
            </div >
        </>
    );
};






export default Person;
