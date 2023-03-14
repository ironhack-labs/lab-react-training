import profiles from '../data/berlin.json';

function FaceBook () {

    const verifyType = (isStudent) => {
        let type = '';
        if(isStudent){
            type = 'Student'
        } else {
            type = 'Teacher'
        }
        return type;
    }
    

    return (
        <div>
            {profiles.map(profile => {
                return (
                    <div className='IdCard'>
                        <div className="cardPicture">
                            <img src={profile.img} alt='profile' style={{width:100, height:100}}/>
                        </div>
                        <div className="cardInfo">
                            <p>First name: {profile.firstName}<br></br>
                            Last name: {profile.lastName}<br></br>
                            Country: {profile.country}<br></br>
                            Type: {verifyType(profile.isStudent)}</p><br></br>
                        </div>
                    </div>  
                )
            })}
            
        </div>
    );
};

export default FaceBook;