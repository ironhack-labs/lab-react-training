import './IdCard.css'


function IdCard(props) {
    /* e.g.
    <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
    */

    return (
        <>
            <div className="id-card">
                <p><img src={props.picture} alt="IdCard Picture" /></p>
                <div className='id-card-info'>
                    <p><strong>First name:</strong> {props.firstName}</p>
                    <p><strong>Last name:</strong> {props.lastName}</p>
                    <p><strong>Gender:</strong> {props.gender}</p>
                    <p><strong>Height:</strong> {props.height}</p>
                    <p><strong>Birth:</strong> {props.birth.toLocaleString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    })}</p>
                </div>
            </div>
        </>
    );

}

export default IdCard;