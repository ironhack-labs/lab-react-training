import profiles from '../../data/berlin.json';
import './styleFacebook.css'
const FaceBook = () => {
    const student = "Student";
    const teacher = "Teacher"
    return(
        <div className="FaceBook">
        {profiles.map((item, index) => {
            return (
                <div className='CardFb'key={item.lastName}>
                    <img src={item.img} alt='icon-profile'/>
                        <div className='CardFbInfo'>
                            <p>Firstname: {item.firstName}</p>
                            <p>Lasttname: {item.lastName}</p>
                            <p>Country: {item.country}</p>
                            <p>Type: {item.isStudent ? student : teacher}</p>
                        </div>

                </div>
            )
        })}

        </div>
    )
};

export default FaceBook;