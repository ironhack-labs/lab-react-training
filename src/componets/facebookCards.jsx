const FaceBookCards = ({ _id, firstName, lastName, country, img, isStudent }) => {

    return (<div key={_id}>
        <div>
            <img src={img}></img>
        </div>

        <div>
            <p>Nombre: {firstName}</p>
            <p>Apellido: {lastName}</p>
            <p>Pais: {country}</p>
            <p>{isStudent}</p>
        </div>

    </div>)
}
export default FaceBookCards