import React from 'react'
// import {useState} from 'react'

export default function Rating({rating}){
    const fullStar = '<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>'
    const emptyStar = '<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>'

    return (
        <div>
            <img src= {{rating} < 1 ? emptyStar : fullStar}/>
            <img src= {{rating} < 2 ? emptyStar : fullStar}/>
            <img src= {{rating} < 3 ? emptyStar : fullStar}/>
            <img src= {{rating} < 4 ? emptyStar : fullStar}/>
            <img src= {{rating} < 5 ? emptyStar : fullStar}/>
        </div>
    )
}
// const Rating = () => {
//     const [rating, setRating] = useState(0)

//     function rate(){
//         setRating(
//             if ((rating) < 1){
//                 <div style={{display:"flex"}}>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                 </div>
//             } else if ((rating) > 1 && (rating) < 2){
//                 <div style={{display:"flex"}}>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                 </div>
//                 //se pinta 1 rellena
//             } else if ((rating) > 2 && (rating) < 3){
//                 <div style={{display:"flex"}}>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                 </div>
//                     //se pintan 2 rellenas
//             } else if ((rating) > 3 && (rating) < 4){
//                 <div style={{display:"flex"}}>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                 </div>
//                 //se pintan 3 rellenas
//             } else if ((rating) > 4 && (rating) < 5){
//                 <div style={{display:"flex"}}>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                 </div>
//                 //se pintan 4 rellenas
//             } else {
//                 <div style={{display:"flex"}}>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                     <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//                 </div>
//                 //se pintan 5 rellenas
//             }
//         )}

//         return (
//             <div>
//             {rating}
//             {rate}
//             </div>
//         )
//     }




// export default function Rating({children}){
//     if ({children} < 1){
//         <div style={{display:"flex"}}>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//         </div>
//     } else if ({children} > 1 && {children} < 2){
//         <div style={{display:"flex"}}>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//         </div>
// //se pinta 1 rellena
// } else if ({children} > 2 && {children} < 3){
//     <div style={{display:"flex"}}>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//         </div>
//     //se pintan 2 rellenas
// } else if ({children} > 3 && {children} < 4){
//     <div style={{display:"flex"}}>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//     </div>
// //se pintan 3 rellenas
// } else if ({children} > 4 && {children} < 5){
//     <div style={{display:"flex"}}>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//         </div>
// //se pintan 4 rellenas
// } else {
//     <div style={{display:"flex"}}>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png"/>
//         </div>
// //se pintan 5 rellenas
//     }
//     return (<div style={{width:"200px", height:"30px"}}>{children}</div>)
//   }
