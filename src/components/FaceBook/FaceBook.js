import './FaceBook.css'
import profiles from '../../data/berlin.json';

const FaceBook = () => {
    //console.log(profiles)

    return (

        <>
            {
                profiles.map(({ firstName, lastName, country, img, isStudent }) => {
                    return (
                        <>
                            < article className="id-card">
                                <div>
                                    <img src={img} />
                                </div>
                                <p><strong>First name:</strong>{firstName}</p>
                                <p><strong>Last name:</strong>{lastName}</p>
                                <p><strong>Country:</strong>{country}</p>
                                <p><strong>Type:</strong>{isStudent ? 'Student' : 'Teacher'}</p>
                            </article>
                        </>
                    )
                })
            }
        </>
    )
}

export default FaceBook
