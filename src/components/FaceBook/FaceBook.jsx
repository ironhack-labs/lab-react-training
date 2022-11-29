import profiles from '../../data/berlin.json'
import './FaceBook.css'

const FaceBook = () => {


    return (
        <>
            {profiles.map(elem => {
                return (<section key={elem.firstName} className='FaceBook'>
                    <img src={elem.img} alt="prfile image" />
                    <p><span className='TxtBold'>First Name:</span> {elem.firstName}</p>
                    <p><span className='TxtBold'>Last Name:</span> {elem.lastName}</p>
                    <p><span className='TxtBold'>Country:</span> {elem.country}</p>
                    <p><span className='TxtBold'>Type:</span> {elem.isStudent ? 'Student' : 'Teacher'}</p>
                </section>
                )
            })}
        </>

    )


}

export default FaceBook