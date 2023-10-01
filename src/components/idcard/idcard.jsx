import "./idcard.css";


function IdCard ({fName, lName, gender, image, height, birth}){
    return <>
        <div className='idcard-main card'>
        <div><img src={image} alt="picture" className='image'/></div>
            <div className='bodyId'>
                <p>First Name:{fName} </p>
                <p>Last Name:{lName} </p>
                <p>Gender:{gender} </p>
                <p>Height: {height} </p>
                <p>Birth:{birth} </p>
            </div>
        </div>
       </>
   }

   export default IdCard;   
