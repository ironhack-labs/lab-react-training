// import './CreditCard.css';

// const CreditCard = ({
//     type,
//     number,
//     expirationMonth,
//     expirationYear,
//     bank,
//     owner,
//     bgColor,
//     color,
// }) => {
//     const cardStyle = {
//         backgroundColor: bgColor,
//         color: color,
//     };

//     return (
//         <div>
//             {type === 'Visa' ? (
//                 <img
//                     src="https://img.icons8.com/color/96/000000/visa.png"
//                     alt="Visa"
//                     className="card-logo"
//                 />
//             ) : (
//                 <img
//                     src="https://img.icons8.com/color/96/000000/mastercard.png"
//                     alt="MasterCard"
//                     className="card-logo"
//                 />
//             )}

//             <div >
//                 {number.replace(/\d(?=\d{4})/g, '*')}
//             </div>

//             <div >

//                 <div>{bank}</div>
//                 <div>{owner}</div>
//             </div>
//         </div>
//     );
// };

// export default CreditCard;


