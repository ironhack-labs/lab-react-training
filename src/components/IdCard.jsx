import('./IdCard.css')
const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {

    return (<article >lastName : {lastName},
        <p>firstName : {firstName}   </p>,
        <p>gender : {gender}</p>
        <p>height : {height}</p>
        <p>birth: {birth.toDateString()}</p>

        <p></p>


        <img src={picture} alt={picture} />

    </article>)

}
export default IdCard