// import { useState } from "react"

// const Carrousel = ({ images }) => {

//     const [index, setIndex] = useState(0)

//     const handlePrevious = () => {

//         if (index < 0) {
//             setIndex(0)
//         }
//         else {
//             setIndex(index - 1)
//         }
//     }

//     const handleNext = () => {

//         if (index === images.length - 1) {
//             setIndex(images.length - 1)
//         }
//         else {
//             setIndex(index + 1)
//         }
//     }

//     return (
//         <div className="carrousel">
//             <button onClick={handleNext}>
//                 Next
//             </button>
//             <img src={images[index]} alt="img" />
//             <button onClick={handlePrevious}>
//                 Previous
//             </button>
//         </div>
//     )
// }

// export default Carrousel