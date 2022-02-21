import './IdCard.css'

function IdCard({ lastName, firstName, gender, height, birth, image }) {



    return (

        <article className="idCard">
            <div>
                <img className="idPicture" src={image} alt={firstName + " " + lastName} />
            </div>
            <div className='personalInfo'>
                {firstName} {lastName} <br />
                {gender}<br />
                {height / 100} m<br />
                Born on:{birth.toLocaleString()}
            </div>



        </article>
    )
}


export default IdCard