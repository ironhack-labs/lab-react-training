import './idCard.css'

const IdCard = (props) => {
    // console.log({ props })
    return (
        <>
            <section className="idCard" >
                <img src={props.picture} alt={`${props.firstName} face`} />
                <section>
                    <p><b>First name:</b> {props.firstName}</p>
                    <p><b>Last name:</b> {props.lastName}</p>
                    <p><b>Genger:</b> {props.gender}</p>
                    <p><b>Height:</b> {props.height / 100} m</p>
                    <p><b>birth:</b> {props.birth.toDateString()}</p>
                </section>
            </section >
        </>
    )
}


export default IdCard







