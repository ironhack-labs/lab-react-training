import profiles from '../../data/berlin.json';
import './Facebook.css'

const Facebook = () => {

    return (
        <section>
            <h1>Listado de perfiles de Facebook</h1>
            {
                profiles.map(({ firstName, lastName, country, img, isStudent }) => {

                    return (
                        <div className='Card'>
                            <div className="CardImage">
                                <img src={img} className="personImg" alt="personImg" />
                            </div>
                            <div className="CardInfo">
                                <p><strong>First name: </strong>{firstName} </p>
                                <p><strong>Last name: </strong>{lastName}</p>
                                <p><strong>Country: </strong>{country}</p>
                                <p><strong>Type: </strong>{isStudent ? 'Student' : 'Teacher'}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Facebook