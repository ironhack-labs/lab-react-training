import './IdCard.css'

const converterHeight = (h) => (h/100).toString()+' m';

const IdCard = ({firstName, lastName, gender, height, birth, picture}) => {
    console.log(birth)
    return(
        <div class="card-container">
            <div class="card">
                <div class="card-img">
                    <img src={picture} alt="" />
                </div>
                <div class="card-info">
                    <ul>
                        <li><strong>First name:</strong>{firstName}</li>
                        <li><strong>Last name:</strong>{lastName}</li>
                        <li><strong>Gender:</strong>{gender}</li>
                        <li><strong>Height:</strong>{converterHeight(height)}</li>
                        <li><strong>Birth:</strong>{birth}</li>
                        
                    </ul>
                </div>
	        </div>
        </div>
    );
};

export default IdCard;