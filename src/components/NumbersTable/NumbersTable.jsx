
import './NumbersTable.css'


const NumbersTable = ({limit}) => {

  
        const arrayNumbers = [];

        for (let i = 1; i <= limit; i++) {
            
            if(i % 2 === 0){

            arrayNumbers.push(<p className='even'>{i}</p>);

            } else {

            arrayNumbers.push(<p className='odd'>{i}</p>);   

            }
        }
        

    return (
        <>
        <p>{arrayNumbers}</p>
        </>
    );

    };

export default NumbersTable

