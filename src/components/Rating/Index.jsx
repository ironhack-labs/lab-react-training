import './Index.css'

function Rating({ children }) {

    const ratingStar = Number(children)
    let result = ''

    if(ratingStar < 0.5) {
        result = '☆☆☆☆☆'
    } if(ratingStar < 1.5 && ratingStar >= 0.5) {
        result = '★☆☆☆☆'
    } if(ratingStar < 2.5 && ratingStar >= 1.5) {
        result = '★★☆☆☆'
    } if(ratingStar < 3.5 && ratingStar >= 2.5) {
        result = '★★★☆☆'
    } if(ratingStar < 4.5 && ratingStar >= 3.5) {
        result = '★★★★☆'
    } if(ratingStar <= 5 && ratingStar >= 4.5) {
        result = '★★★★★'
    } 


    return (
        <div className='Rating'>
           <p>{result}</p>
        </div>
    );
};

export default Rating  